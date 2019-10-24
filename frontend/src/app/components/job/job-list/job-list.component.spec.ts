import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JobAddUpdateComponent } from '../job-add-update/job-add-update.component';
import { JobViewComponent } from '../job-view/job-view.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';


import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { JobListComponent } from './job-list.component';

describe('JobListComponent', () => {
  let component: JobListComponent;
  let fixture: ComponentFixture<JobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        JobListComponent,
        JobAddUpdateComponent,
        JobViewComponent,
        ConfirmDialogComponent
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
