import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-tag',
  templateUrl: './row-tag.component.html',
  styleUrls: ['./row-tag.component.scss']
})
export class RowTagComponent implements OnInit {

  @Input() tittle:string = '';
  @Input() listTags:any[] = [{type:'',value:''}];

  constructor() { }

  ngOnInit(): void {
  }

}
