import { Component, OnInit, Input } from '@angular/core';
import { question} from '../shared/interface'
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  isTimeUp = false;
  questions: question;
  constructor() { }

  ngOnInit() {
    this.questions  = new question ();
    this.questions.A = 'What is the name of '; 
  }

  // Load all the questions in Config
  initialise() {

  }
  //Randomly select the next question
  refresh () {
    let newQuestion = new question();
    newQuestion.A = 'response A ';
    newQuestion.B = 'response B';
    newQuestion.C = 'response C';
    newQuestion.D = 'response D';
    newQuestion.answer = 'response is one of A, B, C or D';
    newQuestion.audioUrl = 'response is one of A, B, C or D';
    this.questions = newQuestion;
  };

}