import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
