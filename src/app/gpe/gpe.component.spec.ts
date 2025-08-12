import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpeComponent } from './gpe.component';

describe('GpeComponent', () => {
  let component: GpeComponent;
  let fixture: ComponentFixture<GpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GpeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
