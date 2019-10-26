import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { JobService } from '../../../services/job.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobAddUpdateComponent } from '../job-add-update/job-add-update.component';
import { JobViewComponent } from '../job-view/job-view.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { JobModel } from '../job-model';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[] = ['id', 'title', 'description', 'actionBtns'];
  public data: JobModel[] = [];
  public resultsLength = 0;
  public isLoadingResults = true;
  private pageOffset = 0;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private snackBar: MatSnackBar,
    private jobService: JobService,
    public dialog: MatDialog) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.fetchJobs();
  }

  private async fetchJobs() {
    this.isLoadingResults = true;
    let jobs: any = {};
    try {
      jobs = await this.jobService.get(this.pageOffset);
      this.data = jobs.data;
      this.resultsLength = jobs.total;
    } catch (err) {
      this.snackBar.open('Something went wrong!', 'Close', {
        duration: 5000
      });
    }
    this.isLoadingResults = false;
  }

  public nextPage(e: MatPaginator) {
    this.pageOffset = e.pageIndex;
    this.fetchJobs();
  }

  public newJob() {
    const dialogRef = this.dialog.open(JobAddUpdateComponent, {
      disableClose: true,
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchJobs();
      }
    });
  }

  public viewRow(row: JobModel) {
    this.dialog.open(JobViewComponent, {
      disableClose: true,
      width: '400px',
      data: row
    });
  }

  public updateRow(row: JobModel) {
    const dialogRef = this.dialog.open(JobAddUpdateComponent, {
      disableClose: true,
      width: '400px',
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchJobs();
      }
    });
  }

  public deleteRow(row: JobModel) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.jobService.delete(row.id);
        this.snackBar.open('Job deleted!', 'Close', {
          duration: 5000
        });
        this.fetchJobs();
      }
    });
  }

}
