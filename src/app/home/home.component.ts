import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  goalCount: number = 0;
  btnText : string = "Add your goal";
  goalText: string = "My life goal...";

  goals = [];

  constructor(private _data : DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.goalCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addGoal(){
    this.goals.push(this.goalText);
    this.goalText = "Add a goal...";
    this.goalCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  deleteGoal(index){
    this.goals.splice(index, 1);
    this.goalCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

}
