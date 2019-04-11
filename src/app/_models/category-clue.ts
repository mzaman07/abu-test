import { Injectable } from '@angular/core';
import { Adapter } from '../_utilities/adapter';

export class CategoryClue {
  constructor(
    public id: number,
    public answer: string,
    public question: string,
    public value: number,
    public airdate: string,
    public category_id: number,
    public game_id: number,
    public invalid_count: number) {}
}

@Injectable({
    providedIn: 'root'
  })
export class CategoryClueAdapter implements Adapter<CategoryClue> {
    
    adapt(item: any): CategoryClue {
       return new CategoryClue(
         item.id,
         item.answer,
         item.question,
         item.value,
         item.airdate,
         item.category_id,
         item.game_id,
         item.invalid_count,
        );
      }
}