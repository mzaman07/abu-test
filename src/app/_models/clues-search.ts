import { Category } from './category';
import { Injectable } from '@angular/core';
import { Adapter } from '../_utilities/adapter';

export class ClueSearch {
  constructor(
    public id: number,
    public answer: string,
    public question: string,
    public value: number,
    public airdate: string,
    public created_at: string,
    public updated_at: string,
    public category_id: number,
    public game_id: number,
    public invalid_count: number,
    public category: Category) { }
}


@Injectable({
    providedIn: 'root'
  })
export class ClueSearchAdapter implements Adapter<ClueSearch> {
    
    adapt(item: any): ClueSearch {
       return new ClueSearch(
         item.id,
         item.answer,
         item.question,
         item.value,
         item.airdate,
         item.created_at,
         item.updated_at,
         item.category_id,
         item.game_id,
         item.invalid_count,
         item.category
        );
      }
}