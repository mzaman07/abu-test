import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, ValidatorFn } from '@angular/forms';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { CluesService } from '../_services/clues.service';
import { ClueSearch } from '../_models/clues-search';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';




@Component({
  selector: 'app-clues-by-random',
  templateUrl: './clues-by-random.component.html',
  styleUrls: ['./clues-by-random.component.css']
})
export class CluesByRandomComponent implements OnInit {
  randomCluesForm : FormGroup;
  randomClues : ClueSearch[] = [];

  constructor(
    private formBuilder : FormBuilder,
    private clueService : CluesService
    ) { }

  ngOnInit() {
    this.randomCluesForm = this.formBuilder.group({
      count : ['1',[Validators.required,Validators.min(1),Validators.max(100)]],
    });
  }


  getRandomClues() {
    if(this.randomCluesForm.valid) {
      // use service to fetch and populate randomClues
      this.clueService.getRandomClues(this.randomCluesForm.value.count).subscribe(
        (result : ClueSearch[])=>{
          this.randomClues = result;
        },
        error=>{
          console.error("Request to server failed: Code: "+ error.status.toString() + "Reason: " + error.status.message);
        }
      )
    }
  }

}
