# Split Filter

On a recent project, I found myself filtering an array and then re-filtering that array to get the items that didn't match the filter.

This function behaves the same as `Array.filter` and `_.filter`, but it returns two results. The first item in the array contains an array of all of the items that the filter returns `true` for, and the second item contains and array of all the items where the filter returns `false`.

```js
const splitFilter = require('@edorsey/split-filter')


const arrayToSplit = [1, 2, "a", 3, "b", "c", 4, []]


const [stringResults, leftovers] = splitFilter(arrayToSplit, (item) => typeof item === "string")

stringResults //["a", "b", "c"]
leftovers //[1, 2, 3, 4, []]
```


