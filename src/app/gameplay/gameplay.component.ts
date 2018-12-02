import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../shared/services/data.service';
import { Players } from '../shared/Players';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class GameplayComponent implements OnInit {

  players: Players[] = [];

  CardNumber: string[];

  CardNumberForm: FormGroup;

  constructor(private dataService: DataService) {
    this.CardNumberForm = new FormGroup({});
   }

  ngOnInit(){
    this.players = this.dataService.getData();
  }

}
