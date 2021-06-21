import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandNewComponent } from './band-new.component';

describe('BandNewComponent', () => {
  let component: BandNewComponent;
  let fixture: ComponentFixture<BandNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
