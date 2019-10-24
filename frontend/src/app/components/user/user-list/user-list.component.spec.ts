import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserAddUpdateComponent } from '../user-add-update/user-add-update.component';
import { UserViewComponent } from '../user-view/user-view.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';


import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule, ReactiveFormsModule],
      declarations: [
        UserListComponent,
        UserAddUpdateComponent,
        UserViewComponent,
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
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
