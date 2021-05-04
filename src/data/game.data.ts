import {IGameList} from '../models/general.model';

export const GameList: IGameList = {
  addAll: true,
  list: [
    {
      gameId: 1,
      name: 'Marvel United',
      heroes: [
        {
          name: 'Captain Marvel',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Iron Man',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Captain Marvel',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Black Widow',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Hulk',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Ant-Man',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Wasp',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Venom',
          ksExclusive: false,
          addToList: false
        }
      ],
      villains: [
        {
          name: 'Red Skull',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Ultron',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Taskmaster',
          ksExclusive: false,
          addToList: true
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
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Proxima Midnight',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Ebony Maw',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Black Dwarf',
              ksExclusive: false,
              addToList: true
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
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Doctor Octopus',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'SandMan',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Electro',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Kraven',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Vulture',
              ksExclusive: false,
              addToList: true
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
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Miles Morales',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Ghost-Spider',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Spider-Ham',
              ksExclusive: true,
              addToList: true
            }
          ],
          villains: [
            {
              name: 'Green Goblin',
              ksExclusive: false,
              addToList: true
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
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Shuri',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Winter Soldier',
              ksExclusive: false,
              addToList: true
            }
          ],
          villains: [
            {
              name: 'Killmonger',
              ksExclusive: false,
              addToList: true
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
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Groot',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Rocket',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Gamora',
              ksExclusive: true,
              addToList: true
            }
          ],
          villains: [
            {
              name: 'Ronan',
              ksExclusive: false,
              addToList: true
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
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Korg',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Valkyrie',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Beta Ray Bill',
              ksExclusive: true,
              addToList: true
            }
          ],
          villains: [
            {
              name: 'Loki',
              ksExclusive: false,
              addToList: true
            }
          ],
          antiHeroes: [],
          addExpansion: true
        },
      ],
      promosHeroes: [
        {
          name: 'Nick Fury',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Hawkeye',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Iron Fist',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'MockingBird',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Luke Cage',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Moon Knight',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Black Cat',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'War Machine',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Ms. Marvel',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Shang Chi',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Blade',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Ant-Man',
          ksExclusive: true,
          addToList: false
        },
        {
          name: 'Wasp',
          ksExclusive: true,
          addToList: false
        },
        {
          name: 'Jessica Jones',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Venom',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'She-Hulk',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Ghost Rider',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Howard the Duck',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Drax',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Mantis',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Okoye',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Falcon',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Vision',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Nova',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Scarlet Witch',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Electra',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Daredevil',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'America Chavez',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Spider-man 2099',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Squirrel Girl',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Doctor Strange',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Punisher',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Spider-woman',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Quicksilver',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Nebula',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Yondu',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Adam Warlock',
          ksExclusive: true,
          addToList: true
        }
      ],
      promoAntiHeroes: [],
      promoVillains: [
        {
          name: 'Corvus Glaive',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Bullseye',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'M.O.D.O.K',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Carnage',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Hela',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Kingpin',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Baron Zemo',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Dormammu',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Venom (villain)',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Kang',
          ksExclusive: true,
          addToList: true
        }
      ],
      addAll: true,
      addAllExpansions: true,
      addPromos: true,
      addBaseGame: true
    },
    {
      gameId: 2,
      name: 'Marvel United X-Men',
      expansions: [],
      heroes: [
        {
          name: 'Wolverine',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Jean Grey',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Cyclops',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Storm',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Beast',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Professor X',
          ksExclusive: false,
          addToList: true
        }
      ],
      villains: [
        {
          name: 'Sabretooth',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Juggernaut',
          ksExclusive: false,
          addToList: true
        }
      ],
      antiHeroes: [
        {
          name: 'Magneto',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Mystique',
          ksExclusive: false,
          addToList: true
        }
      ],
      promosHeroes: [],
      promoVillains: [],
      promoAntiHeroes: [],
      addAll: false,
      addAllExpansions: false,
      addPromos: false,
      addBaseGame: false,
    }
  ]
};
