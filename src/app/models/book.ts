import { v4 as uuidv4 } from 'uuid';
export class Book {
  id = uuidv4();
  name: string = '';
  description: string = '';
  imageUrl: string = '';
  status = status.AVAILABLE;
  createdAt: Date = new Date();

  updatedAt: Date = new Date();
}

export enum status {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
  LEND = 'LEND',
}
