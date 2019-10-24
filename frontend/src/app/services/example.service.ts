import { Injectable, OnInit } from '@angular/core';
import { FeathersService } from '../shared/feathers.service';






@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(
    private feathers: FeathersService
  ) { }

  async showExample() {
    // const jobService = this.feathers.createService<JobModel>('job');
    // const userService = this.feathers.createService<UserModel>('user');
    // const job: JobModel = { title: 'front-end developer', description: 'Wow! This is a description! Surprised?' };
    // const user: UserModel = {
    //   name: 'zia ul ain',
    //   dateOfBirth: new Date(),
    //   email: 'm.ziaulain@gmail.com',
    //   status: 'male',
    //   hourlyRate: 15
    // };
    // console.log('%c Job service example', 'font-size:20px;font-weight:bold');

    // // CREATE
    // const createdJob = await jobService.create(job);
    // console.log('Created Job:', createdJob);
    // const createdUser = await userService.create(user);
    // console.log('Created User:', createdUser);

    // // GET
    // const retrievedJob = await jobService.get(createdJob.id);
    // console.log('Retrieved Job:', retrievedJob);

    // const retrievedUser = await userService.get(createdUser.id);
    // console.log('Retrieved User:', retrievedUser);

    // // REMOVE
    // await jobService.remove(retrievedJob.id);
    // console.log('removed Job with id', retrievedJob.id);

    // await userService.remove(retrievedUser.id);
    // console.log('removed User with id', retrievedUser.id);


    // console.log('%c End job service example', 'font-size:20px;font-weight:bold');
  }
}
