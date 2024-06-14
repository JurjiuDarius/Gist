import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGistsComponent } from './all-gists.component';

describe('AllGistsComponent', () => {
  let component: AllGistsComponent;
  let fixture: ComponentFixture<AllGistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllGistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllGistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
