## ALTERNATE SOLUTIONS

### Solution 1
```js
// the global variable
let globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
    return title.toLowerCase().trim().split(/\s+/).join("-");
}
// Add your code above this line

let winterComing = urlSlug(globalTitle);        // Should be "winter-is-coming" 
```


### Solution 2
```js
// the global variable
let globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
    return title.split(" ").filter(substr => substr !== "").join("-").toLowerCase();
}
// Add your code above this line

let winterComing = urlSlug(globalTitle);            // Should be "winter-is-coming"
```

