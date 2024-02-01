import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectedusersComponent } from './conectedusers.component';

describe('ConectedusersComponent', () => {
  let component: ConectedusersComponent;
  let fixture: ComponentFixture<ConectedusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConectedusersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConectedusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
