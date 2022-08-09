import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowTagComponent } from './row-tag.component';

describe('RowTagComponent', () => {
  let component: RowTagComponent;
  let fixture: ComponentFixture<RowTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
