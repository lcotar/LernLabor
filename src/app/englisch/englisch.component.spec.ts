import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglischComponent } from './englisch.component';

describe('EnglischComponent', () => {
  let component: EnglischComponent;
  let fixture: ComponentFixture<EnglischComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglischComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglischComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
