import {IGameList} from '../models/general.model';

export const GameList: IGameList = {
  list: [
    {
      gameId: 1,
      name: 'Marvel United',
      addAll: true,
      addAllExpansions: true,
      addPromos: true,
      addBaseGame: true,
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
          id: 1,
          name: 'Infinity Gauntlet',
          ksExclusive: true,
          addExpansion: true,
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
        },
        {
          id: 2,
          name: 'Return of the Sinister Six',
          ksExclusive: true,
          addExpansion: true,
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
        },
        {

          id: 3,
          name: 'Enter the Spider-verse',
          ksExclusive: false,
          addExpansion: true,
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
        },
        {
          id: 4,
          name: 'Rise of the Black Panther',
          ksExclusive: false,
          addExpansion: true,
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
        },
        {
          id: 5,
          name: 'Guardians of the Galaxy Remix',
          addExpansion: true,
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
        },
        {
          id: 6,
          name: 'Tales of Asgard',
          addExpansion: true,
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
        },
        {
          id: 7,
          name: 'Yondu',
          ksExclusive: true,
          addExpansion: true,
          heroes: [
            {
              name: 'Yondu',
              ksExclusive: true,
              addToList: true
            },
          ],
          villains: [],
          antiHeroes: [],
        },
        {
          id: 8,
          name: 'Adam Warlock',
          ksExclusive: true,
          addExpansion: true,
          heroes: [
            {
              name: 'Adam Warlock',
              ksExclusive: true,
              addToList: true
            }
          ],
          villains: [],
          antiHeroes: [],
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
      ]
    },
    {
      gameId: 2,
      name: 'Marvel United X-Men',
      addAll: true,
      addAllExpansions: true,
      addPromos: true,
      addBaseGame: true,
      expansions: [
        {
          id: 9,
          name: 'The Horsemen of Apocalypse',
          ksExclusive: true,
          heroes: [],
          antiHeroes: [
            {
              name: 'Apocalypse',
              ksExclusive: false,
              addToList: true
            },
          ],
          villains: [
            {
              name: 'Famine',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'War',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Death',
              ksExclusive: false,
              addToList: true
            }
          ],
          addExpansion: true
        },
        {
          id: 10,
          name: 'Days of Future past',
          ksExclusive: true,
          heroes: [
            {
              name: 'Logan',
              ksExclusive: false,
              addToList: true
            },
          ],
          antiHeroes: [],
          villains: [
            {
              name: 'Nimrod',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Sentinels',
              ksExclusive: false,
              addToList: true
            }
          ],
          addExpansion: true
        },
        {
          id: 11,
          name: 'Fantastic Four',
          ksExclusive: true,
          heroes: [
            {
              name: 'The Thing',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Mister Fantastic',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Invisible Woman',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Human Torch',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Silver Surfer',
              ksExclusive: false,
              addToList: true
            },
          ],
          antiHeroes: [
            {
              name: 'Doctor Doom',
              ksExclusive: false,
              addToList: true
            },
          ],
          villains: [
            {
              name: 'Super-Skrull',
              ksExclusive: false,
              addToList: true
            },
          ],
          addExpansion: true
        },
        {
          id: 12,
          name: 'Deadpool',
          ksExclusive: false,
          heroes: [
            {
              name: 'Deadpool',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Lady Deadpool',
              ksExclusive: true,
              addToList: true
            },
          ],
          antiHeroes: [
            {
              name: 'Bob, Agent of Hydra',
              ksExclusive: false,
              addToList: true
            },
          ],
          villains: [
            {
              name: 'Deadpool',
              ksExclusive: false,
              addToList: true
            },
          ],
          addExpansion: true
        },
        {
          id: 13,
          name: 'Blue Team',
          ksExclusive: false,
          heroes: [
            {
              name: 'Jubilee',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Gambit',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Rogue',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Psylocke',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Banshee',
              ksExclusive: true,
              addToList: true
            },
          ],
          antiHeroes: [],
          villains: [
            {
              name: 'Mister Sinister',
              ksExclusive: false,
              addToList: true
            },
          ],
          addExpansion: true
        },
        {
          id: 14,
          name: 'Gold Team',
          ksExclusive: false,
          heroes: [
            {
              name: 'Archangel',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Colossus',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Iceman',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Bishop',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Forge',
              ksExclusive: true,
              addToList: true
            },
          ],
          antiHeroes: [],
          villains: [
            {
              name: 'Sebastian Shaw',
              ksExclusive: false,
              addToList: true
            },
          ],
          addExpansion: true
        },
        {
          id: 15,
          name: 'First Class',
          ksExclusive: true,
          heroes: [
            {
              name: 'Cyclops (FC)',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Angel (FC)',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Marvel Girl',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Iceman (FC)',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Beast',
              ksExclusive: false,
              addToList: true
            },
          ],
          antiHeroes: [],
          villains: [
            {
              name: 'Scarlet Witch',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Quicksilver',
              ksExclusive: false,
              addToList: true
            },
          ],
          addExpansion: true
        },
        {
          id: 16,
          name: 'Phoenix Five',
          ksExclusive: true,
          heroes: [
            {
              name: 'Hope Summers',
              ksExclusive: false,
              addToList: true
            },
          ],
          antiHeroes: [],
          villains: [
            {
              name: 'Cyclops (PF)',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Namor (PF)',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Magik (PF',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Colossus (PF)',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Emma Frost (PF)',
              ksExclusive: false,
              addToList: true
            },
          ],
          addExpansion: true
        },
        {
          id: 17,
          name: 'Storm (Mohawk)',
          ksExclusive: true,
          heroes: [
            {
              name: 'Storm (Mohawk)',
              ksExclusive: true,
              addToList: true
            },
          ],
          antiHeroes: [],
          villains: [],
          addExpansion: true
        },
        {
          id: 18,
          name: 'Old Man Logan',
          ksExclusive: true,
          heroes: [
            {
              name: 'Old Man Logan',
              ksExclusive: true,
              addToList: true
            },
          ],
          antiHeroes: [],
          villains: [],
          addExpansion: true
        },
      ],
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
        },
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
      promosHeroes: [
        {
          name: 'Feral',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Polaris',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Strong Guy',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Boom Boom',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Longshot',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Dazzler',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Sunspot',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Magik',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Firestar',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Warpath',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Phoenix',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Sunfire',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Wolfsbane',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Blink',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Havok',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Fantomex',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Captain Britain',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Multiple Man',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Weapon X',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Pixie',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Doop',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'X-23',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Mirage',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Warlock',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Kitty Pryde',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'GwenPool',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Guardian',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Puck',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Northstar',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Snowbird',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Sasquatch',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Nightcrawler',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Cloak',
          ksExclusive: true,
          addToList: true
        },
{
          name: 'Dagger',
          ksExclusive: true,
          addToList: true
        },
      ],
      promoVillains: [
        {
          name: 'Pyro',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Blob',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Toad',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Shasow King',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Callisto',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Deathbird',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Arcade',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Lady Deathstrike',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Sauron',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Silver Samurai',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Omega Red',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Brood Queen',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Mojo',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Dark Phoenix',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Onslaught',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Avalanche',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Mastermind',
          ksExclusive: true,
          addToList: true
        },
      ],
      promoAntiHeroes: [
        {
          name: 'Legion',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Emma Frost',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Namor',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Spiral',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Marrow',
          ksExclusive: true,
          addToList: true
        },
      ]
    }
  ]
};
