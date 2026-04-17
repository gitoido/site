---
title: Influencing Cobblemon shiny chances
date: 2026-01-17
description: How to work with ShinyChanceCalculationEvent in Cobblemon
tags:
  - cobblemon
  - code
  - kotlin
image: ""
imageAlt: ""
imageOG: false
hideCoverImage: false
hideTOC: false
targetKeyword: Cobblemon ShinyChanceCalculationEvent
draft: false
---
## Intro

Sometimes you want to modify the ✨*shiny*✨ rate of the species you are working with.

Use cases tend to differ. The typical scenario is when you are trying to give a player a species via methods other than natural spawning.

The code in this note is **Kotlin**. Your experience with **Java** may vary. Don't be afraid to ask questions in the Cobblemon Discord's `#programming` channel.

## Creating the shiny chance event

Let's instantiate `ShinyChanceCalculationEvent`:

```kotlin
val pokemon = PokemonProperties.parse('zubat').create()
val shinyRate = Cobblemon.config.shinyRate
val event = ShinyChanceCalculationEvent(shinyRate, pokemon)
```

It accepts only two parameters:
* **shinyRate** - `Float` - Base chance, fetched from the mod config.
* **pokemon** - `Pokemon` - Initialized instance of the species.

Now that we have created an event instance, we are ready to do some work - the instance exposes a couple of handy functions.

## Event modifier signatures

The first exposed function allows us to apply a flat modifier to the odds:

```kotlin
event.addModifier(modifier: Float)
```

The second exposed function allows us to apply a callable function to modify the odds.
We expect three arguments to be passed to it:
* `Float` - Shiny rate
* `ServerPlayer` - Nullable player 
* `Pokemon` - The species instance we are calculating the chance for

```kotlin
event.addModificationFunction(function: (Float, ServerPlayer?, Pokemon) -> Float)
```

These handy helpers are our bread and butter.

## Plain value modifier

For example, if I want to increase the odds, I would do it this way using plain value modifier:

```kotlin
val shinyRate = Cobblemon.config.shinyRate
val event = ShinyChanceCalculationEvent(shinyRate, pokemon)
event.addModifier(-100f)
```
**You may notice that i pass the negative value. Why?**
It's math.

To *increase* the odds we must *lower* the value.
The calculation will look like that: `8192 - 100 = 8092 = 1/8092` 

Otherwise, to *lower* the odds, we must *increase*  the value:
The math will become this instead: `8192 + 100 = 8292 = 1/8292`

## Callable value modifier
The callable allows us to be more flexible:

```kotlin
var shinyRate = Cobblemon.config.shinyRate
val event = ShinyChanceCalculationEvent(shinyRate, pokemon)

event.addModificationFunction { chance, player, pokemon -> 
  // For example, in this case I want to
  // increase the odds if the pokemon is holding a diamond.

  // Early bail if criteria not met
  if (pokemon.heldItem().item != Items.DIAMOND) {
    return@addModificationFunction chance
  }

  // Return calculated chance otherwise
  return@addModificationFunction (chance - 100f)
}
```

> [!hint] Kotlin specific
> The absence of parentheses in `addModificationFunction` function call is Kotlin syntactic sugar - in this case we only pass callable function as sole argument
> 
> The `return@addModificationFunction` is *specific to Kotlin* because we can explicitly tell Kotlin which function we want to return from.

## Getting it all together

Now that we are done modifying our chances, let's assemble it all together:

```kotlin
fun calculateShiny(player: ServerPlayer): Pokemon {
  val pokemon = PokemonProperties.parse('zubat').create()
  val shinyRate = Cobblemon.config.shinyRate
  val event = ShinyChanceCalculationEvent(shinyRate, pokemon)
  
  // Flat modifier
  event.addModifier(-100f) // lower the base chance value by flat 100
  
  // Callable modifier
  event.addModificationFunction { chance, player, pokemon -> 
    // For example, in this case I want to
    // modify the rate if the pokemon is holding a diamond.

    // Early bail if criteria not met
    if (pokemon.heldItem().item != Items.DIAMOND) {
	  return@addModificationFunction chance
    }

    // Return calculated lowered chance otherwise
    return@addModificationFunction (chance - 100f)
  }

  // Time to roll our shiny chance, finally
  CobblemonEvents.SHINY_CHANCE_CALCULATION.post(event) { evt ->
    pokemon.shiny = evt.isShiny(player)
  }
  
  return pokemon
}
```

You may notice something: I check for ✨shiny✨ in the `post` handler of the event.
This is because there are other mods that can influence the shiny rate.

Checking it at that particular place ensures your mod will properly pick up other chance influences and in general is better for interop between different mods.

You can also ponder upon usage in this [example]()

That is all. Happy modding!