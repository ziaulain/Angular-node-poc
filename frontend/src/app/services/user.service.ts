import { Injectable } from '@angular/core';
import { FeathersService } from '../shared/feathers.service';
import { FeathersCurdService } from './feathers-curd.service';
import { UserModel } from '../components/user/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends FeathersCurdService {

  constructor(private feathers: FeathersService) {
    super(feathers.createService<UserModel>('user'));
  }

}
