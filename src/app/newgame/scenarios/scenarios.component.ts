import { Component, OnInit, Input } from '@angular/core';
import { Scenario } from 'src/app/shared/models/Scenario.model';
import { ScenarioService } from 'src/app/shared/services/scenario.service';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ScenariosComponent implements OnInit {

  scenarios: Scenario[];

  constructor(
    private scenarioService: ScenarioService
  ) { }

  async ngOnInit() {
    try {
      let scenarios = this.scenarioService.getScenarios();
      this.scenarios = (isNullOrUndefined(await scenarios)) ? [] : await scenarios;
    } catch (err) {
      console.error(err);
    }
  }

  onDelete(i: number){
    if(confirm("Вы уверены, что хотите удалить?")==true){
      this.scenarioService.deleteScenarioById(i);
      alert("Сценарий успешно удалён");
      location.reload();
    }
  }

  onClickInfo(i: number){
    this.scenarioService.setId(i);
  }
}
