import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobService } from '../../../services/job.service';
import { JobModel } from '../job-model';
@Component({
  selector: 'app-job-add-update',
  templateUrl: './job-add-update.component.html',
  styleUrls: ['./job-add-update.component.scss']
})
export class JobAddUpdateComponent implements OnInit {

  public newJob: boolean;
  public isLoading: boolean;
  public jobForm: FormGroup;
  public objectSaveRes: any;

  constructor(
    public dialogRef: MatDialogRef<JobAddUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: JobModel,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private jobService: JobService) {

    this.newJob = true;
    this.isLoading = false;
    this.jobForm = this.fb.group({
      id: null,
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      createdAt: [null],
      updatedAt: [null]
    });
  }

  ngOnInit() {
    if (this.data) {
      this.jobForm.setValue(this.data);
      this.newJob = false;
    }
  }

  public async onSubmit() {
    this.isLoading = true;
    try {
      if (this.data) {
        this.objectSaveRes = await this.jobService.update(this.data.id, this.jobForm.value);
        this.snackBar.open('Job Updated successfully!', 'Close', {
          duration: 5000
        });
      } else {
        this.objectSaveRes = await this.jobService.create(this.jobForm.value);
        this.snackBar.open('Job Created successfully!', 'Close', {
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

  public cancel(): void {
    this.dialogRef.close();
  }

}
