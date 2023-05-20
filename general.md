# bash
- Adding line/characters to a file ```echo Are you kidding me >> test.txt```
- renaming/ changing string ```sed -i -e 's/boat/car/g' test.txt```

# git
setting a branch to a default using command on local
- ```git remote set-head <remote-name> <branch-name>```
setting a default branch remote
- ```git branch --set-upstream-to=origin/develop develop ```
- git pull --rebase > replaying your local commits on top of the updated remote branch, resulting in a linear history
- To delete a remote branch after locally deleting the branch

```git branch -d OR -D <branch-name>```

```git push <remote-name> --delete <branch-name>```
- Renaming branches
```git branch -m <old-branch-name> <new-branch-name>```
- Then,
```git push <remote-name> -f <new-branch-name>``` //--force
- Undo a merge > get the commit id > git log OR git reflog, then 
```git revert -m 1 <merge-commit-hash>```
----
<details>
<summary> To change github deployment in the command line (webpack) </summary>

- npm install gh-pages
- in package.json

`"scripts":{
"deploy": "gh-pages -d dist" }`
</details>

<details>
<summary> Git flow commands include </summary>

- git flow init // select yes / no
- git flow feature start feature_branch //start a feature branch /from dev
- git flow feature finish feature_branch //finish feature/ merge into dev
- git flow release start 0.1.0 // start release from dev
- git flow release finish 0.1.0 // merge release into dev & main
- git flow hotfix start hotfix_branch // start release from main
- git flow hotfix finish hotfix_branch //  merge hotfix into dev & main

- Finishing without git flow 
```
git checkout main
git merge hotfix_branch/0.1.0
git checkout develop
git merge hotfix_branch/0.1.0/feature_branch
git branch -D hotfix_branch/0.1.0/feature_branch
```
</details>

- to check what your remote branch name is ```git remote```
- then fetch and push origin links ```git remote -v ```

# CSS


# JSON
<details>
<summary> Json server </summary>
Install JSON server globally

 - ```npm install -g json-server```

create db.json file with data, give it sample json file

```
{
    "Users": [
        {
            "id": 0,
            "name": "Mar"
        }
    ]
}
```
 - Link [here](https://github.com/typicode/json-server)

- run Json server ```json-server --watch db.json```
</details>

### What is JSON
- Has exact JavaScript Object syntax, except properties are always in quotes "file.json":{ "lat": -42, "lon":30}
- 
-

### API fetch syntax
```
fetch('https://reqres.in/api/users')
.then(res=> {
    if(res.ok){
        console.log('successful')
    } else{
        console.log('not successful")
    }
}).then(data=> console.log(data))
  .catch( error =>console.log('error'))//fetch error never happens unless there;s api link error..
```
### POST, GET, PUT
<details>
<summary> POST </summary>

- To post data to our server, we're going to NEED TO USE the OPTION section of the fetch method (as a second argument), and pass an object.
```
fetch('https://reqres.in/api/users', {
    method: POST, //creates a new user in the api
    body: JSON.stringify({
        name: 'User 1'
    }) // data for that user
}).then(res=> {
    return res.json()
}).then(data=> console.log(data))
  .catch( error =>console.log('error'))
```
or, in anothe rformat
```
// microverse LeaderBoard API
const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const response = await fetch(`${apiUrl}games/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Game-ID' }),
    });
    const res = await response.json();
    gameId = res.result;  
```

</details>
<details>
<summary> GET </summary>

- 
</details>
<details>
<summary> PUT </summary>

- 

</details>
<details>
<summary> DELETE </summary>

- 
</details>
<details>
<summary> PATCH </summary>

- 
</details>

# Algorithm
<details>
<summary> Algorithm efficiency </summary>

- Consider Time & Space
- 
[Source](https://github.com/microverseinc/curriculum-computer-science-fundamentals/blob/main/basic-data-structures/lessons/algorithms_efficiency.mdhttps://github.com/microverseinc/curriculum-computer-science-fundamentals/blob/main/basic-data-structures/lessons/algorithms_efficiency.md)
</details>

# Low Level (deep understanding of) Computer Programming
<details>
<summary>Computer Design and Architecture</summary>

- Notes here
- notes
</details>

<details>
<summary> Object Oriented Programming Principle </summary>

-  High level programming principles book [object-oriented thought process]
- they **improve your technical vocabulary** !
</details>

<details>
<summary>  System Design</summary>
- 
</details>

# other
<details>
<summary> PATCH </summary>
- 
</details>

<details>
<summary> PATCH </summary>
- 
</details>

<details>
<summary> PATCH </summary>
- 
</details>


# other
<details>
<summary> PATCH </summary>
- 
</details>

<details>
<summary> PATCH </summary>
- 
</details>


# Rest
<details>
<summary> What is rest </summary>

- REST (Representational State Transfer) is an architectural style and set of principles for designing networked applications.
- Used in Web dev to build APIs, that allows d/t software systems to communicate & interact with each other over HTTP protocol.
- RESTful APIs are designed around a few key principles:
    - Resource-based: REST treats data as resources that can be identified and accessed through URLs (Uniform Resource Locators).

    - Stateless: Each request from a client to a server should contain all the necessary information for the server to understand and process the request. The server should not store any client-specific information between requests.

    - Uniform interface: RESTful APIs follow a standardized set of HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources. These methods are mapped to CRUD (Create, Read, Update, Delete) operations.

    - Client-Server architecture: The client and server are separate entities that communicate over a network. The client is responsible for the user interface and user interactions, while the server manages resources and performs necessary actions.

    - Cacheable: REST APIs can take advantage of caching to improve performance. Responses from the server can be stored by the client or intermediate servers to be reused for subsequent requests.
    
</details>

<details>
<summary> PATCH </summary>

- 
</details>


# other
<details>
<summary> PATCH </summary>
- 
</details>

<details>
<summary> PATCH </summary>
- 
</details>