import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-container-cards',
  templateUrl: './container-cards.component.html',
  styleUrls: ['./container-cards.component.scss']
})

export class ContainerCardsComponent implements OnInit {

  @ViewChild('containerCards') containerCards!:ElementRef;

  listCard = [
    {
      tittle: 'COLABOARADORES ACT.',
      value: '30',
      porcent: '+2',
      caption: 'Ultimos 7 dias',
      icon: 'users',
      growt: 'up'
    },
    {
      tittle: 'HORAS DIARIAS AVERAGE.',
      value: '25',
      porcent: '-25%',
      caption: 'Ultimos 7 dias',
      icon: 'stopwatch',
      growt: 'down'
    },
    {
      tittle: 'PRODUCTIVIDAD AVERAGE',
      value: '55%',
      porcent: '-25%',
      caption: 'Ultimos 7 dias',
      icon: 'screen',
      growt: 'down'
    },
    {
      tittle: 'AVERAGE HORAS SEMANALES',
      value: '29',
      porcent: '+25%',
      caption: 'Ultimos 7 dias',
      icon: 'calendar',
      growt: 'up'
    },
    {
      tittle: 'PRODUCTIVIDAD SEM. AVG.',
      value: '52%',
      porcent: '-12%',
      caption: 'X colaborador trimestre a la Fecha',
      icon: 'screen',
      growt: 'down'
    },
    {
      tittle: 'PRESUP. HRS MENSUALES',
      value: '1500/300',
      caption: 'Mes a la fecha',
      icon: 'cash',

      growt: 'warning'
    }
  ]

  isDownMouse = false;
  startx:number = 0;
  scrolLeft:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startSlider();
  }


  startSlider(){

    const marqueeElementsDisplayed = this.listCard.length;
    const marqueeContent = document.querySelector(".slider");


    setInterval(()=>{

      for(let i=0; i<marqueeElementsDisplayed; i++) {
        marqueeContent!.appendChild(marqueeContent!.children[i].cloneNode(true));
      }

    },10000)
  }

  dragCards(event:MouseEvent){
    this.isDownMouse = true;
    this.startx = event.pageX - this.containerCards.nativeElement.offsetLeft;
    this.scrolLeft = this.containerCards.nativeElement.scrollLeft;
  }

  dragLeave(){
    this.isDownMouse = false;
  }

  dragUp(){
    this.isDownMouse = false;
  }

  dragMove(event:MouseEvent){
    if (!this.isDownMouse) return;
    event.preventDefault();
    const x = event.pageX - this.containerCards.nativeElement.offsetLeft;
    const walk = x - this.startx;
    this.containerCards.nativeElement.scrollLeft = this.scrolLeft - walk;
  }

}
