---
title: Configuration
description: Let's get these rules set up properly
category: Conditional Riding
order: 1
version: 0.1.5
lastModified: 2026-09-06
image: ""
imageAlt: ""
hideCoverImage: true
hideTOC: false
draft: false
featured: true
aliases:
  - conditional-riding
  - config
---


## Config file location

It will be automatically generated and placed at this path after first game launch with mod installed:
`<minecraft folder>/config/cobblemon_conditional_riding.json`

## Default config file content
```json
{
  "debug": false,
  "enabled": true,
  "messagesInHotbar": false,
  "global": {
    "enabled": true,
    "message": "conditional_riding.failed_ruleset.global",
    "rules": [
	  {
	    "variant": "held_item",
	    "itemCondition": {
		  "items": "minecraft:saddle"
	    }
	  }
    ]
  },
  "custom": {}
}
```

## Config file structure

* `debug` (default value: `false`) - Enables additional logging. Not recommended to enable on live servers.
* `enabled` (default value: `true`) - Enables or disables global mod functionality. 
* `messagesInHotbar` (default value: `false`) - If set to `true` the ruleset check messages will be shown above player hotbar instead of being a message in chat. 
* `rulesets` (by default provides `global` ruleset) - A list of riding rule sets. They are explained in next section.
## Rulesets structure

```json
  "global": {...object...},
  "custom": {
	"blastoise shiny": {...object...}
	"<pokemon>": {...object...}
  }
```

Let's observe the structure above:

`global` object is basically a ruleset that applies to all species player tries to ride.

`object` on right side is used as ruleset configuration and its [structure](#Ruleset%20structure) explained down below.

`custom` object contains rulesets for *PokemonProperties* string. For example:

`blastoise shiny` ruleset will be checked on **Shiny Blastoise** only.

## Ruleset structure

```json
{
  "enabled": true,
  "message": "conditional_riding.failed_ruleset.generic",
  "negation": true,
  "rules": [
	{
	  "variant": "held_item",
	  "itemCondition": {
		"items": "minecraft:saddle"
	  }
	}
  ]
}
```

* `enabled` (default value: `true`) - Enables or disables ruleset.
* `negation` (optional, default value: `false`) - Changes ruleset to do negative check of values.
* `message` (default value: `conditional_riding.failed_ruleset.global`) - The message that will be shown to player wen ruleset check fails.
  
	It can be a simple text: `Cannot ride!`
	It can be also a language token: `conditional_riding.failed_ruleset.global`
	You can pass placeholders into it: `%1$s cannot be ridden by %2$s!` where `%1$s` corresponds to species name or nickname and `%2$s` is player name.
	It will transform into this string for player: `Blastoise cannot be ridden by Player!`

* `rules` - A list of rules to check. Conditional Riding provides a great amount of built-in rules and they are explained in separate [document](docs/conditional-riding/available-rules/index.md).