import { Component, OnInit } from '@angular/core';
import { gameList, ICharacter } from '../models/general.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'random-united';

  public gameList = gameList;
  public filter = {};

  public chosenVillain: ICharacter = null;
  public chosenHeroes: ICharacter[] = null;

  private availableHeroes: ICharacter[];
  private availableVillains: ICharacter[];

  constructor(){}

  public ngOnInit(): void {
    this.generateAvailableLists()
  }

  public generateAvailableLists() {
    this.availableHeroes = [];
    this.availableVillains = [];

    this.gameList.list.forEach((game) => {
      if (game.addBaseGame) {
        this.addCharactersToLists(game.heroes, game.villains, game.antiHeroes);
      }

      if (game.addPromos) {
        this.addCharactersToLists(game.promosHeroes, game.promoVillains, game.promoAntiHeroes);
      }

      game.expansions.forEach((expansion) => {
        if (expansion.addExpansion || game.addAllExpansions) {
          this.addCharactersToLists(expansion.heroes, expansion.villains, expansion.antiHeroes);
        }
      });
    });

    this.pickVillain();
    this.pickHeroes();
  }

  public pickHeroes() {
    if (!this.availableHeroes || this.availableHeroes.length === 0) {
      // TODO Error
      return;
    }

    const heroes: ICharacter[] = [];

    while (heroes.length < 4) {
      const randomHeroIndex = Math.floor(Math.random() * (this.availableHeroes.length + 1));

      if (this.availableHeroes[randomHeroIndex]) {
        const heroFoundInList = heroes.find((hero) => hero.name === this.availableHeroes[randomHeroIndex].name);

        if (heroes.length === 0 || !heroFoundInList) {
          heroes.push(this.availableHeroes[randomHeroIndex]);
        }
      }
    }

    this.chosenHeroes = heroes;
  }

  public pickVillain() {
    if (!this.availableVillains || this.availableVillains.length === 0) {
      // TODO Error
      return;
    }

    const randomVillain = Math.floor(Math.random() * (this.availableVillains.length + 1));

    this.chosenVillain = this.availableVillains[randomVillain];
  }

  public addCharactersToLists(heroes: ICharacter[], villains: ICharacter[], antiHeroes: ICharacter[]) {
    this.availableHeroes.push(...heroes, ...antiHeroes);
    this.availableVillains.push(...villains, ...antiHeroes);
  }
}
