import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownBtnComponent } from './drop-down-btn.component';

describe('DropDownBtnComponent', () => {
  let component: DropDownBtnComponent;
  let fixture: ComponentFixture<DropDownBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropDownBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
