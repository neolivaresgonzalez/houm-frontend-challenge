export interface LinkItem{
    name: string,
    url: string
}

export interface GameIndex {
    game_index:  number,
    version: LinkItem
}

export interface Item{
    
}

export interface VersionGroupDetails{
    level_learned_at:  number,
    move_learn_method: LinkItem,
    version_group: LinkItem
}

export interface Move{
    name: string,
    url: string
}


export interface MovesItem{
    move: Move,
    version_group_details: Array<VersionGroupDetails>
}

export interface AbilityItem{
    ability: LinkItem,
    is_hidden: Boolean,
    slot:  number
}

export interface Sprites{
    back_default: string,
    "back_female": string,
    "back_shiny": string,
    "back_shiny_female": string,
    "front_default": string,
    "front_female": string,
    "front_shiny": string,
    "front_shiny_female": string,
    "other": {
      "dream_world": {
        "front_default": string,
        "front_female": string
      },
      "home": {
        "front_default": string,
        "front_female": string,
        "front_shiny": string,
        "front_shiny_female": string
      },
      "official-artwork": {
        "front_default": string,
      }
    },
    "versions": {
      "generation-i": {
        "red-blue": {
          "back_default": string,
          "back_gray": string,
          "back_transparent": string,
          "front_default": string,
          "front_gray": string,
          "front_transparent": string,
        },
        "yellow": {
          "back_default": string,
          "back_gray": string,
          "back_transparent": string,
          "front_default": string,
          "front_gray": string,
          "front_transparent": string,
        }
      },
      "generation-ii": {
        "crystal": {
          "back_default": string,
          "back_shiny": string,
          "back_shiny_transparent": string,
          "back_transparent": string,
          "front_default": string,
          "front_shiny": string,
          "front_shiny_transparent": string,
          "front_transparent": string,
        },
        "gold": {
          "back_default": string,
          "back_shiny": string,
          "front_default": string,
          "front_shiny": string,
          "front_transparent": string,
        },
        "silver": {
          "back_default": string,
          "back_shiny": string,
          "front_default": string,
          "front_shiny": string,
          "front_transparent": string,
        }
      },
      "generation-iii": {
        "emerald": {
          "front_default": string,
          "front_shiny": string,
        },
        "firered-leafgreen": {
          "back_default": string,
          "back_shiny": string,
          "front_default": string,
          "front_shiny": string,
        },
        "ruby-sapphire": {
          "back_default": string,
          "back_shiny": string,
          "front_default": string,
          "front_shiny": string,
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "back_default": string,
          "back_female": string,
          "back_shiny": string,
          "back_shiny_female": string,
          "front_default": string,
          "front_female": string,
          "front_shiny": string,
          "front_shiny_female": string
        },
        "heartgold-soulsilver": {
          "back_default": string,
          "back_female": string,
          "back_shiny": string,
          "back_shiny_female": string,
          "front_default": string,
          "front_female": string,
          "front_shiny": string,
          "front_shiny_female": string
        },
        "platinum": {
          "back_default": string,
          "back_female": string,
          "back_shiny": string,
          "back_shiny_female": string,
          "front_default": string,
          "front_female": string,
          "front_shiny": string,
          "front_shiny_female": string
        }
      },
      "generation-v": {
        "black-white": {
          "animated": {
            "back_default": string,
            "back_female": string,
            "back_shiny": string,
            "back_shiny_female": string,
            "front_default": string,
            "front_female": string,
            "front_shiny": string,
            "front_shiny_female": string
          },
          "back_default": string,
          "back_female": string,
          "back_shiny": string,
          "back_shiny_female": string,
          "front_default": string,
          "front_female": string,
          "front_shiny": string,
          "front_shiny_female": string
        }
      },
      "generation-vi": {
        "omegaruby-alphasapphire": {
          "front_default": string,
          "front_female": string,
          "front_shiny": string,
          "front_shiny_female": string
        },
        "x-y": {
          "front_default": string,
          "front_female": string,
          "front_shiny": string,
          "front_shiny_female": string
        }
      },
      "generation-vii": {
        "icons": {
          "front_default": string,
          "front_female": string
        },
        "ultra-sun-ultra-moon": {
          "front_default": string,
          "front_female": string,
          "front_shiny": string,
          "front_shiny_female": string
        }
      },
      "generation-viii": {
        "icons": {
          "front_default": string,
          "front_female": string
        }
      }
    }
}

export interface Type{
  slot:  number,
  type: LinkItem
}

export interface Pokemon{
    id:  number,
    name: string,
    base_experience: Array<LinkItem>,
    height:  number,
    weight:  number,
    forms: Array<LinkItem>
    game_indices: Array<GameIndex>,
    held_items: Array<Item>,
    is_default: Boolean,
    location_area_encounters: string,
    moves: Array<MovesItem>,
    abilities: Array<AbilityItem>,
    sprites: Sprites,
    types: Array<Type>
}

export class Factory {
  create<T>(type: (new () => T)): T {
      return new type();
  }
}