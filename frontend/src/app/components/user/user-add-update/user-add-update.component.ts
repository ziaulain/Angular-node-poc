import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../services/user.service';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-user-add-update',
  templateUrl: './user-add-update.component.html',
  styleUrls: ['./user-add-update.component.scss']
})
export class UserAddUpdateComponent implements OnInit {

  public newUser: boolean;
  public isLoading: boolean;
  public userForm: FormGroup;
  public todayDate: Date;

  constructor(
    public dialogRef: MatDialogRef<UserAddUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserModel,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private userService: UserService) {

    this.newUser = true;
    this.isLoading = false;
    this.todayDate = new Date();
  }

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

  public async onSubmit() {
    this.isLoading = true;
    try {
      if (this.data) {
        await this.userService.update(this.data.id, this.userForm.value);
        this.snackBar.open('User Updated successfully!', 'Close', {
          duration: 5000
        });
      } else {
        await this.userService.create(this.userForm.value);
        this.snackBar.open('User Created successfully!', 'Close', {
          duration: 5000
        });
      }
    } catch (err) {
      this.snackBar.open('Something went wrong!', 'Close', {
        duration: 5000
      });
    }
    this.isLoading = false;
    this.dialogRef.close('Updated!');
  }

  public cancel() {
    this.dialogRef.close();
  }

}
