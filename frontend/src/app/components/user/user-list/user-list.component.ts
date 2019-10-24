import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../services/user.service';
import { UserAddUpdateComponent } from '../user-add-update/user-add-update.component';
import { UserViewComponent } from '../user-view/user-view.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'dateOfBirth', 'email', 'status', 'hourlyRate', 'actionBtns'];
  data: any[] = [];
  resultsLength = 0;
  pageOffset = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private snackBar: MatSnackBar,
    private userService: UserService,
    public dialog: MatDialog) { }

  ngAfterViewInit() {
    this.fetchUsers();
  }

  async fetchUsers() {
    this.isLoadingResults = true;
    let users: any = {};
    try {
      users = await this.userService.getUsers(this.pageOffset);
      this.data = users.data;
      this.resultsLength = users.total;
    } catch (err) {
      this.snackBar.open('Something went wrong!', 'Close', {
        duration: 5000
      });
    }
    this.isLoadingResults = false;
  }

  nextPage(e) {
    this.pageOffset = e.pageIndex;
    this.fetchUsers();
  }

  newUser(): void {
    const dialogRef = this.dialog.open(UserAddUpdateComponent, {
      disableClose: true,
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchUsers();
      }
    });
  }

  viewRow(row) {
    this.dialog.open(UserViewComponent, {
      disableClose: true,
      width: '400px',
      data: row
    });
  }

  updateRow(row) {
    const dialogRef = this.dialog.open(UserAddUpdateComponent, {
      disableClose: true,
      width: '400px',
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchUsers();
      }
    });
  }

  deleteRow(row) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(row.id);
        this.snackBar.open('User deleted!', 'Close', {
          duration: 5000
        });
        this.fetchUsers();
      }
    });
  }

}
