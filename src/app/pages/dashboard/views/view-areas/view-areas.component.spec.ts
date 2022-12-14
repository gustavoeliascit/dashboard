import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAreasComponent } from './view-areas.component';

describe('ViewAreasComponent', () => {
  let component: ViewAreasComponent;
  let fixture: ComponentFixture<ViewAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
