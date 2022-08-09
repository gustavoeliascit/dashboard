import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() tittle:string = '';
  @Input() value:string = '';
  @Input() porcent:string | undefined = '';
  @Input() caption:string = '';
  @Input() backgroundIcon:string = '';
  @Input() icon:string = '';
  @Input() size:string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
