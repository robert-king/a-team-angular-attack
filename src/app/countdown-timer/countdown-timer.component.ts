import {Component, OnInit} from '@angular/core';
import {timer} from 'rxjs/observable/timer';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  secondsCount = 30;

  constructor() {
  }

  ngOnInit() {
    timer(0, 1000).subscribe(() => {
      this.secondsCount -= 1;
    });
  }

}
