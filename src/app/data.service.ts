import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['Default goal 1', 'Default goal 2']);

  goal = this.goals.asObservable();
  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }

}
