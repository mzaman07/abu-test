import { Injectable } from '@angular/core';
import { Adapter } from '../_utilities/adapter';
import { CategoryClue } from './category-clue';

export class CategorySearch {
    constructor(
    public id: number,
    public title: string,
    public clues_count: number,
    public clues: CategoryClue) {}
}

@Injectable({
    providedIn: 'root'
  })
export class CategorySearchAdapter implements Adapter<CategorySearch> {
    
    adapt(item: any): CategorySearch {
       return new CategorySearch(
         item.id,
         item.title,
         item.clues_count,
         item.clues
        );
      }
}