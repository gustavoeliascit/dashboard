import { DashboardService } from './../../../service/dashboard.service';
import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit, AfterViewInit {

  @ViewChild('tBody') tbody!:ElementRef;

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

  ngAfterViewInit(): void {

      let number = 0;
      setInterval(()=>{
        //this.tbody.nativeElement.scroll(0, number = number + 4)
      },100)

      this.tbody.nativeElement.addEventListener('scroll', (event:any) => {console.log(event)});
    }



    startPagination(){
  }

}
