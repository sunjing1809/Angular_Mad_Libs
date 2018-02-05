import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibFormComponent } from './lib-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

describe('LibFormComponent', () => {
  let component: LibFormComponent;
  let fixture: ComponentFixture<LibFormComponent>;
  var originalTimeout;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LibFormComponent
      ],
      imports:[
        FormsModule,
        BrowserModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('LibFormComponent should create', () => {
    expect(component).toBeTruthy();
  });
});
