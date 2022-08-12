import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss']
})
export class TableHeadComponent implements OnInit {

  @Input() tittle:string = '';
  @Input() loadState:boolean = true;
  @Input() icon:string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
