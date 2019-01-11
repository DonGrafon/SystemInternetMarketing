import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ScenariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onDelete(){
    if(confirm("Вы уверены, что хотите удалить сценарий №1?")==true){
      alert("Сценарий успешно удалён")
    }
  }
}
