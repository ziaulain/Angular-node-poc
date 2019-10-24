import { Injectable } from '@angular/core';
import { FeathersService } from '../shared/feathers.service';

interface JobModel {
  id?: number;
  title: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobService: any;

  constructor(private feathers: FeathersService) {
    this.jobService = this.feathers.createService<JobModel>('job');
  }

  async createJob(user: JobModel) {
    return await this.jobService.create(user);
  }

  async updateJob(userId: number, user: JobModel) {
    return await this.jobService.update(userId, user);
  }

  async getJobs(pageNum: number) {
    return await this.jobService.find({
      query: {
        $skip: pageNum * 10
      }
    });
  }

  async deleteJob(id: number) {
    return await this.jobService.remove(id);
  }

}
