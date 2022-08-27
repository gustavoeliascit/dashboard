import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  //Timer
  view:string = 'general';
  subView:string = 'dev';
  timeLeft: number = 60;

  //Subjects
  private viewBS = new BehaviorSubject< string>(this.view);
  private subViewBS = new BehaviorSubject< string>(this.subView);
  private timeLeftBS = new BehaviorSubject< number>(this.timeLeft);

  //Observables
  get View$(){return this.viewBS.asObservable();}
  get subView$(){return this.subViewBS.asObservable();}
  get TimeLeft$(){return this.timeLeftBS.asObservable();}

  //Sets
  private setView(view:string){this.viewBS.next(view)};
  private setSubView(view:string){this.subViewBS.next(view)};
  private setimeLeft(timeLeft:number){this.timeLeftBS.next(timeLeft)};

  interval:any;

  constructor() { }

  startTimer() {
    let contador = 1;
    let subContador = 0;

    let views = ['general','areas','clientes'];
    let subViews = ['dev','sac','design'];

    this.interval = setInterval(() => {

      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.setimeLeft(this.timeLeft);

      } else {

        this.timeLeft = 60;
        this.setimeLeft(60);
        this.setView(views[contador])

        if(contador != 1)
        {
          contador++;
        }else{
          this.setSubView(subViews[subContador]);
          subContador++;
          if(subContador === 3){
            contador++;
            subContador = 0;
          };
        }

        if(contador === 3){
          contador = 0;
        }
      }
    },1000)
  }

  changeNumberRowsForAnimation(){
    // Get the root element
    const root = document.documentElement;

    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--rows-displayed");

    const marqueeContent = document.querySelector("tbody");


    for(let i=0; i< Number(marqueeElementsDisplayed)*2; i++) {
      marqueeContent!.appendChild(marqueeContent!.children[i].cloneNode(true));
    }

    root.style.setProperty("--rows-elements", String(marqueeContent!.children.length));
  }
}
