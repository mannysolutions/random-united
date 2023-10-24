import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {ICharacter, IGame} from '../models/general.model';
import {GameList} from '../data/game.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public games = GameList.list;

  public includeKsExclusives = true;

  public filterIncludeKsExclusive: boolean;
  public filterGameData: IGame[];

  public chosenVillain: ICharacter = null;
  public chosenHeroes: ICharacter[] = null;

  private availableHeroes: ICharacter[];
  private availableVillains: ICharacter[];

  constructor(
    public swUpdate: SwUpdate,
    private modalService: NgbModal
  ){
    swUpdate.available.subscribe((event) => {
      if (confirm('New app version available')) {
        location.reload();
      }
    });
  }

  public ngOnInit(): void {
    this.applyStorageToData();
    this.generateAvailableLists();
  }

  public openFilterModal(modal): void {
    this.filterGameData = JSON.parse(JSON.stringify(this.games));
    this.filterIncludeKsExclusive = JSON.parse(JSON.stringify(this.includeKsExclusives));

    this.modalService.open(modal, {centered: true, scrollable: true})
      .result.then((result) => {
        this.games = JSON.parse(JSON.stringify(this.filterGameData));
        this.includeKsExclusives = JSON.parse(JSON.stringify(this.filterIncludeKsExclusive));
        this.generateAvailableLists();
        this.saveSelectionToStorage();
      }, () => {});
  }

  public openAboutModal(modal): void {
    this.modalService.open(modal, {centered: true, scrollable: true});
  }

  public generateAvailableLists(): void {
    this.availableHeroes = [];
    this.availableVillains = [];

    this.games.forEach((game) => {
      if (!game.addAll) {
        return;
      }

      if (game.addBaseGame) {
        this.addCharactersToLists(game.heroes, game.villains, game.antiHeroes);
      }

      if (game.addPromos && this.includeKsExclusives) {
        this.addCharactersToLists(game.promoHeroes, game.promoVillains, game.promoAntiHeroes);
      }

      game.expansions.forEach((expansion) => {
        if (game.addAllExpansions && expansion.addExpansion && (this.includeKsExclusives || (!this.includeKsExclusives && !expansion.ksExclusive))) {
          this.addCharactersToLists(expansion.heroes, expansion.villains, expansion.antiHeroes);
        }
      });
    });

    this.pickVillain();
    this.pickHeroes();
  }

  public reRollHero(heroIndex: number): void {
    let newHero: ICharacter = null;

    while (!newHero) {
      const option: ICharacter = this.selectRandomCharacter(this.availableHeroes);

      const heroFoundInList = this.chosenHeroes.find((hero) => hero.name === option.name);
      const heroAlreadyTheVillain = this.chosenVillain.name === option.name;

      if (!heroFoundInList && !heroAlreadyTheVillain) {
        newHero = option;
      }
    }

    this.chosenHeroes[heroIndex] = newHero;
  }

  public reRollVillain(): void {
    let newVillain: ICharacter = null;

    while (!newVillain) {
      const option: ICharacter = this.selectRandomCharacter(this.availableVillains);

      const foundInHeroList = this.chosenHeroes.find((hero) => hero.name === option.name);

      if (!foundInHeroList) {
        newVillain = option;
      }
    }

    this.chosenVillain = newVillain;
  }

  public changeIncludeKSExclusives(value: boolean): void {
    this.filterIncludeKsExclusive = value;
  }

  private pickHeroes(): void {
    this.chosenHeroes = null;

    if (!this.availableHeroes || this.availableHeroes.length === 0) {
      // TODO Error
      return;
    }

    const heroes: ICharacter[] = [];

    while (heroes.length < 4) {
      const newHero = this.selectRandomCharacter(this.availableHeroes);

      if (newHero) {
        const heroFoundInList = heroes.find((hero) => hero.name === newHero.name);
        const heroAlreadyTheVillain = this.chosenVillain.name === newHero.name;

        if (heroes.length === 0 || (!heroFoundInList && !heroAlreadyTheVillain)) {
          heroes.push(newHero);
        }
      }
    }

    this.chosenHeroes = heroes;
  }

  private selectRandomCharacter(characterList: ICharacter[]): ICharacter {
    const randomCharacterIndex = Math.floor(Math.random() * (characterList.length));

    return characterList[randomCharacterIndex];
  }

  private pickVillain(): void {
    this.chosenVillain = null;

    if (!this.availableVillains || this.availableVillains.length === 0) {
      // TODO Error
      return;
    }

    this.chosenVillain = this.selectRandomCharacter(this.availableVillains);
  }

  private addCharactersToLists(heroes: ICharacter[], villains: ICharacter[], antiHeroes: ICharacter[]): void {
    const heroesToAdd = heroes.filter((hero) => hero.addToList && (this.includeKsExclusives || (!this.includeKsExclusives && !hero.ksExclusive)));
    const antiHeroesToAdd = antiHeroes.filter((antiHero) => antiHero.addToList && (this.includeKsExclusives || (!this.includeKsExclusives && !antiHero.ksExclusive)));
    const villainsToAdd = villains.filter((villain) => villain.addToList && (this.includeKsExclusives || (!this.includeKsExclusives && !villain.ksExclusive)));

    this.availableHeroes.push(...heroesToAdd, ...antiHeroesToAdd);
    this.availableVillains.push(...villainsToAdd, ...antiHeroesToAdd);
  }

  private saveSelectionToStorage(): void {
    localStorage.setItem('ksExclusives', JSON.stringify(this.includeKsExclusives));

    const gameData = this.stripGameDataForStorage();
    localStorage.setItem('games', JSON.stringify(gameData));
  }

  private applyStorageToData(): void {
    const storageKS = localStorage.getItem('ksExclusives');
    const storageGameData = localStorage.getItem('games');

    this.includeKsExclusives = storageKS ? JSON.parse(storageKS) : true;

    if (!storageGameData) {
      this.games = GameList.list;
      return;
    }

    const gameStorageData: IGame[] = JSON.parse(storageGameData);
    const gameList: IGame[] = JSON.parse(JSON.stringify(GameList.list));

    for (const game of gameList) {
      const foundStGame = gameStorageData.find((storageGame) => game.gameId === storageGame.gameId);

      if (!foundStGame) {
        break;
      }

      game.addAll = foundStGame.addAll;
      game.addAllExpansions = foundStGame.addAllExpansions;
      game.addPromos = foundStGame.addPromos;
      game.addBaseGame = foundStGame.addBaseGame;

      for (const expansion of game.expansions) {
        const foundStExpansion = foundStGame.expansions.find((storageExpansion) => storageExpansion.id === expansion.id);

        if (!foundStExpansion) {
          break;
        }

        expansion.addExpansion = foundStExpansion.addExpansion;
      }
    }

    this.games = gameList;
  }

  private stripGameDataForStorage(): IGame[] {
    const games: IGame[] = JSON.parse(JSON.stringify(this.games));

    for (const game of games) {
      game.antiHeroes = [];
      game.heroes = [];
      game.villains = [];
      game.promoAntiHeroes = [];
      game.promoHeroes = [];
      game.promoVillains = [];

      for (const expansion of game.expansions) {
        expansion.heroes = [];
        expansion.antiHeroes = [];
        expansion.villains = [];
      }
    }

    return games;
  }
}
