import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.scss']
})
export class TemporizadorComponent implements OnInit {

  timeLeft: number = 60;
  interval:any;
  subscribeTimer: any;

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

}
