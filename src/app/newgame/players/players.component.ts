import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../shared/services/data.service';
import { Players } from '../../shared/Players';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class PlayersComponent implements OnInit {

  playerForm: FormGroup;

  players: Players[] = [];

  isHidden: boolean = true;

  constructor(private dataService: DataService) { 
    this.playerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(){
    this.players = this.dataService.getData();
  }

  onPlayerFormSubmit() {
    this.dataService.addFormData(this.playerForm.value);
    this.playerForm.reset();
    this.isHidden = false;
 }

}