import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  @Input() type:string = 'general';

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


  tableBoardData = [{
    nombre: 'Dianne Russell',
    actividad :'83%',
    horas: '8.2'
  },{
    nombre: 'Ronald Richards',
    actividad :'72%',
    horas: '7.2'
  },{
    nombre: 'Jenny Wilson',
    actividad :'53%',
    horas: '6.3'
  }]

  columnsBoardData= [{name:'nombre'},{name:'ACTV.'},{name: 'HORAS'}]


  columnsDateData = [{name:'nombre'},{name:'últ. Fecha Visto'},{name: 'Tiempo desde Últ. registro'}];
  tableDateData = [{
    nombre: 'Dianne Russell',
    date :'Jul, 03',
    time: '48 hrs'
  },{
    nombre: 'Ronald Richards',
    date :'Ago, 08',
    time: '24 hrs'
  },{
    nombre: 'Jenny Wilson',
    date :'Nov, 03',
    time: '18 hrs'
  }];

  columnsClientData = [{name:'nombre'},{name:'activ. (%)'}];

  tableClientData = [{
    nombre: 'Bip Bip',
    state: 'warning',
    activity: '30%'
  },{
    nombre :'Yalo Technologies',
    state : 'close',
    activity: '24 hrs'
  },{
    nombre :'Patmed',
    state: 'close',
    activity: '18 hrs'
  }];

  constructor() { }

  ngOnInit(): void {
  }

  closeAside(event:Event){
    let id = (<HTMLElement>event.target).id;
    if(id === 'layoutAside'){

      let aside = document.querySelector<HTMLElement>('.aside') ;
      aside!.classList!.toggle('open-aside');

      const body = document.querySelector('body');
      body!.classList!.toggle('overflow-hidden');
    }
  }

}
