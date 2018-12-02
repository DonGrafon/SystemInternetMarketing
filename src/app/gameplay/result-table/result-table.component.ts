import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Players } from '../../shared/Players';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ResultTableComponent implements OnInit {

  players: Players[] = [
  ];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.players = this.dataService.getData();
  }

}
