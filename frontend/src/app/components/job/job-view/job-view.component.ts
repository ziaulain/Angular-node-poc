import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobModel } from '../job-model';
@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.scss']
})
export class JobViewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<JobViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: JobModel) { }

  ngOnInit() { }

  public close(): void {
    this.dialogRef.close();
  }

}
