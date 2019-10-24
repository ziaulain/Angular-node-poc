import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserAddUpdateComponent } from './user-add-update.component';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('UserAddUpdateComponent', () => {
  let component: UserAddUpdateComponent;
  let fixture: ComponentFixture<UserAddUpdateComponent>;

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
        { provide: MatDialogRef, useValue: {} },
        {
          provide: MAT_DIALOG_DATA, useValue: {
            "id": 2,
            "name": "zia ul ain",
            "dateOfBirth": "2019-10-23T13:05:29.000Z",
            "email": "m.ziaulain@gmail.com",
            "status": "male",
            "hourlyRate": "15.0000",
            "createdAt": "2019-10-23T13:05:29.000Z",
            "updatedAt": "2019-10-23T13:05:29.000Z"
          }
        },
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
});
