import { Injectable } from '@angular/core';
import {question} from '../shared/interface'

import {Observable} from 'rxjs/Observable';
@Injectable()
export class QuestionService {
  constructor() { 

  }


   nextQuestion(): question  {
    let newQuestion = new question();
    newQuestion.label = 'Which of these U.S Presidents appeared on the television series "laugh-In"?';
    newQuestion.A = 'Lyndon Johnson';
    newQuestion.B = 'Someone Else';
    newQuestion.C = 'Another answer';
    newQuestion.D = 'Another..';
    newQuestion.answer = 'response is one of A, B, C or D';
    newQuestion.audioUrl = 'response is one of A, B, C or D';
    return newQuestion;
  }  

  
   



}
