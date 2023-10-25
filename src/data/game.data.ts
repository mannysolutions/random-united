import {ICharacter, IExpansion, IGameList} from '../models/general.model';

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
      promoHeroes: [
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
          name: 'Venom',
          subtitle: '(villain)',
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
      name: 'Marvel United: X-Men',
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
              name: 'Cyclops',
              subtitle: '(First Class)',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Angel',
              subtitle: '(First Class)',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Marvel Girl',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Iceman',
              subtitle: '(First Class)',
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
              name: 'Cyclops',
              subtitle: '(Phoenix Five)',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Namor',
              subtitle: '(Phoenix Five)',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Magik',
              subtitle: '(Phoenix Five)',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Colossus',
              subtitle: '(Phoenix Five)',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Emma Frost',
              subtitle: '(Phoenix Five)',
              ksExclusive: false,
              addToList: true
            },
          ],
          addExpansion: true
        },
        {
          id: 17,
          name: 'X-Force',
          ksExclusive: true,
          heroes: [
            {
              name: 'Cannonball',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Domino',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Shatterstar',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Cable',
              ksExclusive: true,
              addToList: true
            }
          ],
          antiHeroes: [],
          villains: [
            {
              name: 'Stryfe',
              ksExclusive: true,
              addToList: true
            }
          ],
          addExpansion: true
        },
        {
          id: 18,
          name: 'Storm (Mohawk)',
          ksExclusive: true,
          heroes: [
            {
              name: 'Storm',
              subtitle: '(Mohawk)',
              ksExclusive: true,
              addToList: true
            },
          ],
          antiHeroes: [],
          villains: [],
          addExpansion: true
        },
        {
          id: 19,
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
      promoHeroes: [
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
    },
    {
      gameId: 3,
      name: 'Marvel United: Multiverse',
      addAll: false,
      addAllExpansions: false,
      addPromos: false,
      addBaseGame: false,
      expansions: [
        {
          id: 20,
          name: 'The coming of Galactus',
          ksExclusive: true,
          heroes: [],
          antiHeroes: [
            {
              name: 'Nova',
              subtitle: '(Frankie Raye)',
              ksExclusive: true,
              addToList: true
            },
          ],
          villains: [
            {
              name: 'Galactus',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Air-Walker',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Firelord',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Terrax',
              ksExclusive: true,
              addToList: true
            }
          ],
          addExpansion: true
        },
        {
          id: 21,
          name: 'War of Kings',
          ksExclusive: true,
          heroes: [
            {
              name: 'Black Bolt',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Medusa',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Crystal',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Lockjaw',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Gorgon',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Triton',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Karnak',
              ksExclusive: true,
              addToList: true
            },
          ],
          antiHeroes: [
            {
              name: 'Gladiator',
              ksExclusive: true,
              addToList: true
            },
          ],
          villains: [
            {
              name: 'Vulcan',
              ksExclusive: true,
              addToList: true
            }
          ],
          addExpansion: true
        },
        {
          id: 22,
          name: 'The Age of Apocalypse',
          ksExclusive: true,
          heroes: [
            {
              name: 'X-Man',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Magneto',
              subtitle: '{Age of Apocalypse)',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Morph',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Sabretooth & Wildchild',
              ksExclusive: true,
              addToList: true
            },
          ],
          antiHeroes: [],
          villains: [
            {
              name: 'Apocalypse',
              subtitle: '{Age of Apocalypse)',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Dark Beast',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Nemesis',
              ksExclusive: true,
              addToList: true
            },
          ],
          addExpansion: true
        },
        {
          id: 23,
          name: 'Civil War',
          ksExclusive: false,
          heroes: [
            {
              name: 'Wonder Man',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Spectrum',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Captain America',
              subtitle: '(Classic/Civil War)',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Iron Man',
              subtitle: '(Civil War)',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Tigra',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Goliath',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Kate Bishop',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Yellowjacket',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Hulkling',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Iron Spider',
              ksExclusive: true,
              addToList: true
            },
          ],
          antiHeroes: [],
          villains: [],
          addExpansion: true
        },
        {
          id: 24,
          name: 'Secret Invasion',
          ksExclusive: true,
          heroes: [
            {
              name: 'Ronin',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Nick Fury, Sr.',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Maria Hill',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Quake',
              ksExclusive: true,
              addToList: true
            }
          ],
          antiHeroes: [],
          villains: [
            {
              name: 'Queen Veranke',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Skrulls (1-4)',
              ksExclusive: true,
              addToList: true
            },
          ],
          addExpansion: true
        },
        {
          id: 25,
          name: 'Annihilation',
          ksExclusive: true,
          heroes: [
            {
              name: 'Nova Prime',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Phyla-Vell',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Quasar',
              ksExclusive: true,
              addToList: true
            },
            {
              name: 'Moondragon',
              ksExclusive: true,
              addToList: true
            },
          ],
          antiHeroes: [],
          villains: [
            {
              name: 'Annihilus',
              ksExclusive: true,
              addToList: true
            },
          ],
          addExpansion: true
        },
        {
          id: 26,
          name: 'Maximum Carnage',
          ksExclusive: false,
          heroes: [],
          antiHeroes: [
            {
              name: 'Morbius',
              ksExclusive: false,
              addToList: true
            },
          ],
          villains: [
            {
              name: 'Demogoblin',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Scorpion',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Scream',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Shriek',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Doppelganger',
              ksExclusive: false,
              addToList: true
            },
          ],
          addExpansion: true
        },
        {
          id: 27,
          name: 'World War Hulk',
          ksExclusive: false,
          heroes: [
            {
              name: 'Hulkbuster Iron Man',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Hercules',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Doc Samson',
              ksExclusive: true,
              addToList: true
            },
          ],
          antiHeroes: [
            {
              name: 'Ares',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Gladiator Hulk',
              ksExclusive: false,
              addToList: true
            },
            {
              name: 'Sentry',
              ksExclusive: false,
              addToList: true
            },
          ],
          villains: [],
          addExpansion: true
        },
        {
          id: 28,
          name: 'Iron Lad',
          ksExclusive: true,
          heroes: [
            {
              name: 'Iron Lad',
              ksExclusive: true,
              addToList: true
            },
          ],
          antiHeroes: [],
          villains: [],
          addExpansion: true
        },
        {
          id: 29,
          name: 'Fing Fang Foom',
          ksExclusive: true,
          heroes: [],
          antiHeroes: [],
          villains: [
            {
              name: 'Fing Fang Foom',
              ksExclusive: true,
              addToList: true
            },
          ],
          addExpansion: true
        },
      ],
      heroes: [
        {
          name: 'Captain Carter',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Loki',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Shuri Black Panther',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Spider-man 2099',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Mighty Thor',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Ironheart',
          ksExclusive: false,
          addToList: true
        }
      ],
      villains: [
        {
          name: 'Immortus',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Maestro',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Emperor Doom',
          ksExclusive: false,
          addToList: true
        },
      ],
      antiHeroes: [
        {
          name: 'Cosmic Ghost Rider',
          ksExclusive: false,
          addToList: true
        },
      ],
      promoHeroes: [
        {
          name: 'Corsair',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Black Knight',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Ch\'od',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Songbird',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Hepzibah',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Cyborg Spider-man',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Patriot',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Raza',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'M',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Cypher',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Chamber',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Captain Britain',
          subtitle: '(Betsy Braddock)',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Speed',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Aurora',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Husk',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Lilandra',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Havok',
          subtitle: '(X-Factor)',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Elsa Bloodstone',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Kid Loki',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Wiccan',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Siryn',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Captain America',
          subtitle: '(Sam Wilson)',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Wong',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Meggan',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Deathlok',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Ghost Rider',
          subtitle: '(Johnny Blaze)',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Man-Thing',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Stature',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Agent Venom',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Werewolf by Night',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Moon Girl & Devil Dinosaur',
          ksExclusive: true,
          addToList: true
        }
      ],
      promoVillains: [
        {
          name: 'Wrecker',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Piledriver',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Thunderball',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Bulldozer',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Klaw',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Chameleon',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Titania',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Absorbing Man',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Abomination',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Crimson Dynamo',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Crossbones',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Maximus',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Iron Patriot',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Blastaar',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Hobgoblin',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'High Evolutionary',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Enchantress',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Gorr',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Knull',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Mole Man',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Lizard',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Purple Man',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Shocker',
          ksExclusive: true,
          addToList: true
        }
      ],
      promoAntiHeroes: [
        {
          name: 'Daken',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Darkchild',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'U.S. Agent',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Darkstar',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Red Hulk',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Ursa Major',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Red Guardian',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'White Widow',
          ksExclusive: true,
          addToList: true
        },
        {
          name: 'Moonstone',
          ksExclusive: true,
          addToList: true
        }
      ],
    },
    {
      gameId: 4,
      name: 'Spider-Geddon',
      addAll: false,
      addAllExpansions: false,
      addPromos: false,
      addBaseGame: false,
      expansions: [],
      heroes: [
        {
          name: 'Symbiote Spider-Man',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Scarlet Spider',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Silk',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Spider-Man Noir',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Peni Parker',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Spider-Punk',
          ksExclusive: false,
          addToList: true
        },
      ],
      villains: [
        {
          name: 'Morlun',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Spot',
          ksExclusive: false,
          addToList: true
        },
      ],
      antiHeroes: [
        {
          name: 'Anti-Venom',
          ksExclusive: false,
          addToList: true
        },
        {
          name: 'Superior Spider-Man',
          ksExclusive: false,
          addToList: true
        },
      ],
      promoHeroes: [],
      promoVillains: [],
      promoAntiHeroes: [],
    }
  ]
};
