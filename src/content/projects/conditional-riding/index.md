---
title: Conditional Riding
description: Allows to configure ability to ride Pokemon via simple config
date: 2026-03-19
categories:
  - utility
  - cobblemon
  - mod
repositoryUrl: https://github.com/gitoido-mc/conditional-riding
projectUrl: ""
curseforgeUrl: https://www.curseforge.com/minecraft/mc-mods/conditional-riding-cobblemon
modrinthUrl: https://modrinth.com/mod/conditional-riding-cobblemon
status: active
image: ""
imageAlt: ""
hideCoverImage: true
hideTOC: true
draft: true
noIndex: true
featured: true
---
## Ever felt that getting to ride your pokemon is too easy?
### Maybe you wished for being able to define particular rules for riding?

This server-side mod does just that!

By default, after installation and first launch, it generates config that requires pokemon to hold a saddle:

`cobblemon_conditional_riding.json`

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

Seems easy, right? But, what if you want more?

Don't worry, this mod got your back! Check the documentation here: [Documentation](special/docs.md#Category-Conditional%20Riding)


### Credits
* Icon made by wundati
