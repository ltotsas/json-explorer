# JSON Explorer Challenge
## Summary

A component to select keys from a JSON object that returns the keyʼs path and value
## Task

Build a React Function Component that takes in JSON data as an argument and satisfies the
following acceptance criteria.
### Acceptance Criteria
```
● The JSON data is correctly displayed: indentation, (curly) brackets, commas, string
values, number values, boolean values, arrays, objects, etc.
● All keys can be interacted with and are highlighted (e.g. color: blue)
● When a user clicks on a key, it shows its path and value:
  ○ Examples from video:
    ■ When a user clicks on “date” it shows “res.date” and "2021-10-27T07:49:14.896Z"
    ■ When a user clicks on “hasError” it shows “res.hasError” and “false”
    ■ When a user clicks on “prop” in the first object in the `fields` array, it shows “res.fields[0].prop” and “iban”
```

## Bonus points
```
● Use Typescript
● The input field displays the correct value when given a path to the property (as seen in
the video)
```

## Implementation note

The input **demo** JSON has different style from the video, where the demo data is a valid JSON but the video is not.
The requirement state that ``The JSON data is correctly displayed: indentation, (curly) brackets, commas, string
values, number values, boolean values, arrays, objects, etc.`` but the video displays different Ui.
I chose to follow the video even though the output is not valid JSON, being though as close to a valid JSON.

I also added some extra JSON data to display the functionality of the explorer and support of JSON objects. 
For example how to handle primitives, or handling top level Array or Object. 