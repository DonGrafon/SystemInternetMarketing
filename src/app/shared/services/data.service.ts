import { Injectable } from '@angular/core';
import { Players } from '../Players'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: Players[] = [
    {name: "Alexey", email: "karpechenko.lesha@gmail.com"},
    {name: "Stephan", email: "stephanio@mail.ru"},
    {name: "Elena", email: "elena.ivanova@yandex.ru"},
    {name: "Alexander", email: "sasha@gmail.com"},
    {name: "Elena", email: "elena.ivanova@yandex.ru"},
    {name: "Elena", email: "elena.ivanova@yandex.ru"},
    {name: "Elena", email: "elena.ivanova@yandex.ru"},
    {name: "Elena", email: "elena.ivanova@yandex.ru"},
    {name: "Elena", email: "elena.ivanova@yandex.ru"},
    {name: "Elena", email: "elena.ivanova@yandex.ru"},
  ];

  getData(): Players[]{
    return this.data;
  }

  addFormData(player: Players) {
    this.data.push(player);
  }

  constructor() { }
}
