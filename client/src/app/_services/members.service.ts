import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Member } from '../_model/member';
import { PaginatedResult } from '../_model/pagination';
import { User } from '../_model/user';
import { UserParams } from '../_model/userParams';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  baseUrl = environment.apiUrl;
  members: Member[] = [];
  memberCache = new Map();
  userParams!: UserParams;
  user!: User | null;

  constructor(
    private httpClient: HttpClient,
    private accountService: AccountService
  ) {
    this.accountService.currentUser$.pipe(take(1)).subscribe((user) => {
      this.user = user;
      this.userParams = new UserParams(user);
    });
  }

  getUserParams() {
    return this.userParams;
  }

  setUserParams(userParam: UserParams) {
    this.userParams = userParam;
  }

  resetFilters() {
    this.userParams = new UserParams(this.user);
    return this.userParams;
  }

  getMembers(userParams: UserParams) {
    var response = this.memberCache.get(Object.values(userParams).join('-'));
    if (response) return of(response);

    let params = this.getPaginationHeaders(
      userParams.pageNumber,
      userParams.pageSize
    );

    params = params.append('minAge', userParams.minAge.toString());
    params = params.append('maxAge', userParams.maxAge.toString());
    params = params.append('gender', userParams.gender);
    params = params.append('orderBy', userParams.orderBy);

    return this.getPaginatedResult<Member[]>(
      this.baseUrl + 'users',
      params
    ).pipe(
      map((response) => {
        this.memberCache.set(Object.values(userParams).join('-'), response);
        return response;
      })
    );
  }

  getMember(username: string | null) {
    //"find" returns undefined if no value matches predicate
    const member = [...this.memberCache.values()]
      .reduce((arr, elem) => arr.concat(elem.result), [])
      .find((member: Member) => member.username === username);
    if (member) return of(member);
    return this.httpClient.get<Member>(this.baseUrl + 'users/' + username);
  }

  updateMember(member: Member) {
    return this.httpClient.put(this.baseUrl + 'users', member).pipe(
      map(() => {
        const index = this.members.indexOf(member);
        this.members[index] = member;
      })
    );
  }

  setMainPhoto(photoId: number) {
    return this.httpClient.put(
      this.baseUrl + 'users/set-main-photo/' + photoId,
      {}
    );
  }

  deletePhoto(photoId: number) {
    return this.httpClient.delete(
      this.baseUrl + 'users/delete-photo/' + photoId
    );
  }

  addLikes(username: string) {
    return this.httpClient.post(this.baseUrl + 'likes/' + username, {});
  }

  getLikes(predicate: string, pageNumber: number, pageSize: number) {
    let params = this.getPaginationHeaders(pageNumber, pageSize);
    params = params.append('predicate', predicate);
    return this.getPaginatedResult<Partial<Member[]>>(
      this.baseUrl + 'likes',
      params
    );
  }

  private getPaginatedResult<T>(url: string, params: HttpParams) {
    const paginatedResults: PaginatedResult<T> = new PaginatedResult<T>();
    return this.httpClient.get<T>(url, { observe: 'response', params }).pipe(
      map((response) => {
        paginatedResults.result = response.body as T;
        if (response.headers.get('Pagination') !== null) {
          paginatedResults.pagination = JSON.parse(
            response.headers.get('Pagination') || ''
          );
        }
        return paginatedResults;
      })
    );
  }

  private getPaginationHeaders(pageNumber: number, pageSize: number) {
    let params = new HttpParams();

    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return params;
  }
}
