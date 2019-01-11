import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newscenario',
  templateUrl: './newscenario.component.html',
  styleUrls: ['./newscenario.component.css',  '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class NewscenarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmitClick(){
    alert("Сценарий успешно добавлен");
    document.location.href = "../newgame/scenarios";
  }
}
