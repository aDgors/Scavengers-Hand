# Scavenger's Hand
 The first card game from a team of passionate people: Experience the thrill of a roguelike card game where every action is determined by the draw of a card. Stay tuned for more details as the lore unfolds!

## The team of passionate people:
- aDgors (Main Developer)
- Seven (Second Developer)
- WhiteDevil (Storyteller)
- Roselisa (Designer)

## Discord server

You can join our Discord server - **Dungeon's Entrance** - by clicking [right here](https://discord.gg/invite/MBeE9krznG/). Server is going to open once we gather enough members (which we call *scavengers*), but for any suggestions you can DM @aDgors.

## License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/Seven0492/Scavengers-Hand">Scavenger's Hand</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://scvh.neocities.org/#home">aDgors, Seven0492, WhiteDevil and Roselisa</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC 4.0 <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""></a></p> 

The full license is included in the LICENSE file of the repository.

# Change log

## Change log v0.07-B1 :

- Bugfix:
	- The main menu now shows the appropriate "Main Menu UI" layer instead of the "Game Mechanics UI" at the start of the game.

- Version numbering:
	- Version numbers are now going to be prefixed with a bugfix number extension, `-Bx`, to differentiate bugfixes and the potentials problems they may cause. Any change to the existing game beyond a drop-in bugfix, like a mechanics change, is always a version number increment.

## Change log v0.07b :

- Cards:
	- Managed to get a small card system, with animations. (:tada:)

- Levels:
	- Added a new scene, called "Game Levels", where we can build custom levels for the public beta.

Notes: I hope we can push everything tomorrow to the main branch of the game. I am going to do a cleanup of unnecessary files (unused sprites files) and, after making a few levels to show others our card system, we can publish it.

## Change log v0.07a :

- Player:
	- Made a separate Player object for the mechanics of the game
	- Player object now has custom movement and collision (toggleable collision hitbox)

Making of the card system is going to be a bit complicated, especially as beginners. *Hoping someone is kind enough to help us on the house. (You can find the Discord invite above the Change log)* 

## Change log v0.05 / v0.06 :

	- Main menu changes:
		- Menu's scene's code cleaned up (Thanks to Seven)
		- Added Procedurally Generated Demo (PGD) settings

	- Other changes:
		- Started using structures for different things, just to keep things more organized
		- Tidied up the main menu code a bit more
	


## Change log v0.04 :

	- Main Menu changes:
		- Added a Levels button for the types of level
		- Added a Game mechanic button for game mechanics
		- Added settings buttons for the simple dungeon generation(WIP) and noise generation
		- All of the above will be temporary, as we're going to remove them once we publish the game.

	- First levels:
		- Player now snaps to grid once teleported

	- Other Mechanics:
		- Escape key now closes the game
		- Added back buttons for every scene
		- Added the card mechanic
			- You can randomize the direction of cards by pressing on the card laid on its back
			- You can't move the player by using the keyboard
			- Added a collision "box", which won't work in this version, but might do in later versions.
	
	- Events/Interactions:
		- "is pressed" event is going to be used instead of "is clicked"
		- Instead of using "on_mainMenu" or similar variables, we can use the "Visibility of a layer" function

## Change log v0.03 :

  -  most objects are now global objects
  -  most objects have a sprite and tile equivalent (sprite is for DungeonGenerator, and tile is for manually designing rooms)
  -  added a version number to the menu screen

New version number system: increment the version number +0.01 per 'release'
