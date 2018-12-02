import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class NewgameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onTrying() {
    console.log("WORKS");
  }
}
