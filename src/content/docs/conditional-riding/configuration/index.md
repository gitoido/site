---
title: Configuration
description: Let's get these rules set up properly
category: Conditional Riding
order: 1
version: 0.1.3
lastModified: 2026-04-16
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
  "rulesets": {
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
    }
  }
}
```

## Config file structure

* `debug` (default value: `false`) - Enables additional logging. Not recommended to enable on live servers.
* `enabled` (default value: `true`) - Enables or disables global mod functionality. 
* `messagesInHotbar` (default value: `false`) - If set to `true` the ruleset check messages will be shown above player hotbar instead of being a message in chat. 
* `rulesets` (by default provides `global` ruleset) - A list of riding rule sets. They are explained in next section.
## Rulesets field structure

```json
	"rulesets": {
		"global": {...object...},
		"blastoise": {...object...}
		"<pokemon>": {...}
	}
```

Let's observe the structure above:

`rulesets` field  is basically a list of pairs. Every pair is `key` on left side and `object` on right side.


 `key` on the left side is used as ruleset name and the actual binding of ruleset to pokemon.


`object` on right side is used as ruleset configuration and its [structure](#Ruleset%20structure) explained down below.

`global` ruleset name is a **reserved name by mod**.
This ruleset will be checked first, before any other ruleset, and it will apply on every pokemon.

`blastoise` ruleset will be checked on **Blastoise** only.

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