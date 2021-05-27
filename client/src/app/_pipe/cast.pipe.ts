import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cast',
  pure: true,
})
export class CastPipe implements PipeTransform {
  transform<T>(value: T, args?: any): T {
    return value;
  }
}
