# Scavenger's Hand
 The first card game from a team of passionate people: Experience the thrill of a roguelike card game where every action is determined by the draw of a card. Stay tuned for more details as the lore unfolds!

# Change log

## Demo version 0.04

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

## Demo version 0.03

  -  most objects are now global objects
  -  most objects have a sprite and tile equivalent (sprite is for DungeonGenerator, and tile is for manually designing rooms)
  -  added a version number to the menu screen

New version number system: increment the version number +0.01 per 'release'
