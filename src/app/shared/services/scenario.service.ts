import { Injectable } from '@angular/core';
import { BaseApi } from '../core/base-api';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Scenario } from '../models/Scenario.model';

@Injectable({
  providedIn: 'root'
})
export class ScenarioService extends BaseApi {
  id: number;
  options: HttpHeaders;

  constructor(
      public http: HttpClient
  ) {
      super(http);
      this.options = new HttpHeaders();
      this.options = this.options.set('Content-Type', 'application/json');
  }

  async getScenarios(){
    return this.get('scenarios', this.options).toPromise();
  }

  async deleteScenarioById(id) {
    return this.delete('scenarios/' + id, this.options).toPromise();
  }

  async getScenarioId(id) {
    return this.get('scenarios/' + id, this.options).toPromise();
  }

  async postScenario(data: Scenario) {
    return this.post('scenarios', data, this.options).toPromise();
  }

  setId(id){
    this.id = id;
  }

  getId(){
    let temp = this.id;
    this.clearId();
    return temp;
  }

  clearId(){
    this.id = undefined;
  }
}
