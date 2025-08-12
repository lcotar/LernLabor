import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranzoesischComponent } from './franzoesisch.component';

describe('FranzoesischComponent', () => {
  let component: FranzoesischComponent;
  let fixture: ComponentFixture<FranzoesischComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FranzoesischComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FranzoesischComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
