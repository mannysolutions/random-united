import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../models/general.model';
import { GameList } from '../data/game.data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'random-united';

  public gameList = GameList;

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
    this.generateAvailableLists()
  }

  openFilterModal(modal) {
    this.modalService.open(modal, {centered: true, scrollable: true})
      .result.then((result) => {
        this.generateAvailableLists();
      },
      (reason) => {
        this.generateAvailableLists();
      });
  }

  public generateAvailableLists() {
    this.availableHeroes = [];
    this.availableVillains = [];

    this.gameList.list.forEach((game) => {
      if (!game.addAll) {
        return;
      }

      if (game.addBaseGame) {
        this.addCharactersToLists(game.heroes, game.villains, game.antiHeroes);
      }

      if (game.addPromos) {
        this.addCharactersToLists(game.promosHeroes, game.promoVillains, game.promoAntiHeroes);
      }

      game.expansions.forEach((expansion) => {
        if (game.addAllExpansions && expansion.addExpansion) {
          this.addCharactersToLists(expansion.heroes, expansion.villains, expansion.antiHeroes);
        }
      });
    });

    this.pickVillain();
    this.pickHeroes();
  }

  public reRollHero(heroIndex: number, hero: ICharacter) {
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

  public reRollVillain() {
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

  private pickHeroes() {
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

  private pickVillain() {
    this.chosenVillain = null;

    if (!this.availableVillains || this.availableVillains.length === 0) {
      // TODO Error
      return;
    }

    this.chosenVillain = this.selectRandomCharacter(this.availableVillains);
  }

  private addCharactersToLists(heroes: ICharacter[], villains: ICharacter[], antiHeroes: ICharacter[]) {
    // TODO check if kickstarter exclusive and should be added
    const heroesToAdd = heroes.filter((hero) => hero.addToList);
    const antiHeroesToAdd = antiHeroes.filter((antiHero) => antiHero.addToList);
    const villainsToAdd = villains.filter((villain) => villain.addToList);

    this.availableHeroes.push(...heroesToAdd, ...antiHeroesToAdd);
    this.availableVillains.push(...villainsToAdd, ...antiHeroesToAdd);
  }
}
