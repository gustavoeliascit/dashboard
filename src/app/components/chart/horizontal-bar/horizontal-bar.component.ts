import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.scss']
})
export class HorizontalBarComponent implements OnInit {

  @Input() tittle:string = '';
  @Input() time:string = '';
  @Input() value:string = '';
  @Input() growtIcon:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
