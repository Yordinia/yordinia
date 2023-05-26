# APIs

- Links
 - Inter

### Creating an id for the interactive api 
- Using postman / other API tools and sending them a GET request with 
`url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/"` would work.
> With out tools we can run the following in a browser console

```
const apiUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";

const response = await fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({name: 'mealdbId'}),
})
if (response.ok) {
  const textResponse = await response.text(); //this is the ID
  // Extract the ID from the response using string manipulation or regex
  const id = extractIdFromResponse(textResponse); //depends on the API
  console.log('Successfully created ID:', id);
} else {
  console.log('Error:', response.status);
}
``` 
# POST

## STORING LIKE Informations
```
const apiUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
const id = "u1OR2DCVYRCtntaAEWH8"; // The ID obtained from the previous step

// Assume you have an element with an associated like count
const elementId = "your-element-id";
const likeCount = 5; // The current number of likes for the element

// Prepare the data payload
const data = {
  item_id: elementId,
  like_count: likeCount,
};

// Make a POST request to store the like information
const response = await fetch(apiUrl + id + "/likes", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

if (response.ok) {
  console.log('Like information stored successfully.');
} else {
  console.log('Failed to store like information:', response.status);
}

```
## STORING LIKE Informations
```
// Make a GET request to retrieve the like information
const response = await fetch(apiUrl + id + "/likes");

if (response.ok) {
  const likeData = await response.json();
  console.log('Like information retrieved:', likeData);
  // Process the likeData as needed
} else {
  console.log('Failed to retrieve like information:', response.status);
}

```
# My API based webapp
- use AAA pattern for usit tests
- send andreceive data from an API
- Asynchronous JS code
- es6 syntext & modu

## description
- Select an API mealsdb
    - `https://www.themealdb.com/api`
- We'll have 2 user interface
- Like for each items
- A popup window with more data about an item that you can use to comment on it or reserve it for a period of time.

