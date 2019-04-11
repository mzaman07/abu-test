import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, ValidatorFn } from '@angular/forms';
import { CluesService } from '../_services/clues.service';
import { CategoryClueCount } from '../_models/category-clue-count';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryListForm : FormGroup;
  currentCategories : CategoryClueCount [] = [];
  
  constructor(
    private formBuilder : FormBuilder,
    private clueService : CluesService) { }

  ngOnInit() {
    this.categoryListForm = this.formBuilder.group({
      count : ['1',[Validators.required,Validators.min(1),Validators.max(100)]],
      offset : ['0',[Validators.required,Validators.min(0)]],
    });
  }

  // Get all the categories requested via the form params of count and offset
  categoriesFilter() {
    if(!this.categoryListForm.invalid) {
      const count = this.categoryListForm.value.count;
      const offset = this.categoryListForm.value.offset;
      this.clueService.getCategories(count,offset).subscribe((result : CategoryClueCount[])=>{
        this.clueService.setCategoriesMessage(result);
      },error=>{
        console.error("Request to server failed: Code: "+ error.status.toString() + "Reason: " + error.status.message);
      })
    }
  }

}
