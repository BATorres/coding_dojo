import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnirseSalaComponent } from './unirse-sala.component';

describe('UnirseSalaComponent', () => {
  let component: UnirseSalaComponent;
  let fixture: ComponentFixture<UnirseSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnirseSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnirseSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
