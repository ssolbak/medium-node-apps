# medium-node-apps

This project is an example of how to organize a medium-sized Node.JS app.

## Goals

Discussion - in client side JS, no matter which framework you pick (React, Marionette, Angular) you are pushed a certain way. In Node, you are more
left to your own means. Not all code belongs in server.js, we can agree on that.

- Maintainability (testable)
- Simple Code. Easier to test, easier to scope in your head. (Single Responsibility Principle and all that good stuff).
- Easy to find classes/functionality.
- Split applications in to modules as determined by their business boundaries.
- A user, can be scattered throughout your domain

## The Code

1. Sample fantasy hockey draft app (that does almost nothing).
2. The event bus - communication between modules. Reduce cross-cutting coupling.
3. Avoid ../../../../dependency hell. Use a ~ symlink.
4. Not implemented, but the public folder is more single page style.

## Opinions

1. Group by coupling, not functionality.
2. Use an event store.
3. Be explicit
    - much easier to code "make customer preferred" then "save customer"
4. 10 tables/domain is a good rule. If more consider splitting.
5. Keep your tests inline with your code. Remind yourself continually that each file should have tests.
6. Names of files is critical. Underscores is not.

## Is this style for me?

Depends on the size of your app. If its small, just make a couple controllers/services. This comes with some complexity so there are tradeoffs.

 - Is it a simple app? Is all your logic client side?
 - Whats the Is it primarily data entry? Read only?

Not every app is the same. What are you familiar with as a team is often the best architecture.

## Decisions

1. What to scale separately
2. What are my business boundaries (this is often harder then coding them).

## What about large applications

In a huge application, you likely don't want all your code running in the same process. Its best to separate domains into
separate physical servers and scale over the network. Your bus will then be better off with something like Redis.

## Opinions change

We are always improving as developers. New frameworks come with new approaches. Talk to me in 3 months, I'll be doing things differently :)




