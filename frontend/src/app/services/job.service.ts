import { Injectable } from '@angular/core';
import { FeathersService } from '../shared/feathers.service';
import { FeathersCurdService } from './feathers-curd.service';
import { JobModel } from '../components/job/job-model';

@Injectable({
  providedIn: 'root'
})
export class JobService extends FeathersCurdService {

  constructor(private feathers: FeathersService) {
    super(feathers.createService<JobModel>('job'));
  }

}
