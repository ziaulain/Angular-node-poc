import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobAddUpdateComponent } from './job-add-update.component';

describe('JobAddUpdateComponent', () => {
  let component: JobAddUpdateComponent;
  let fixture: ComponentFixture<JobAddUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        {
          provide: MAT_DIALOG_DATA, useValue: {
            "id": 2,
            "title": "Software Engineer",
            "description": "Full stack position",
            "createdAt": "2019-10-23T13:05:29.000Z",
            "updatedAt": "2019-10-23T13:05:29.000Z"
          }
        },
      ],
      declarations: [JobAddUpdateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
