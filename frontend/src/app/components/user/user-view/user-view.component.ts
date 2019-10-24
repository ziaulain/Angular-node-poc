import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
interface UserModel {
  id?: number;
  name: string;
  dateOfBirth: Date;
  email: string;
  status: string;
  hourlyRate: number;
}
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserModel) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
