import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../services/user.service';
import { UserAddUpdateComponent } from '../user-add-update/user-add-update.component';
import { UserViewComponent } from '../user-view/user-view.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit {

  public displayedColumns: string[];
  public data: UserModel[];
  public resultsLength: number;
  private pageOffset: number;
  public isLoadingResults: boolean;
  public isRateLimitReached: boolean;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private snackBar: MatSnackBar,
    private userService: UserService,
    public dialog: MatDialog) {

    this.displayedColumns = ['id', 'name', 'dateOfBirth', 'email', 'status', 'hourlyRate', 'actionBtns'];
    this.data = [];
    this.resultsLength = 0;
    this.pageOffset = 0;
    this.isLoadingResults = true;
    this.isRateLimitReached = false;
  }

  ngAfterViewInit() {
    this.fetchUsers();
  }

  private async fetchUsers() {
    this.isLoadingResults = true;
    let users: any = {};
    try {
      users = await this.userService.get(this.pageOffset);
      this.data = users.data;
      this.resultsLength = users.total;
    } catch (err) {
      this.snackBar.open('Something went wrong!', 'Close', {
        duration: 5000
      });
    }
    this.isLoadingResults = false;
  }

  public nextPage(e: MatPaginator) {
    this.pageOffset = e.pageIndex;
    this.fetchUsers();
  }

  public newUser(): void {
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

  public viewRow(row: UserModel) {
    this.dialog.open(UserViewComponent, {
      disableClose: true,
      width: '400px',
      data: row
    });
  }

  public updateRow(row: UserModel) {
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

  public deleteRow(row: UserModel) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.delete(row.id);
        this.snackBar.open('User deleted!', 'Close', {
          duration: 5000
        });
        this.fetchUsers();
      }
    });
  }

}
