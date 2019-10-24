import { Injectable } from '@angular/core';
import { FeathersService } from '../shared/feathers.service';

interface UserModel {
  id?: number;
  name: string;
  dateOfBirth: Date;
  email: string;
  status: string;
  hourlyRate: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userService: any;

  constructor(private feathers: FeathersService) {
    this.userService = this.feathers.createService<UserModel>('user');
  }

  async createUser(user: UserModel) {
    return await this.userService.create(user);
  }

  async updateUser(userId: number, user: UserModel) {
    return await this.userService.update(userId, user);
  }

  async getUsers(pageNum: number) {
    return await this.userService.find({ query: { $skip: pageNum * 10 } });
  }

  async deleteUser(userId: number) {
    return await this.userService.remove(userId);
  }

}
