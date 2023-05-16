# Module 2

> es6, modules, webpacks .. you learned it all.

WEEK 3
# CLEAN CODE 
## Short-circuit Evaluation
- THIS
``` console.log( var1 || "VARIABLE NOT FOUND!" ) ```
- instead of
```
if (var1 === null || var1 === undefined || var1 === '') {
     console.log("VARIABLE NOT FOUND!")
} else {
    console.log(var1)
}
```
- *OR* => (A || B)  returns A if A is true(any value but null), B could be True or false,
 - B, if A is false (undefined, or "", or null) but B is true, 
 - and NULL if neither are true.

- We can use short-circuit evaluation in many cases like
- const firstName = person && person.firstNames;
- This will return the persons firstName 
- if the person is not false (undefined, null, etc).
- *AND* => (A && B) returns B if BOTH A and B are true, 
null if atleast one is false

-  use  Arrow Functions () =>
- Avoid boring old for loop
> use, list.forEach((number, index) =>
  console.log(index+") "+number)
- **Implicit Return** 
- (if there's only one statement in the arrow function)
```
const getMeasures = length => ({
    area: length * length,
    volume: length * length * length
})
```
## Default Parameters
const volume = ( l, w = 1, h = 1) => l * w * h
-  Destructuring
 - 4 Object - let {first, last} = {first: 'wes', last: 'Bos'}
 - 4 Arrays - let [a, b, ...c] = [1,2,3,4] // a=1,b=2, c = [3,4]
## Spread Operator
 - 4 Object - let obj2 = {first: 'wes', last: 'Bos', ...obj1}
 - 4 Arrays - let arr2 = [1,2, ...arr1]//arr2=[1,2,contents of arr1]

- let obj = {
  a: 1,
  a: 2
} 
// here, obj.a is 2 (the 1st is overritten)

     > Object.keys(obj) returns ['a'].

## Importing Modules
import { observable, action, runInAction } from ‘mobx’ //not all

# Async/Await over Promises
BAD promise

const makeRequest = () =>
  getJSON()
    .then(data => {
      console.log(data)
      return "done"
    })

makeRequest()

GOOD promise

const makeRequest = async () => {
  console.log(await getJSON())
  return "done"
}

makeRequest()

# Map, Filter, Reduce

e.g. 
x = {a:first, b:second, c:third};

x.map((data, index)=> {data: index})

will return {first: 1,second: 1,third: 1}

x.filter((data,index)=> index%2==0 ) 

will return even indexed objects > {a:first, c:third};

x.reduce((prev, data) => prev +' ' +distance, '') 

will return 'first second third'




> Microverse zoom meeting link
https://microverse.zoom.us/j/2541114616?pwd=ZDRPYkVBR01UVjA3Q2xzZ2ZQMSsrUT09