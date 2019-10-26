import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class FeathersCurdService {

  constructor(private featureService: any) { }

  public async create(item: any) {
    return await this.featureService.create(item);
  }

  public async get(pageNum: number) {
    return await this.featureService.find({
      query: {
        $skip: pageNum * 10
      }
    });
  }

  public async update(id: number, item: any) {
    return await this.featureService.update(id, item);
  }

  public async delete(id: number) {
    return await this.featureService.remove(id);
  }
}
