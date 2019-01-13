import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../shared/services/data.service';
import { Players } from '../shared/models/Players.model';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class GameplayComponent implements OnInit {

  players: Players[] = [];
  CardNumber: string[];
  CardNumberForm: FormGroup;
  expanded: boolean = false;

  constructor(private dataService: DataService) {
    this.CardNumberForm = new FormGroup({});
   }

  ngOnInit(){
    this.players = this.dataService.getData();
  }

  showCheckboxes() {
    let checkboxes = document.getElementById("checkboxes");
    if (!this.expanded) {
        checkboxes.style.display = "block";
        this.expanded = true;
    } else {
        checkboxes.style.display = "none";
        this.expanded = false;
        }
    }
}
