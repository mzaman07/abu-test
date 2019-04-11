import { Injectable } from '@angular/core';
import { Adapter } from '../_utilities/adapter';

export class CategoryClueCount {
  constructor(
    public id: number,
    public title: string,
    public clues_count: number
    ) { }
}

@Injectable({
    providedIn: 'root'
  })
export class CategoryClueCountAdapter implements Adapter<CategoryClueCount> {
    
    adapt(item: any): CategoryClueCount {
       return new CategoryClueCount(
         item.id,
         item.title,
         item.clues_count,
        );
      }
}