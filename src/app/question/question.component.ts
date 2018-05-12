import { Component, OnInit, Input } from '@angular/core';
import { question} from '../shared/interface'
import { QuestionService } from '../question/question.service'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  providers: [ QuestionService],
})
export class QuestionComponent implements OnInit {
  isTimeUp = false;
  question: question;
 
  
  constructor(private questionService:QuestionService ) { }

  ngOnInit() {
    this.initialise();
    this.refresh();
  }

  // Loads the questions from the 
  initialise() :void {
    //TODO
  }
  //Randomly select the next question
  refresh ():void {
    this.question = this.questionService.nextQuestion();
  };

}