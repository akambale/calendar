# Vanilla JS Calendar Viewer

## Improvments with unlimited time:
I would add animation to app. When the month changes, it would be nice to have a sliding effect or to blur the month and days breifly for a transition.

I would want to be more mindful of scoping. All the calendar modifying methods and state are in global scope. It would probably be better to put them all in a class and tie them to a specific calendar on the page's ID. Similalry, the class names I used in my CSS are pretty plain. I would want to prefix such that a class name like `weekdays` would become `calendar-weekdays`.

A calendar like this could be used for a date picker. With that in mind, I would switch from using `rem` to `em` such that I could scale the calendar to different sizes easily.

## Tools to use for making the app production-ready:
Most production front-end code I write is in React. I would take advantage of React's state management features for modifying the heading and days on the calendar as well as properly scoping the methods. This is especially important if I want to render multiple calendars to the page (such as for a start and end date picker).

I would also use SCSS. This makes organizing CSS much easier and writing highly specific class names such as `Date-picker-calendar-component` less tedious.
