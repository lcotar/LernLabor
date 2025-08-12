import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WRSComponent } from './wrs.component';

describe('WRSComponent', () => {
  let component: WRSComponent;
  let fixture: ComponentFixture<WRSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WRSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
