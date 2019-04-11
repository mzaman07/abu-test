import { Injectable } from '@angular/core';
import { Adapter } from '../_utilities/adapter';

export class Category {
   constructor(
    public id:number,
    public title:string,
    public created_at:string,
    public updated_at:string,
    public clues_count:number) {}
}

@Injectable({
    providedIn: 'root'
  })
export class CategoryAdapter implements Adapter<Category> {
    
    adapt(item: any): Category {
       return new Category(
         item.id,
         item.title,
         item.created_at,
         item.updated_at,
         item.clues_count
        );
      }
}