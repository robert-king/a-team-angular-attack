import { Injectable } from '@angular/core';
import * as globals from '../shared/interface'

import {Observable} from 'rxjs/Observable';
@Injectable()
export class QuestionService {


  //questions: question[] = [{label:'Which of these U.S Presidents appeared on the television series "laugh-In"?',A:'A',B:'B',C:'C',D:'D',answer:'ANSWER',audioUrl:'URL'}];
  constructor() { 

  }
   nextQuestion(): globals.question  {
       return globals.questions[2];
  }  

  
   



}
