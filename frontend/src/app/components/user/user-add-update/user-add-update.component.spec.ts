import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserAddUpdateComponent } from './user-add-update.component';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('UserAddUpdateComponent', () => {
  let component: UserAddUpdateComponent;
  let fixture: ComponentFixture<UserAddUpdateComponent>;

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
      declarations: [UserAddUpdateComponent],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: null },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form invalid On empty and valid with data', () => {
    const name = component.userForm.controls.name;
    const dateOfBirth = component.userForm.controls.dateOfBirth;
    const email = component.userForm.controls.email;
    const status = component.userForm.controls.status;
    const hourlyRate = component.userForm.controls.hourlyRate;

    expect(name.valid).toBeFalsy();
    expect(dateOfBirth.valid).toBeFalsy();
    expect(email.valid).toBeFalsy();
    expect(status.valid).toBeFalsy();
    expect(hourlyRate.valid).toBeFalsy();

    name.setValue('Zia ul ain');
    dateOfBirth.setValue('2019-01-07T04:00:00.000Z');
    email.setValue('m.ziaulain@gmail.com');
    status.setValue('male');
    hourlyRate.setValue(5);

    expect(name.valid).toBeTruthy();
    expect(dateOfBirth.valid).toBeTruthy();
    expect(email.valid).toBeTruthy();
    expect(status.valid).toBeTruthy();
    expect(hourlyRate.valid).toBeTruthy();
  });


  it('Submitting Form', async () => {
    const name = component.userForm.controls.name;
    const dateOfBirth = component.userForm.controls.dateOfBirth;
    const email = component.userForm.controls.email;
    const status = component.userForm.controls.status;
    const hourlyRate = component.userForm.controls.hourlyRate;

    name.setValue('Zia ul ain');
    dateOfBirth.setValue('1992-10-09T19:00:00.000Z');
    email.setValue('m.ziaulain@gmail.com');
    status.setValue('male');
    hourlyRate.setValue(5);

    await component.onSubmit();

    expect(component.objectSaveRes.name).toBe('Zia ul ain');
    expect(component.objectSaveRes.dateOfBirth).toBe('1992-10-09T19:00:00.000Z');
    expect(component.objectSaveRes.email).toBe('m.ziaulain@gmail.com');
    expect(component.objectSaveRes.status).toBe('male');
    expect(component.objectSaveRes.hourlyRate).toBe(5);
  });
});
