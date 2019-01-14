import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ScenarioService } from 'src/app/shared/services/scenario.service';

@Component({
  selector: 'app-newscenario',
  templateUrl: './newscenario.component.html',
  styleUrls: ['./newscenario.component.css',  '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class NewscenarioComponent implements OnInit {

  scenarioForm: FormGroup;
  
  constructor(private scenarioService: ScenarioService) { 
    this.scenarioForm = new FormGroup({
      scenarioname: new FormControl(null, [Validators.required]),
      tOrganic: new FormControl(null, [Validators.required]),
      tReklamaCont: new FormControl(null, [Validators.required]),
      tReklamaSocial: new FormControl(null, [Validators.required]),
      tSocialMedia: new FormControl(null, [Validators.required]),
      tDirectEntry: new FormControl(null, [Validators.required]),
      zOrganic: new FormControl(null, [Validators.required]),
      zReklamaCont: new FormControl(null, [Validators.required]),
      zReklamaSocial: new FormControl(null, [Validators.required]),
      zSocialMedia: new FormControl(null, [Validators.required]),
      zDirectEntry: new FormControl(null, [Validators.required]),
      totalClients: new FormControl(null, [Validators.required]),
      avgCheck: new FormControl(null, [Validators.required]),
      realCost: new FormControl(null, [Validators.required]),
      predelCost: new FormControl(null, [Validators.required]),
      turnover: new FormControl(null, [Validators.required])
   });
  }

  onScenarioFormSubmit(){
    this.scenarioService.postScenario(this.scenarioForm.value);
    this.scenarioForm.reset();
    alert("Сценарий успешно добавлен");
    document.location.href = "../newgame/scenarios";
  }

  ngOnInit() {

  }

}
