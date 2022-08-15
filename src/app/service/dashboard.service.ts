import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  //Timer
  view:string = 'general';
  timeLeft: number = 60;

  //Subjects
  private viewBS = new BehaviorSubject< string>('general');
  private timeLeftBS = new BehaviorSubject< number>(60);

  //Observables
  get View$(){return this.viewBS.asObservable();}
  get TimeLeft$(){return this.timeLeftBS.asObservable();}

  //Sets
  private setView(view:string){this.viewBS.next(view)};
  private setimeLeft(timeLeft:number){this.timeLeftBS.next(timeLeft)};

  interval:any;

  constructor() { }

  startTimer() {
    let contador = 1;
    let views = ['general','areas','clientes']


    this.interval = setInterval(() => {



      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.setimeLeft(this.timeLeft);

      } else {
        this.timeLeft = 60;
        this.setimeLeft(60);
        this.setView(views[contador])
        contador++;
        console.log(contador);
        if(contador === 3){
          contador = 0;
        }
      }
    },1000)
  }
}
