import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClueSearch, ClueSearchAdapter } from '../_models/clues-search';
import { CategoryClueCount, CategoryClueCountAdapter } from '../_models/category-clue-count';
import { CategorySearch, CategorySearchAdapter } from '../_models/category-search';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CluesService {
  private baseurl = "http://jservice.io";
  private categoriesMessage = new Subject<any>();

  constructor(
    private http: HttpClient,
    private clueSearchAdapter: ClueSearchAdapter,
    private categoryClueCountAdapter: CategoryClueCountAdapter,
    private categorySearchAdapter : CategorySearchAdapter,
    ) { }

  getRandomClues(count:number) : Observable<ClueSearch []> {
    return this.http.get(this.baseurl + "/api/random?count=" + count.toString()).pipe(
      // mapping data to Plain Object
      map((data: any[]) => data.map(item => this.clueSearchAdapter.adapt(item))),
    );
  }

  getCluesByDateRange(start: string, end: string) : Observable<ClueSearch []>{
    // check if either is undefined
    let url = null;
    if(start != undefined && end != undefined) {
      url = this.baseurl + "/api/clues?min_date=" + start +
        "&max_date="+end;
    }
    else if(start != undefined && end == undefined)
    {
      url = this.baseurl + "/api/clues?min_date=" + start;
    }
    else {
      url = this.baseurl + "/api/clues?max_date=" + end;
    }

    return this.http.get(url).pipe(
      // mapping data to Plain Object
      map((data: any[]) => data.map(item => this.clueSearchAdapter.adapt(item))),
    );
  }

  getCategories(count:number,offset:number) : Observable<CategoryClueCount []> {
    const url = this.baseurl + "/api/categories?count=" + count.toString() +
    "&offset="+offset.toString();
    return this.http.get(url).pipe(
       // mapping data to Plain Object
       map((data: any[]) => data.map(item => this.categoryClueCountAdapter.adapt(item))),
    );
  }

  setCategoriesMessage(filterData : any = []) {
    this.categoriesMessage.next({message: filterData});
  }

  getCategoriesMessage() : Observable<any>{
    return this.categoriesMessage.asObservable();
  }

  searchByCategory(id:number) : Observable<CategorySearch> {
    const url = this.baseurl + "/api/category?id=" + id.toString();
    return this.http.get(url).pipe(
      // mapping data to Plain Object
      map((data: any) => this.categorySearchAdapter.adapt(data))
    );
  }
}
