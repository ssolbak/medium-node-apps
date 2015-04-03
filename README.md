# medium-node-apps

This project is an example of how to organize a medium-sized Node.JS app. Its not production quality :)

## Goals

Maintainability (testable)
Simple Code. Easier to test, easier to scope in your head.
Easy to find classes/functionality.
Split applications in to modules as determined by their business boundaries.
 - A user, can be scattered throughout your domain

## The Code

1) Sample fantasy hockey draft app (that does almost nothing)
1) The event bus - communication between modules. Whether you use React, Marionette or whatever client side
2) Avoid ../../../../dependency hell. Use a ~ symlink.
3) Not implemented, but the public folder is more single page style.

## Opinions

1) Group by coupling, not functionality.
1) Use an event store.
2) Be explicit
    - much easier to code "make customer preferred" then "save customer"
3) 10 tables/domain is a good rule. If more consider splitting.
4) Keep your tests inline with your code. Remind yourself continually that each file should have tests.
5) Names of files is critical. Underscores is not.

## Is this style for me?

Depends on the size of your app. If its small, just make a couple controllers/services. This comes with some complexity.

 - Is it a simple app?
 - Whats the Is it primarily data entry? Read only?

Not every app is the same. What are you familiar with.

## Decisions

1) what to scale separately

## What about large applications

In a huge application, you likely dont want all your code running in the same process. Its best to seperate domains into
seperate physical servers and scale over the network. Your bus will then be better off with something like Redis.

## Opinions change

Talk to me in 3 months, I'll be doing things differently.




