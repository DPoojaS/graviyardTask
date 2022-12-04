import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglecardComponent } from './googlecard.component';

describe('GooglecardComponent', () => {
  let component: GooglecardComponent;
  let fixture: ComponentFixture<GooglecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooglecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GooglecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
