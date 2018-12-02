import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class NewgameComponent implements OnInit {

  NewGameForm: FormGroup;

  constructor(private dataService: DataService) { 
    this.NewGameForm = new FormGroup({
      gameMoths: new FormControl(null, [Validators.required]),
      monthBudget: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)])
    });
  }

  ngOnInit() {
  }

  onNewGameFormSubmit() {
    this.dataService.addFormNewGameInfo(this.NewGameForm.value);
    this.NewGameForm.reset();
 }
}
