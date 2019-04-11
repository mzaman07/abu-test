import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, ValidatorFn } from '@angular/forms';
import { take } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { CluesService } from '../_services/clues.service';
import { CategorySearch } from '../_models/category-search';
import { CategoryClueCount } from '../_models/category-clue-count';
@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.css']
})
export class SearchCategoryComponent implements OnInit {
  categorySearchForm : FormGroup;
  currentCategories : CategoryClueCount[] = [];  
  searchResult : CategorySearch = null;
  subscription : Subscription;


  constructor(private formBuilder : FormBuilder,
    private clueService : CluesService) { }

  ngOnInit() {
    this.categorySearchForm = this.formBuilder.group({
      category : ['',Validators.required],
    });

    this.subscription = this.clueService.getCategoriesMessage().subscribe(data=>{
      this.currentCategories = data.message;
      this.categorySearchForm.controls.category.patchValue('',[Validators.required]);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  searchClueByCategory() {
    if(!this.categorySearchForm.invalid) {
      const selected = this.categorySearchForm.value.category;
      this.clueService.searchByCategory(selected).subscribe((result : CategorySearch)=>{
        this.searchResult = result;
      },error=>{
        console.error("Request to server failed: Code: " + error.status.toString() + "Reason: " + error.status.message);
      })
    }
  }
}
