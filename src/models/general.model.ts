export interface IGameList {
  addAll: boolean;
  list: IGame[];
}

export interface IGame {
  gameId: number;
  name: string;
  expansions: IExpansion[];
  heroes: ICharacter[];
  villains: ICharacter[];
  antiHeroes: ICharacter[];
  promosHeroes: ICharacter[];
  promoVillains: ICharacter[];
  promoAntiHeroes: ICharacter[];
  addAll: boolean;
  addAllExpansions: boolean;
  addPromos: boolean;
  addBaseGame: boolean;
}

export interface IExpansion {
  name: string;
  heroes: ICharacter[];
  villains: ICharacter[];
  antiHeroes: ICharacter[];
  addExpansion: boolean;
}

export interface ICharacter {
  name: string;
  ksExclusive: boolean;
}

export const gameList: IGameList = {
  addAll: true,
  list: [
    {
      gameId: 1,
      name: 'Marvel United',
      heroes: [
        {
          name: 'Captain Marvel',
          ksExclusive: false
        },
        {
          name: 'Iron Man',
          ksExclusive: false
        },
        {
          name: 'Captain Marvel',
          ksExclusive: false
        },
        {
          name: 'Black Widow',
          ksExclusive: false
        },
        {
          name: 'Hulk',
          ksExclusive: false
        },
        {
          name: 'Ant-Man',
          ksExclusive: false
        },
        {
          name: 'Wasp',
          ksExclusive: false
        }
      ],
      villains: [
        {
          name: 'Red Skull',
          ksExclusive: false
        },
        {
          name: 'Ultron',
          ksExclusive: false
        },
        {
          name: 'Taskmaster',
          ksExclusive: false
        }
      ],
      antiHeroes: [],
      expansions: [
        {
          name: 'Infinity Gauntlet',
          heroes: [],
          villains: [
            {
              name: 'Thanos',
              ksExclusive: false
            },
            {
              name: 'Proxima Midnight',
              ksExclusive: false
            },
            {
              name: 'Ebony Maw',
              ksExclusive: false
            },
            {
              name: 'Black Dwarf',
              ksExclusive: false
            }
          ],
          antiHeroes: [],
          addExpansion: true
        },
        {
          name: 'Return of the Sinister Six',
          heroes: [],
          villains: [
            {
              name: 'Mysterio',
              ksExclusive: false
            },
            {
              name: 'Doctor Octopus',
              ksExclusive: false
            },
            {
              name: 'SandMan',
              ksExclusive: false
            },
            {
              name: 'Electro',
              ksExclusive: false
            },
            {
              name: 'Kraven',
              ksExclusive: false
            },
            {
              name: 'Vulture',
              ksExclusive: false
            }
          ],
          antiHeroes: [],
          addExpansion: true
        },
        {
          name: 'Enter the Spider-verse',
          heroes: [
            {
              name: 'Spider-Man',
              ksExclusive: false
            },
            {
              name: 'Miles Morales',
              ksExclusive: false
            },
            {
              name: 'Ghost-Spider',
              ksExclusive: false
            },
            {
              name: 'Spider-Ham',
              ksExclusive: true
            }
          ],
          villains: [
            {
              name: 'Green Goblin',
              ksExclusive: false
            }
          ],
          antiHeroes: [],
          addExpansion: true
        },
        {
          name: 'Rise of the Black Panther',
          heroes: [
            {
              name: 'Black Panther',
              ksExclusive: false
            },
            {
              name: 'Shuri',
              ksExclusive: false
            },
            {
              name: 'Winter Soldier',
              ksExclusive: false
            }
          ],
          villains: [
            {
              name: 'Killmonger',
              ksExclusive: false
            }
          ],
          antiHeroes: [],
          addExpansion: true
        },
        {
          name: 'Guardians of the Galaxy Remix',
          heroes: [
            {
              name: 'Star-Lord',
              ksExclusive: false
            },
            {
              name: 'Groot',
              ksExclusive: false
            },
            {
              name: 'Rocket',
              ksExclusive: false
            },
            {
              name: 'Gamora',
              ksExclusive: true
            }
          ],
          villains: [
            {
              name: 'Ronan',
              ksExclusive: false
            }
          ],
          antiHeroes: [],
          addExpansion: true
        },
        {
          name: 'Tales of Asgard',
          heroes: [
            {
              name: 'Thor',
              ksExclusive: false
            },
            {
              name: 'Korg',
              ksExclusive: false
            },
            {
              name: 'Valkyrie',
              ksExclusive: false
            },
            {
              name: 'Beta Ray Bill',
              ksExclusive: true
            }
          ],
          villains: [
            {
              name: 'Loki',
              ksExclusive: false
            }
          ],
          antiHeroes: [],
          addExpansion: true
        },
      ],
      promosHeroes: [
        {
          name: 'Iron Fist',
          ksExclusive: true
        },
        {
          name: 'MockingBird',
          ksExclusive: true
        },
        {
          name: 'Luke Cage',
          ksExclusive: true
        },
        {
          name: 'Moon Knight',
          ksExclusive: true
        },
        {
          name: 'Black Cat',
          ksExclusive: true
        },
        {
          name: 'War Machine',
          ksExclusive: true
        },
        {
          name: 'Ms. Marvel',
          ksExclusive: true
        },
        {
          name: 'Shang Chi',
          ksExclusive: true
        },
        {
          name: 'Blade',
          ksExclusive: true
        },
        {
          name: 'Jessica Jones',
          ksExclusive: true
        },
        {
          name: 'Venom',
          ksExclusive: true
        },
        {
          name: 'She-Hulk',
          ksExclusive: true
        },
        {
          name: 'Ghost Rider',
          ksExclusive: true
        },
        {
          name: 'Howard the Duck',
          ksExclusive: true
        },
        {
          name: 'Drax',
          ksExclusive: true
        },
        {
          name: 'Mantis',
          ksExclusive: true
        },
        {
          name: 'Okoye',
          ksExclusive: true
        },
        {
          name: 'Falcon',
          ksExclusive: true
        },
        {
          name: 'Vision',
          ksExclusive: true
        },
        {
          name: 'Nova',
          ksExclusive: true
        },
        {
          name: 'Scarlet Witch',
          ksExclusive: true
        },
        {
          name: 'Electra',
          ksExclusive: true
        },
        {
          name: 'Daredevil',
          ksExclusive: true
        },
        {
          name: 'America Chavez',
          ksExclusive: true
        },
        {
          name: 'Spider-man 2099',
          ksExclusive: true
        },
        {
          name: 'Squirrel Girl',
          ksExclusive: true
        },
        {
          name: 'Doctor Strange',
          ksExclusive: true
        },
        {
          name: 'Punisher',
          ksExclusive: true
        },
        {
          name: 'Spider-woman',
          ksExclusive: true
        },
        {
          name: 'Quicksilver',
          ksExclusive: true
        },
        {
          name: 'Nebula',
          ksExclusive: true
        },
        {
          name: 'Yondu',
          ksExclusive: true
        },
        {
          name: 'Adam Warlock',
          ksExclusive: true
        }
      ],
      promoAntiHeroes: [],
      promoVillains: [
        {
          name: 'Corvus Glaive',
          ksExclusive: true
        },
        {
          name: 'Bullseye',
          ksExclusive: true
        },
        {
          name: 'M.O.D.O.K',
          ksExclusive: true
        },
        {
          name: 'Carnage',
          ksExclusive: true
        },
        {
          name: 'Hela',
          ksExclusive: true
        },
        {
          name: 'Kingpin',
          ksExclusive: true
        },
        {
          name: 'Baron Zemo',
          ksExclusive: true
        },
        {
          name: 'Dormammu',
          ksExclusive: true
        },
        {
          name: 'Rhino',
          ksExclusive: true
        }
      ],
      addAll: true,
      addAllExpansions: true,
      addPromos: true,
      addBaseGame: true
    }
  ]
};
