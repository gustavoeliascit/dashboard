import { DashboardService } from './../../service/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.scss']
})
export class TemporizadorComponent implements OnInit {

  constructor(public dashboardService:DashboardService) { }

  ngOnInit(): void {

    this.startConic();
  }

  valueRest = 2.4 ;
  offset = 160;

  startConic(){

    this.dashboardService.TimeLeft$
    .subscribe(time=>{
      if(time ===60){
        this.offset = 160;
      }

      this.offset = this.offset - this.valueRest;

      let circularProgress = document.querySelector<HTMLElement>(".circle");
      circularProgress!.style.strokeDashoffset = String(this.offset);
    })

  }

}
