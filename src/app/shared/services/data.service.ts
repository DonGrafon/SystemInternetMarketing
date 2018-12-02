import { Injectable } from '@angular/core';
import { Players } from '../Players'; 
import { CardsTable } from '../CardsTable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: Players[] = [
    {name: "Alexey", email: "karpechenko.lesha@gmail.com"},
    {name: "Stephan", email: "stephanio@mail.ru"},
    {name: "Elena", email: "elena.ivanova@yandex.ru"},
    {name: "Alexander", email: "sasha@gmail.com"}
  ];

  private Cards: CardsTable[] = [
  {  id: 20, 
     instrument: "Реклама в соц.сетях", 
     costInMonth: 1500, 
     action: "Дает краткую рекламу в соц.сетях, повышая приток новых посетителей на 10%", 
     specialSituations: "Нет",
     additionalEffects: "Нет"
  }];

  private NewGameInfo: Object = {
    monthBudget: 20,
    gameMoths: 3
  };

  getData(): Players[]{
    return this.data;
  }

  addFormData(player: Players) {
    this.data.push(player);
  }

  addFormNewGameInfo(NewGameInfo) {
    this.NewGameInfo = NewGameInfo;
  }

  constructor() { }
}
