# HashMap Implementation in JavaScript

## Overview
This project implements a **HashMap** (hash table) in JavaScript using a **factory function**. It supports dynamic resizing and handles collisions using **separate chaining** (linked lists within buckets).

## Features
- **Custom Hash Function**: Uses a prime-based hashing algorithm.
- **Collision Handling**: Implements separate chaining with arrays.
- **Dynamic Resizing**: Automatically increases capacity when the load factor exceeds 0.75.
- **Standard HashMap Operations**:
  - `set(key, value)`: Adds or updates a key-value pair.
  - `get(key)`: Retrieves the value for a given key.
  - `has(key)`: Checks if a key exists.
  - `remove(key)`: Deletes a key-value pair.
  - `length()`: Returns the number of stored key-value pairs.
  - `clear()`: Clears the entire HashMap.
  - `keys()`: Returns all stored keys.
  - `values()`: Returns all stored values.
  - `entries()`: Returns all key-value pairs.

## Installation
Clone the repository and navigate to the project folder:

```sh
git clone <repository-url>
cd hashmap-project
```

## Usage
Import and use the HashMap in your `main.js` file:

```js
import HashMap from "./HashMap.js";

const map = HashMap();
map.set("name", "John");
map.set("age", 25);
console.log(map.get("name")); // Output: John
console.log(map.has("age")); // Output: true
map.remove("age");
console.log(map.length()); // Output: 1
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
