import { Photo } from './photo';

export interface Member {
  id: number;
  username: string;
  photoUrl: string;
  age: number;
  knownAs?: any;
  created: Date;
  lastActive: Date;
  gender?: any;
  information?: any;
  lookingFor?: any;
  interests?: any;
  introduction: any;
  city?: any;
  country?: any;
  photos: Photo[];
}
