import { DashboardService } from './../../../service/dashboard.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit {

  @Input() listData:any[] = [];
  @Input() columnsName:any[] = [];
  @Input() typeTable:string = 'default';
  //Type tables: default, activity, date and project
  constructor(private dashboardService:DashboardService) { }


  start:number = 0;
  end:number = 10;
  ngOnInit(): void {
    this.startPagination();
  }


  startPagination(){

  }

}
