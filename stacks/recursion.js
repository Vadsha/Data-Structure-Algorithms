/*
You have to find a key in a box A. when you open the box A, you see two smaller boxes B and C.
So, as recursion, you look through the box B,again you see two more boxes : D and E.
Again, you look through the box D but it's empty.
How do you go back to look at the boxes C and E?
Since Box D is empty, you go back to Box B and check Box E.
If Box E also doesn't contain the key, you return to Box A and check Box C.
Continue this process until you find the key or exhaust all boxes.
*/


/*
Call stack representation:
findKey(A)  --> Open A, find [B, C]
│
├── findKey(B)  --> Open B, find [D, E]
|   [if not found in B - Returns to A (for loop for a is still running)]
│   │
│   ├── findKey(D)  --> Open D (empty) ❌
│   │   [if not found - Returns to B (for loop doesn't stop , smaller loop running for B is still running)]
|   |   [if found - breack loop with return true]
│   │
│   ├── findKey(E)  --> Open E (check inside)
│       [if not found - Returns to B (for loop doesn't stop , smaller loop running for B is still running)]
│   |   [if found - breack loop with return true] 
|
├── findKey(C)  --> Open C (check inside)

*/

function findKey(box) {
  for (let item of box) {
    if (item === "key") {
      console.log("Key found!", item);
      return true; // Stop searching
    } else if (Array.isArray(item)) {
      if (findKey(item)) {
        return true; // If key is found in sub-box, stop searching
      }
    }
  }
  return false; // No key found in this box
}

// Example: Nested boxes
const boxes = [
  [
    // Box A
    [[], []], // Box B (Box D is empty, Box E has the key)
    [], // Box C
    [[], ["key"]], // Box F (Box H is empty, Box I has the key)
  ]
];

findKey(boxes);
