import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManhourDetailComponent } from './manhour-detail.component';

describe('ManhourDetailComponent', () => {
  let component: ManhourDetailComponent;
  let fixture: ComponentFixture<ManhourDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManhourDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManhourDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
