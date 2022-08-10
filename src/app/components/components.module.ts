import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './top-header/top-header.component';
import { CardComponent } from './card/card.component';
import { ContainerCardsComponent } from './container-cards/container-cards.component';
import { AsideComponent } from './aside/aside.component';
import { TimerComponent } from './timer/timer.component';
import { TagComponent } from './tag/tag.component';
import { RowTagComponent } from './row-tag/row-tag.component';
import { ChartHorizontalBarsComponent } from './chart/chart-horizontal-bars/chart-horizontal-bars.component';
import { HorizontalBarComponent } from './chart/horizontal-bar/horizontal-bar.component';

@NgModule({
  declarations: [TopHeaderComponent, CardComponent, ContainerCardsComponent, AsideComponent, TimerComponent, TagComponent, RowTagComponent, ChartHorizontalBarsComponent, HorizontalBarComponent],
  imports: [
    CommonModule
  ],
  exports :[
    TopHeaderComponent,
    CardComponent,
    ContainerCardsComponent,
    AsideComponent
  ]
})
export class ComponentsModule { }
