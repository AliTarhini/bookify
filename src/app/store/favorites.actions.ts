import { Action } from '@ngrx/store';
import { Book } from '../models/book';

export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export class AddBookAction implements Action {
    readonly type = ADD_BOOK;

    constructor(public book: Book) {
        // empty
    }
}

export class RemoveBookAction implements Action {
    readonly type = REMOVE_BOOK;

    constructor(public book: Book) {
        // empty
    }
}

export type Action = AddBookAction | RemoveBookAction;