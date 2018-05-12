import { Injectable } from '@angular/core';
import * as globals from '../shared/interface'

import {Observable} from 'rxjs/Observable';
@Injectable()
export class QuestionService {
  constructor() { 
  }
  nextQuestion(): globals.question  {
       return globals.questions[this.generate()];
  }  
  generate():number  {
    return  this.getRandomInt(0, (globals.questions.length -1));
  }
  getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 }
