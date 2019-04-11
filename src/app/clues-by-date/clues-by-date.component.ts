import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, ValidatorFn } from '@angular/forms';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { CluesService } from '../_services/clues.service';
import { ClueSearch } from '../_models/clues-search';


@Component({
  selector: 'app-clues-by-date',
  templateUrl: './clues-by-date.component.html',
  styleUrls: ['./clues-by-date.component.css']
})
export class CluesByDateComponent implements OnInit {
  cluesByDateForm : FormGroup;
  clueSearchResult : ClueSearch[] = [];

  constructor(
    private formBuilder : FormBuilder,
    private clueService : CluesService
    ) { }

  ngOnInit() {
    this.cluesByDateForm = this.formBuilder.group({
      startDate: [''],
      endDate: ['']
    },{ validator: this.checkDates });
  }

  getCluesByDate() {
    if(!this.cluesByDateForm.invalid) {
      const start = this.cluesByDateForm.value.startDate
      const end = this.cluesByDateForm.value.endDate
      const formatStart = this.formatDate(start);
      const formatEnd = this.formatDate(end);

      this.clueService.getCluesByDateRange(formatStart,formatEnd).subscribe((result : ClueSearch[])=>{
        this.clueSearchResult = result;
      },error=>{
        console.error("Request to server failed: Code: "+ error.status.toString() + "Reason: " + error.status.message);
      });
    }
  }
  // custom date validator to check valid submission ranges
  checkDates(group: FormGroup) {
    if(group.controls.endDate.value < group.controls.startDate.value) {
      return { notValid:true }
    }
    return null;
  }

  formatDate(date:any) {
    const dateFormat = new Date(date);
    let month = '' + (dateFormat.getMonth() + 1),
        day = '' + dateFormat.getDate(),
        year = dateFormat.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');

  }

  clearDates() {
    this.cluesByDateForm.reset();
  }

}