---
title: Available rules
description: The list of rules that can be used to control riding
category: Conditional Riding
order: 2
version: 0.1.3
lastModified: 2026-04-17
image: ""
imageAlt: ""
hideCoverImage: true
hideTOC: false
draft: true
featured: true
---
## Advancement
```json
{
	"variant": "advancement",
	"requiredAdvancement": "minecraft:adventure/adventuring_time"
}
```
* `requiredAdvancement` - The advancement identifier.
* The check fails if player dont have that advancement

## Area
```json
{
	"variant": "area",
	"box": [
		0, 0, 0,
		10, 10, 10
	]
}
```
* `box` - Area bounds.
* First 3 `x, y, z` numbers mark the first corner.
* Second 3 `x, y, z` numbers mark the second corner.
* The check fails if pokemon is not within provided bounds. 
## Biome
```json
{
	"variant": "biome",
	"biomeCondition": "minecraft:plains"
}
```
```json
{
	"variant": "biome",
	"biomeAnticondition": "minecraft:plains"
}
```
```json
{
	"variant": "biome",
	"biomeCondition": "minecraft:plains",
	"biomeAnticondition": "minecraft:desert"
}
```
* `biomeCondition`, `biomeAnticondition` - Biome identifiers. Can also be a tag, for example `#cobblemon:is_bamboo`
* `biomeCondition` looks at the biome at current player location, if biome matches, the check passes
* `biomeAnticondition` is the same as `biomeCondition`, but check fails if player current location in that biome
* Both condition and anticondition can be combined. If combined, the check will fail if one of checks fails

## Friendship level
```json
{
	"variant": "friendship",
	"amount": 140
}
```
* `amount` - Minimum friendship amount required
* The check fails if friendship level is lower than amount
## Held Item
```json
{
	"variant": "held_item",
	"itemCondition": {
		"items": "minecraft:saddle"
	}
}
```
* `items` - Item identifier or tag, for example `#c:brushes`
* `components` - The list of data components the item stack must have
* The check fails, if pokemon doesn't hold such item
## World (dimension)
```json
{
	"variant": "world",
	"identifier": "minecraft:overworld"
}
```
* `identifier` - Dimension identifier
* The check fails if pokemon is not in that dimension
## Has move
```json
{
	"variant": "has_move",
	"move": "rollout"
}
```
* `move` - The move name
* The check fails if pokemon doesn't know that move
## Has move with elemental type
```json
{
	"variant": "has_move_type",
	"type": "flying"
}
```
* `type` - The move type
* The check fails if pokemon doesn't know a move with that elemental type
## Party Members
```json
{
	"variant": "party_member",
	"target": "wurmple",
	"contains": true
}
```
* `target` - A pokemon properties string. For example you can target `wurmple` or you can target specific shiny like that: `wurmple shiny`
* `contains` - If set to `true`, the check will succeed if you have that pokemon in party, if set to `false`, the check will fail instead
## Properties
```json
{
	"variant": "properties",
	"target": "shiny"
}
```
* `target`- A pokemon properties string. For example you can target `speed_ev=30` or you can target a shiny property like that: `shiny`
* The check will fail if the pokemon you are trying to ride don't have the defined properties in `target`
## Time Range
```json
{
	"variant": "time_range",
	"range": "day"
}
```
* `range` - The time range when check passes.
    The accepted values are: 
    - `any`
    - `day`
    - `night`
    - `morning`
    - `noon`
    - `afternoon`
    - `evening`
    - `midnight`
    - `predawn`
    - `dawn`
    - `dusk`
    - `twillight`
* The check will fail, if current in-game time of day doesn't match the value provided in rule. 
## Pokemon Level
```json
{
	"variant": "level",
	"minLevel": 1
}
```
```json
{
	"variant": "level",
	"maxLevel": 42
}
```
```json
{
	"variant": "level",
	"minLevel": 1,
	"maxLevel": 42
}
```
* `minLevel` - Minimal allowed level for check to pass
* `maxLevel` - Maximal allowed level for check to pass
* `minLevel` and `maxLevel` can be combined, which will allow to make a check that will check the pokemon level between those 2 values
* The check will fail if these requirements are not met
* The check respects max pokemon level configuration in Cobblemon itself
## Weather
```json
{
	"variant": "weather",
	"isRaining": true
}
```
```json
{
	"variant": "weather",
	"isThundering": true
}
```
```json
{
	"variant": "weather",
	"isRaining": true,
	"isThundering": false
}
```
* `isRaining` - Checks if it is raining in game currently if set to `true`, checks if it not if set to `false`
* `isThundering` - Checks if thunderstorm happening in game if set to `true`, checks if it not if set to `false`
* These two checks can be combined as seen in third example
* The check will fail if defined requirements are not met
## Use Move x times
```json
{
	"variant": "use_move",
	"move": "tackle",
	"amount": 10
}
```
* `move` - The move name
* `amount` - The amount of times the pokemon must use this move in battle
* The check will fail if pokemon didn't use that move the specified amount of times
## Moon Phase
```json
{
	"variant": "moon_phase",
	"moonPhase": "FULL_MOON"
}
```
* `moonPhase` - The current in-game phase of moon.
    The accepted values are:
    - `FULL_MOON`
    - `WANING_GIBBOUS`
    - `THIRD_QUARTER`
    - `WANING_CRESCENT`
    - `NEW_MOON`
    - `WAXING_CRESCENT`
    - `FIRST_QUARTER`
    - `WAXING_GIBBOUS`
* The check will fail if current moon phase doesn't match the provided requirement
## Blocks Traveled
```json
{
	"variant": "blocks_traveled",
	"amount": 100
}
```
* `amount` - The amount of blocks the pokemon must walk outside the poke ball
* The check will fail if the walk amount is less than value provided
## Structure Nearby
```json
{
	"variant": "structure",
	"structureCondition": "cobblemon:frozen_gimmi_tower"
	
}
```
```json
{
	"variant": "structure",
	"structureAnticondition": "cobblemon:frozen_gimmi_tower"
	
}
```
```json
{
	"variant": "structure",
	"structureCondition": "cobblemon:frozen_gimmi_tower",
	"structureAnticondition": "cobblemon:lush_gimmi_tower"
	
}
```
* `structureCondition`, `structureAnticondition` - Structure identifiers. Can also be a tag, for example `#cobblemon:is_bamboo`
* `structureCondition` looks at the structure presence nearby current player location, if it found one that matches, the check passes
* `structureAnticondition` is the same as ``structureCondition``, but check fails if it finds one nearby player location
* Both condition and anticondition can be combined. If combined, the check will fail if one of checks fails
## Owner Held Item
```json
{
	"variant": "owner_held_item",
	"itemCondition": {
		"items": "minecraft:saddle"
	}
}
```
* `items` - Item identifier or tag, for example `#c:brushes`
* `components` - The list of data components the item stack must have
* The check fails, if owner doesn't hold such item
## Player Has Permission (Luckperms, etc...)
```json
{
	"variant": "permission_node",
	"node": "conditional_riding.can_ride"
}
```
* `node` - The permission node that must be present for player or for one of the player groups
* The check fails if node is absent
## Cosmetic Item
```json
{
	"variant": "cosmetic_item",
	"itemCondition": {
		"items": "minecraft:saddle"
	}
}
```
* `items` - Item identifier or tag, for example `#c:brushes`
* `components` - The list of data components the item stack must have
* The check fails, if pokemon doesn't have such item in cosmetic slot

## Pokemon Minimal HP
```json
{
	"variant": "minimal_hp_percent",
	"percent": 40
}
```
* `percent` - The amount of hp in percents that pokemon must have
* The check will fail if pokemon hp percentage is lower than value provided