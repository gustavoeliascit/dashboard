import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
