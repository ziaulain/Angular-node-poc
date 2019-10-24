import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { JobService } from '../../../services/job.service';
@Component({
  selector: 'app-job-add-update',
  templateUrl: './job-add-update.component.html',
  styleUrls: ['./job-add-update.component.scss']
})
export class JobAddUpdateComponent implements OnInit {

  newJob = true;
  isLoading = false;
  jobForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<JobAddUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private jobService: JobService) { }

  ngOnInit() {
    this.jobForm = this.fb.group({
      id: null,
      title: ['', Validators.required],
      description: ['', [Validators.required]],
      createdAt: [null],
      updatedAt: [null]
    });
    if (this.data) {
      this.jobForm.setValue(this.data);
      this.newJob = false;
    }
  }

  async onSubmit(userForm: any) {
    this.isLoading = true;
    try {
      if (this.data) {
        await this.jobService.updateJob(this.data.id, this.jobForm.value);
        this.snackBar.open('Job Updated successfully!', 'Close', {
          duration: 5000
        });
      } else {
        await this.jobService.createJob(this.jobForm.value);
        this.snackBar.open('Job Created successfully!', 'Close', {
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
