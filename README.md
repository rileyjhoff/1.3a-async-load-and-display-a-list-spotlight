## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?

- Consider your data model.
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
  - What are the key/value pairs?
  - What arrays might you need?
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

## Assignment

- The goal here is to help you see web development the way experienced developers do: as a series of finite and repeatable tasks.

- There are only so many things we do in an app.

- [Here is a list of the 10 major plain JavaScript patterns.](https://github.com/alchemycodelab/module-one-curriculum-base/blob/main/PATTERNS.md)

- Let's practice the 'display a list' and 'render function' patterns using data fetched with the `async fetch on load` pattern.

## Grading Rubric: 2.5 points per array of items displayed on the site.

1. Goal: asynchronously fetch and render 4 separate lists of things to the same index.html file.
2. Start with the [alchemy web template](https://github.com/alchemycodelab/web-template). Don't forget to add the supabase CDN to index.html and make a fetch-utils.js with some good copy paste work to set up the supabase client with the KEY and URL.
3. Repeat the following process 4 times, with 4 different domains, all in the same template:
    1. Come up with a domain for this data (like 'dogs' or 'candies'). Let's assume you picked 'candies'.
    2. In the supabase.io app, create a 'candies' table, Your table should have at least 4 columns.
    3. In the supabase.io app, create at least three rows in your table.
    4. In your app, in a separate file, write a render function for your domain. Your function should accept one object and returns a DOM element. This function should return at minimum a div with two p tags. The outer div should have a css class of 'candy-item'.
    5. Add a fetch function called `getCandies()` to your fetch-utils.js file to fetch all candies asynchronously.
    6. Then, in app.js use `window.addEvenListener('load', () => {})` to fetch and display your data from supabase.
        1. In your load event listener, first fetch the data.
        2. Then, loop through the fetched array array, and for each object, render and appends a styled candy element to the container element you grabbed from the DOM.
        3. Move this fetch, render, and append into its own fetchAndDisplayCandies() function to make it more readable. After all, we'll be doing this for 4 different tables and that could get messy if we didn't abstract this work into functions.
    7. Note: do this process one domain table at a time. Do not write 4 domain tables, then 4 render functions, etc. Please work through the first domain table, then the first render function, then the first display function.
