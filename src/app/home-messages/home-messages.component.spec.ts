import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMessagesComponent } from './home-messages.component';

describe('HomeMessagesComponent', () => {
  let component: HomeMessagesComponent;
  let fixture: ComponentFixture<HomeMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
