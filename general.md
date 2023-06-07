# My contacts
👤 **Yordanos Temesgen**
- <a href="mailto:yoriyordina7@gmail.com">Email to: yoriyordina7@gmail.com</a>
- GitHub: [@yordinia](https://github.com/yordinia)
- Twitter: [@yordinaM](https://twitter.com/yordinaM)
- LinkedIn: [@yordanos-temesgen-941727233](https://www.linkedin.com/in/yordanos-temesgen-941727233/)

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
- To check out a commit before 3 weeks
```git log --before="3 Weeks"```
- to save all gitbisect log to a file
```git bisect log > bisect```
- git bisect ```git bisect bad HEAD``` if you know a current one is bad
- To find the first good commit ```git bisect visualize``` after reseting and checkout ur preffered commit
- 

-----
### Git Commands
<details>
<summary>Git Stash</summary>

- stash ``` git stash ```
- to stash untracked files (such us newly created files) ```git stash -u```
- To stash with a custom message```git stash push -m "Initialize project using Create APP"```

get / use files
- To get the stashed files back ``` git stash apply 0``` 0 is [index]
- pop the last one into our dir and remove it from stash stack``` git stash pop ```
- To create a new branch from a stash ``` git stash branch new-branch 0```

To see stash
- To list all the stash changes ``` git stash list```
- If we only have 1 stash ``` stash(0) on a branch: 3030399```
- Show us the changes in a specific stash ``` git stash show 0```
- With preview ``` git stash show -p 0 ```

- Remove stash ``` git stash clear```
- drop specific stash ``` git stash drop 0```

- [Additional Commands](https://git-scm.com/docs/git-stash)

</details>
<details>
<summary>Git reset and -- </summary>

- `git reset .` : This command is used to unstage changes in the current branch. It removes the changes from the staging area (index) without modifying the working directory. It essentially resets the staging area to match the last commit while leaving the modified files in the working directory untouched.

- `git checkout -- .` : This command is used to discard local changes in all files within the current directory and its subdirectories. It effectively reverts the modified files back to the state they were in when you last committed or checked out the branch. The . represents the current directory, and the -- separates the command from the file paths.
</details>

# Dev tools
- Ctrl+Shift+I to open browser dev tools
- ```getEventListeners($0)``` $0 special variable in the console that represents the currently selected element
- 
<details>
<summary> Webpacks </summary>
- To make sure everything is install for webpack
```
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin file-loader style-loader css-loader --save-dev
```
</details>
<details>
<summary> To change github deployment in the command line (webpack) </summary>
- after webpack is installed ```npm install webpack webpack-cli --save-dev
```
- npm install gh-pages
- in package.json

`"scripts":{
"deploy": "gh-pages -d dist" }`

> npm run deploy
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

# DOM
<details>
<summary> <h1> HTML elements (W3Schools)</h1> </summary>

- insertAdjacentHTML - ```h2Element.insertAdjacentHTML("afterend", "<p>My new Par</p>")```;
- The following are legal positions (parameters)

|   Value	|   Description |
| --------------|-------------------|
| afterbegin	| After the beginning of the element (first child),  BEGIN> TOP| 
| afterend	| Right after the element, ANOTHER BOTTOM ELEMENT | 
| beforebegin	| Before the element TOP ELEMENT| 
| beforeend	| Add a LAST CHILD, BOTTOM| 
 <CONTAINER> <H1> </H1> ["afterend"]  <CONTAINER>
</details>
<details>
<summary> GET </summary>

- 
</details>

# CSS
<details>
<summary> GET </summary>

- 
</details>

<details>
<summary> GET </summary>

- 
</details>

# VS code
- Add cursor above/below > CTRL + alt + UP/DOWN
- Add cursor to line ends > Shift + alt + i
### Extensions
    - 


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

### API 
- More API examples we used for capstone and more - here ([link to capstone.md](Module-2\W5\capstone.md#APIs))

- fetch syntax
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
- or, in anothe ecample / format
```
const apiUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";

const response = await fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({name: 'mealdb-id'}),
})
const {mealdb-id} = await response.json();

if(response.ok) console.log('successful', mealdb-id)
else  console.log('Error, failed', mealdb-id)


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

## Headers in responses
- To check the content type of a response body
`response.headers.get('Content-type')`
- To check the length
`response.headers.get('Content-length')`
- to compare weather its `text/html` or `application/json`
    - ` response.headers.get('Content-type') === 'text/html'`
    - ` response.headers.get('Content-type') === 'application/json'`

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

# CHAT GPT
- CHAT GPT is a natural language processing tool, developed by open ai. 
- Like a very knowledgable person that knows all the things of the internet.
## Triks
- Giving it a role, will be more detailed and has better response.
    - Act as a an English teacher and Improver
    - Let's take this step by step, after a response
    - Did you time out, when it stops gen.
### GAME CHAGNER
<summary> How to use chat GPT to learn how to code better and faster </summary>
- Chat GPT became my tutor
    - design a custom design for you
    - first attempt - give me study plan to learn android dev
    - 2nd 1 - give me study plan to python for data science with resources
- Provide who, what, when, where why - Study Plan Framework
    - who -  what's the role of chat GPT in giving you a study plan
    - what - to learn, when - time, where - online, why
- GPT command for study plan
>GPT: Act as a coding tutor that creates study plans to help people learn to code. You will be provided with the goal of the student, their time commitment, and resorce preferences. You will create a study plan with timelines and links to resources. OOnly include relevant resources because time is limited. My first request - " I want to become a data scientist but I do not know how to code. I can study 10 hours per week and only want video resources. I want to learn to code in p ython. create a study plan for me.

- Chat GPT Project Ideas
    - Say you've now learn, and you want to do a project.
    - If you want to find a project to do about Naruto
>GPT: Act as an expert data scientist and create an exploratory data analysis python data science project about Naruto the anime.
    - 

- Prompt Engineering 
    - is the art / science of designing prompts to be input into AI to get better responses and help solve problems.
    - how to design good chatgpt prompt
    - 

</details>

# ME
<details>
<summary> Career Path </summary>
Dream big, write down what your ideal life looks like
    - Traveling and having a fulfiling job related to something influencial, helps people in some way or allows me to learn big things I want to do my self
    - 
</details>

# Android Dev
<details>
<summary> Change PWA into Android </summary>
Install and create an empty android studio proj

### To convert your web app into an APK 
- Cordova
    - Install Cordova globally: `npm install -g cordova`
    - Create a new Cordova project: `cordova create MyApp`
    - Move your web app files into the newly created project's www folder.
    - Add the platform you want to build for, e.g., Android: `cordova platform add android`
    - Build the Cordova project: `cordova build android` >install JDK, Gradle and add them to path
- React Native
    - 
</details>

# React
- create react app (check documentation) `npx create-react-app contact-app`
- start dev    `npm start` / port 3000 by default
- delete default /logo.png, txt in public, del test, css, report,
- +src/components/Header.js,AddContact.js,ContactList.js,ContactCard.js +src/images +App.js,css
### Odin project
React general syntax

```
import React, {Component} from 'react';
class MyApp extends Component{
    constructor(){
        super()
    }
    render(){
        // my render return JSX, an HTML-like syntax that is "transpild" into JS
        return (
            <div className="App">
            </div>
        )
    }
}
export default MyApp;
```
- render retrun JSX, class = className, onchange = onChange, for = htmlFor
- 
- 



Source - [link to react with dipesh](MyXP/React/LearnReactJSWithProject.md#ReactJSDipesh)


# ReactChatGPT

[learning assistant](MyXP\React\myLearningAssistant.md#%20Learning%20assistant%206th%20project)


# Linux
<details>
<summary> decoding </summary>

- decoding 64 base
- echo "Ik5ldmVyIHRydXN0IGEgY29tcHV0ZXIgeW91IGNhbid0IHRocm93IG91dCBhIHdpbmRvdyIgLSBTdGV2ZSBXb3puaWFr" | base64 -d

</details>

<details>
<summary> GET </summary>

- 
</details>

# holberton
requirements
- access a distant server using ssh
- learn the very basics of the Linux command line
- install a software on Linux
- use the Emacs text editor
- install a web server on Linux
- read a configuration file
- use HTML, CSS and javascript to build a website
- and most importantly: search for information and help each other

### log in to server
- ssh <username>@<server-ip>
```
Your public IP: 15.188.86.160
Your port: 22
Your login: root
Your password: 481454!Dc277CA835
```
- Run this in Putty, or git bash, or Windows Subsystem for Linux (WSL) 
 `ssh root@15.188.86.160`
- Welcome to Ubuntu 16.04.7 LTS (GNU/Linux 4.4.0-1128-aws x86_64)
- `uname` - which operating system ur running - Linux
- `man uname/ls` - to learn more options for a command