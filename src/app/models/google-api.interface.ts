import { Book } from './book';
export interface GoogleBooksApiInterface {
    kind: string,
    totalItems: number,
    items: Book[]
}