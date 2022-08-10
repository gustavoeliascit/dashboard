import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartHorizontalBarsComponent } from './chart-horizontal-bars.component';

describe('ChartHorizontalBarsComponent', () => {
  let component: ChartHorizontalBarsComponent;
  let fixture: ComponentFixture<ChartHorizontalBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartHorizontalBarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartHorizontalBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
