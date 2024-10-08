import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizsectionComponent } from './quizsection.component';

describe('QuizsectionComponent', () => {
  let component: QuizsectionComponent;
  let fixture: ComponentFixture<QuizsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizsectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
