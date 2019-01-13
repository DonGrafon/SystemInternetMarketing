import { Injectable } from '@angular/core';
import { BaseApi } from '../core/base-api';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScenarioService extends BaseApi {

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
}
