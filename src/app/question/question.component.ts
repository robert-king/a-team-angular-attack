import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  isTimeUp = false;
  
  constructor() { }

  ngOnInit() {
  }

  // Load all the questions in Config
  initialise() {

  }
  //Randomly select the next question
  refresh () {

  };

}