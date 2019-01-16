import { Component, OnInit, Input } from '@angular/core';
import { ScenarioService } from 'src/app/shared/services/scenario.service';
import { Scenario } from 'src/app/shared/models/Scenario.model';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-scenarioinfo',
  templateUrl: './scenarioinfo.component.html',
  styleUrls: ['./scenarioinfo.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ScenarioinfoComponent implements OnInit {

  scenario: any;

  id: number = this.scenarioService.getId();
  constructor(
    private scenarioService: ScenarioService
    ) {}

  async ngOnInit() {
    try {
      let scenario = this.scenarioService.getScenarioId(this.id);
      this.scenario = (isNullOrUndefined(await scenario)) ? [] : await scenario;
    } catch(err) {
      console.error(err);
    }
  }
}
