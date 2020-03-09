import { Book } from './../models/book';
import { createFeatureSelector } from '@ngrx/store';
import * as favoritesAction from './favorites.actions';

export interface FavoritesState {
    favorites: Book[]
}

export const favoritesState = createFeatureSelector<FavoritesState>('favoritesState');

const initialState: FavoritesState = {
    favorites: []
}

export function favoritesReducer(state = initialState, action: favoritesAction.Action): FavoritesState {
    switch (action.type) {
        case favoritesAction.ADD_BOOK:
            const book = action.book;
            const newBooks = [...state.favorites, book];
            return { favorites: newBooks }
        case favoritesAction.REMOVE_BOOK:
            const filteredBooks = state.favorites.filter(f => f.id !== action.book.id)
            return { favorites: filteredBooks }
        default:
            return initialState;
    }
}