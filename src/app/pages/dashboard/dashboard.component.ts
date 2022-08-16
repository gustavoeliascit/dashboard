import { DashboardService } from './../../service/dashboard.service';
import { Component, OnInit} from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  view:string = '';

  listData = [{
    nombre:'Ralph Edwards',
    actividad:'53%',
    horas: '10.2',
    semanales: '35/34'
  },{
    nombre:'Floyd Miles',
    actividad:'100%',
    horas: '3.5',
    semanales: '33/34'
  },{
    nombre:'Ralph Edwards',
    actividad:'53%',
    horas: '10.2',
    semanales: '35/34'
  },{
    nombre:'Wade Warren',
    actividad:'88%',
    horas: '11.3',
    semanales: '38/44'
  },{
    nombre:'Courtney Henry',
    actividad:'38%',
    horas: '9.4',
    semanales: '23/44'
  },{
    nombre:'Ralph Edwards',
    actividad:'53%',
    horas: '10.2',
    semanales: '35/34'
  },{
    nombre:'Eleanor Pena',
    actividad:'5%',
    horas: '16.8',
    semanales: '12/44'
  },{
    nombre:'Ralph Edwards',
    actividad:'53%',
    horas: '10.2',
    semanales: '35/34'
  },{
    nombre:'Jerome Bell',
    actividad:'99%',
    horas: '19.3',
    semanales: '24/44'
  },{
    nombre:'Jenny Wilson',
    actividad:'93%',
    horas: '8.7',
    semanales: '22/44'
  }]


  columnsName = [{
    name: 'nombre del colaborador',
    icon: false
  },{
    name: 'promed. activ.',
    icon: true
  },{
    name: 'promed. horas',
    icon: true
  },{
    name: 'Horas semanales',
    icon: true
  }]


  actividadesList = [
    { type: 'check', value: '50%' },
    { type: 'warning', value: '40% y 50%' },
    { type: 'close', value: '40%' }
  ]

  horasList = [
    { type: 'check', value: '6' },
    { type: 'warning', value: '6 y 4' },
    { type: 'close', value: '4' }
  ]

  semanalList = [
    { type: 'check', value: '35' },
    { type: 'warning', value: '35 y 25' },
    { type: 'close', value: '25' }
  ]
  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.startTimer();

    this.dashboardService.View$.subscribe(data=>{
      this.view = data;
    })
  }


}
