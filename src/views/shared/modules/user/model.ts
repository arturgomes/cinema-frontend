import { Movie } from '../movie/model';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatarBase64: string;
  movie: Movie | undefined;
  sitRow: number | undefined;
  sitPlace: number | undefined;
}
