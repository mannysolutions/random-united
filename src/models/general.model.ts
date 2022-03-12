export interface IGameList {
  list: IGame[];
}

export interface IGame {
  gameId: number;
  name: string;
  expansions: IExpansion[];
  heroes?: ICharacter[];
  villains?: ICharacter[];
  antiHeroes?: ICharacter[];
  promosHeroes?: ICharacter[];
  promoVillains?: ICharacter[];
  promoAntiHeroes?: ICharacter[];
  addAll: boolean;
  addAllExpansions: boolean;
  addPromos: boolean;
  addBaseGame: boolean;
}

export interface IExpansion {
  id: number;
  name: string;
  heroes?: ICharacter[];
  villains?: ICharacter[];
  antiHeroes?: ICharacter[];
  addExpansion: boolean;
  ksExclusive?: boolean;
}

export interface ICharacter {
  name: string;
  ksExclusive: boolean;
  addToList: boolean;
}
