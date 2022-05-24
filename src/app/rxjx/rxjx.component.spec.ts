import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjxComponent } from './rxjx.component';

describe('RxjxComponent', () => {
  let component: RxjxComponent;
  let fixture: ComponentFixture<RxjxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
