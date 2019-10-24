import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-add-update',
  templateUrl: './user-add-update.component.html',
  styleUrls: ['./user-add-update.component.scss']
})
export class UserAddUpdateComponent implements OnInit {

  newUser = true;
  isLoading = false;
  userForm: FormGroup;
  todayDate: Date = new Date();


  constructor(
    public dialogRef: MatDialogRef<UserAddUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      id: null,
      name: ['', Validators.required],
      dateOfBirth: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      status: ['', Validators.required],
      hourlyRate: [null, [Validators.required, Validators.min(0)]],
      createdAt: [null],
      updatedAt: [null]
    });
    if (this.data) {
      this.userForm.setValue(this.data);
      this.newUser = false;
    }
  }

  async onSubmit(userForm: any) {
    this.isLoading = true;
    try {
      if (this.data) {
        await this.userService.updateUser(this.data.id, userForm.value);
        this.snackBar.open('User Updated successfully!', 'Close', {
          duration: 5000
        });
      } else {
        await this.userService.createUser(userForm.value);
        this.snackBar.open('User Created successfully!', 'Close', {
          duration: 5000
        });
      }

    } catch (err) {
      console.log(err);
    }
    this.isLoading = false;
    this.dialogRef.close('Updated!');
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
