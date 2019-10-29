import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobAddUpdateComponent } from './job-add-update.component';
import { isRegExp } from 'util';

describe('JobAddUpdateComponent', () => {
  let component: JobAddUpdateComponent;
  let fixture: ComponentFixture<JobAddUpdateComponent>;
  const dialogMock = {
    close: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: null },
      ],
      declarations: [JobAddUpdateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAddUpdateComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form invalid on empty and valid with data', () => {
    const title = component.jobForm.controls.title;
    const description = component.jobForm.controls.description;
    expect(title.valid).toBeFalsy();
    expect(description.valid).toBeFalsy();
    title.setValue('Software development');
    description.setValue('Full stack engineer');
    expect(title.valid).toBeTruthy();
    expect(description.valid).toBeTruthy();
  });


  it('Submitting Form', async () => {
    const title = component.jobForm.controls.title;
    const description = component.jobForm.controls.description;

    title.setValue('Software development');
    description.setValue('Full stack engineer');

    await component.onSubmit();

    expect(component.objectSaveRes.title).toBe('Software development');
    expect(component.objectSaveRes.description).toBe('Full stack engineer');
  });


});
