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
create a new repository on the command line
```
echo "# My repo name > VoteFlowApplication" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Yordinia/VoteFlowApplication.git
git push -u origin main
```
```
…or push an existing repository from the command line
git remote add origin https://github.com/Yordinia/VoteFlowApplication.git
git branch -M main
git push -u origin main
```

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

- createTextNode - create eleent 
const headerContent = document.createTextNode(
        'Develop. Preview. Ship. 🚀',
    );
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
- to delete directory module folder `rm -rf node_modules`

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
## AI to learn technical
- 
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

# python

- python pip install - `python -m ensurepip`
- creating symbolic link
     - mklink pip.exe pip3.11.exe   > not on windows
on windows
Open a text editor such as Notepad.
Create a new file and paste the following content:
     - 
     
## pythonanywhere run forever

- to start virtual env / activate your virtual environment
    -  `mkvirtualenv --python=/usr/bin/python3.1 myenv`
    - `source /path/to/myenv/bin/activate`
    - `workon myenv`
- to generate requirements.txt file `pip freeze > requirements.txt` // need to be in enviroment(workon), and install all dependencies
- to install requiremtns.txt file  `pip install -r requirements.txt`
- install dependencies for telebot > `pip install pyTelegramBotAPI`
- to run your py file 24/7 (nohup)> `nohup python main.py &`
use  `ps kill` to stop it if u want
- to connect github with pythonanywhere
open 
- generate ssh key `ssh-keygen`
- 

# Web frameworks
<details>
<summary> Flask </summary>

- create your virtual environment
windows:
    `py -m pip install --user virtualenv`
    `py -m venv env`
mac:
    `python3 -m pip install --user virtualenv`
    `python3 -m venv env`
- activate it
windows `myvenv\Scripts\activate`
mac `source myvenv/bin/activate`

-using a different package mirror (other than PyPI package repository)
`py -m pip install --user virtualenv --index-url=https://pypi.org/simple/`

- upgrading PIP
`py -m pip install --user --upgrade pip`

``
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
    - Install Cordova globally in C://: `npm install -g cordova`
    - Create a new Cordova project: `cordova create MyApp`
    - Move your web app files into the newly created project's www folder.
    - Add the platform you want to build for, e.g., Android: `cordova platform add android`
    - Build the Cordova project: `cordova build android` >install JDK, Gradle and add them to path



## Expo go
npm install --global eas-cli && \
npx create-expo-app rockpaperscissors && \
cd rockpaperscissors && \
eas init --id 7778a533-68a9-4014-bd79-56b225b211bf

link existing project to expo online
npm install --global eas-cli && \
eas init --id 7778a533-68a9-4014-bd79-56b225b211bf

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

# React my portfolio
- to install react using vite
`npm create vite@latest ./ -- --template react`
- to install tailwind
`npm install -D tailwindcss`
`npx tailwindcss init`
- to install awesome awesome packages for react, 3D things 
-  @react-three/fiber > impo > React based 3JS library
- react-tile > a cool hovering animation
- react-vertical-timeline-component > for versical experience like linkedin
- react-router-dom > for routing
- @emailjs/broswer > for emailing functionality 
`npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/broswer framer-motion react-router-dom`

### chatGPT website
installing reduxjs
`npm install @reduxjs/toolkit`
+ src/assets 
+ Vs code extention > es7 + react
+ src/app.css > copy gist
> npm insall tailwind css with Vite command postcss autoprefixer indccc
+ tailwid.config.js > from docum
   in there - fontFamily: {
    satoshi: ["Satoshi", "sans-serif"],
    inter: ["Inter", "sans-serif"],}
index.html <import satoshi and inter google fonts>
- import index.css | main.jsx
> `npm run dev`
change title OpenAI Article Summarizer
favicon <link rel="icon" typ .. href="favicon.io">
components
> demo.jsx
    rafec (react arror function export conmonent)||| enter
> hero.jsx
    rafec
app.jsx
import components
import Demo from './components/Demo'
import Hero from './components/Hero'
import './App.css'
inside our App.jsk, return (
<main>
<div className="main">
    <div className="gradient" />
</div>

<div className="app">
    <Hero /> - - using components in react
    <Demo />
</div>

</div>
</main>
)

hero.jsx
import {logo} from '../assets';

return (
    <header className="w-full flex justify-center
    items-center flex-col">
     <nav className="flex justify-between items-center flex-col"> 
        <img src={logo} alt="sumz_logo" className="w-28 object-contain"/>
        <button
         type="button"
         onClick=
        >
     </nav>
    </header>

)

# React Native
- insatll expo-cli `npm install -g expo-cli`
- start  `npx create-expo-app AwesomeProject` `npx expo start`
- xCode for IOS
run app on visual studio
`emulator -avd avd_name`
`npx react-native run-android`
use actual phone,
plug cable, turn on usb debugging, if issue with server
`adb -s <device name> reverse tcp:8081 tcp:8081` find device name `adb devices`

freecodecamp react native
npm install eslint --save-dev
npx eslint --init
npm install @react-native-community/eslint-config --save-dev

# Linux
<details>
<summary> Decoding </summary>

- decoding 64 base
- echo "Ik5ldmVyIHRydXN0IGEgY29tcHV0ZXIgeW91IGNhbid0IHRocm93IG91dCBhIHdpbmRvdyIgLSBTdGV2ZSBXb3puaWFr" | base64 -d

</details>

## bernard hackwel
- create a website in php // home
php -S 127.0.0.1
php -S 127.0.0.1:8085

- create a website in pyton
python -m http.server

- using npm 
npx http-server -p 8086

- using apachi
`systemctl start apache2` >mycredentials password
if error bc port 80 is already used
changing port apache
`sudo nano /etc/apache2/ports.conf`
~ Listen 8080 - `systemctl start apache2`

### nano
- nono index.html 
create file
- ctrl+x > y > enter - to save file in nano

# CURL
test / browse website `curl localhost:7600`
to save site into a file
- curl -o coolwebsite localhost:8080
get website info - headers, content-length, content-type, server
curl -I localhost:8080
to view headers with verbose
- curl -v localhost: 8080
    - header symbol request VS response headers > VS <
to download the code of the first page we're receiving
- `wget localhost:7600`

<details>
<summary> CURL  </summary>

- 
</details>

- updating npm
`npm install -g npm@latest`
-  clearing npm cache
`npm cache clean --force`

## install things on linux
- sudo apt update
- sudo apt install nmap
- to see if something is installed `apt list --installed | grep ^nmap`
- to remove/with out removing user data   `sudo apt remove pigion`
- to remove absolutely   `sudo apt purge pigion`
- to update & upgrade `sudo apt update && sudo apt full-upgrade` || `sudo apt update && sudo apt upgrade`
- to use other and check if packege is installed `dpkg  -l | grep nmap`
- using aptitude   `sudo aptitude`
- use install and use sanp `apt install snapd` - `sudo snap install [package-name]` 
- `--classic code`vs code packega name
- using pip (for python) after cloning files / packages
(installing dependencis all at once)
`pip3 install -r requirements.txt` 
- installing telebot `pip install pyTelegramBotAPI` 
- using gem (for ruby and rails, called rubygems)

- ruby is a programmig lanlguage

<details>
<summary> commands to know more info on os  </summary>
- to see what terminal/ shell we're using `ps` pwsh for powershell, bash for born again shell

- `man uname/ ip / ls`
- `apropos usb` > keyword search related to usb / get help
- `apropos compress` > commands for file compression

</details>

### file system
creating files
- touch file.txt || cat > file.txt something something [enter]
for creating bash scripts in a  file using eng of file EOF (multi line)
- `cat <<EOF > file.txt`
using echo
- `echo 'hello' > stuff.txt`
creating directories
- `mkdir hello all these are directories`
moving move files / directories into a directory
- `mv file.txt ./hello`
- `mv file.txt all these ./hello` multiple files and folders
- `mv file.txt ./hello/renameandmovefile.txt` rename move
see through
- `ls hello`
copy stuff
- `cp file.txt ./folder`
backup file
- `cp file.txt file.txt.bak`
creating directories with chains of children directories
- `mdkir -p directory/anotherdir/child/p/for/parent`
- to see tree gui like directories  `tree`
- use r to copy folder contents alse 
`cp -r folder ./direc`
- to remove `rm / rmdir file file.txt ./folder`
- to remove directory and all its conrents `rm -r folder`
to extremely delete everything
- `sudo rm -rf --no-preserve-root /`

### holberton
requirements
- access a distant server using ssh
- learn the very basics of the Linux command line
- install a software on Linux
- use the Emacs text editor
- install a web server on Linux
- read a configuration file
- use HTML, CSS and javascript to build a website
- and most importantly: search for information and help each other

## task manager in linux
get task id / process-id
- `ps -u htb-acl5612[ID] | grep firefox` || `pgrep filefox`
get tast without pgrep or user id
- `ps -aux | grep firefox`
- to kill tasks `kill [process-id] `

- ping hundred times `ping -c 100 networkchuck.com`
^ foreground
- sleep terminal for 30 second `sleep 30`
- `jobs` to see sleeping tasks
- ctrl Z - to sleep process
- `bg 1` > to restart into background `fg 1` to put him into  foreground
- to ping in background `PING hackthebox.eu &`
- `ps ax` to see stopped
### kill signals `kill -l`
- sigkill -9 `kill -9 21374` 21374 found from ps
- SIGTERM = 15 = Default kill (optional kill)
- SIGINT = 2 = ctrl + C = interrupt
- SIGSTOP = 19 = ctrl + Z = sleep
- SIGCONT = 18 = ctrl + Z AGAIN ctrl + Z = restart
- kill all processes / pings `pkill -9 ping`
### start stop enable services (background processes) like ssh,ntp (network time protocol), webservers
- first see all processes `ps -aux` 
- more specific `ps -aux | grep sublime`
- control daemons **with service manager, has initialization system, forks other processes** 
   > systemd stop `sudo  systemctl stop sshd`, start `sudo  systemctl start sshd `
   > can use `restart` , `reload` , `reload-or-restart`
   > check if sys is dead `sudo  systemctl status sshd`
- control daemons during boot
    > dont start when system starts `sudo systemctl disable ntp`
    > make sure it starts when system starts `sudo systemctl enable ntp`
    >  `is-active`, `is-enabled`
- see all daemons / services running
    > `sudo systemctl list-units`
    > `sudo systemctl list-units -t service`
- to find daemons that are not running
    > `sudo systemctl list-units --all | grep nginx` //lists those that are loaded into memory
    > `sudo systemctl list-unit-files --all | grep nginx`
- to start nginx for example > restart journal first
- 

# python
- value_if_true if condition else value_if_false `x = 'A' if x is not null else 'B'`

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


- installing packeges / applications on linux
- sudo apt update
- sudo apt install pidgin

go through list
and check if a particular packege is there
- apt list --installed | grep ^nmap
^anything that starts with
show
- sudo apt show nmap
search
- sudo apt search nmap
to save remove
- sudo apt remove pidgin
to purge
- sudo apt purge pidgin
&&
- sudo apt purge pidgin-data
to update
- sudo apt update && sudo apt upgrade
to save upgrade (remove unnecesary files during)
- sudo apt update && sudo apt full-upgrade
``````````````````^``````````````````
- use git to hack and clone things
git clone URL
if its python project, install requirements using
- pip3 install -r requirements.txt 
- python filename.py -h
-h for help. or
- python filename.py -d hack
- 

## sql injection
SELECT * FROM users WHERE username = 'admin' AND password='password123'
- to trick login to be true in sql by OR '2'='2'
`SELECT * FROM users WHERE username = 'admin OR '1'='1'' AND password='password123'`
- to trick using sql comments -- 
`SELECT * FROM users WHERE username = 'admin'-- 'AND password='password123'`
- altoroMutual.com > hack into

## google search operatiors
- search from specific website
- frechpress site:starbucks.com
- search as admin
- site:starbucks.com inurl:admin
- find anything in body and return any page that has that
- site:starbucks.com intext:admin
- search login pages
- site:starbucks.com intitle:login
- types of files / with file type
- site:starbucks.com filetype:pdf

###### google hacking database
- intitle:"WEBCAM 7" -iurl:/admin.html
- filetype:env "DB_PASSWORD"
- "authentication failure; loginame=" filetype.log
- filetype:reg reg HKEY_CURRENT_USER username


## WSL
to enable Windows Subsystem for Linux or Virtual Machine
check
hyper
and Windows Subsystem for Linux"
are checked in windows features on/off
```
C:\Windows\System32\dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

C:\Windows\System32\dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
then restart computer are
```
wsl --set-default-version 2
wsl --list --online or wsl -l -o
wsl --install -d <Distribution Name>.
```
## docker
to start 
`
net stop com.docker.service
net start com.docker.service
`
to restart docker
docker system prune -a
restart

## windows 11
inside windows setup..asking licence key..
>> SHIFT + F10
>> regedit
go to.. ..
>> Compute\HKEY_Local_MACHINE\SYSTEM\SETUP\LABCONFIG
Changes on this computer
go to 
Computer\HKEY_LOCAL_MACHINE\SYSTEM\Setup
add new key 
>> LabConfig
New DWORD 32 bit 
>> BypassTPMCheck
New DWORD 32 bit 
>> BypassSecureBootCheck



to run widows 11 in sources, 
>> setupprep.exe /product server
FIX PC
4. Check System Files:
Open Command Prompt as an administrator.
Run the following command:
bash
Copy code
sfc /scannow
Allow the process to complete and fix any detected issues.


# Changed on this computer
regedit 
Computer\HKEY_LOCAL_MACHINE\SYSTEM\Setup

added  New Dword 32 key with title >
>> AllowUpgradesWithUnsupportedTPMOrCPU 
and value 1

# Next.js
`npx create-next-app@latest`
typescript - yes,eslint - yes, tailwind - yes, src/ - no , approuter - yes
 install packages
 `npm install --save-exact --save-dev typescript`
  for next project `npm install react react-dom next`
<details>
<summary> Todo list nextjs </summary>

`npm i prisma --save-dev`
`npx prisma init --datasource-provider sqlite`
adding schema in prisma in schema.prisma
model Todo {
    id String @id @default(uuid())
    title String
    complete Boolean
    createAt DateTime @default(now())
    updatedAt DateTime @updateAt
}
migrate schema
`npx prisma migrate dev --name init`
create our database
db.ts in src
`import { PrismaClient } from "@prisma/client"`

call server calls
`const todoes = await prisma.todo.findMany()`
`<uul>`

</details>
<details>
<summary> JS Mastery </summary>
react renders user interface on the client side,
next js - client side or server side

- client side VS server side (req response) : according to SEO 
- client side (browser rendering) >  User requests > server sends files > browser renders it
- server side (server rendering) > renderring the page on the server before transferring it to the user's device    
> rendering is easier (next js)
> serverless apis without managing servers (next js)
> create api endpoints by files

create next app `npx create-next-app@latest ./`
achieve file based routing
+ posts/page.js + rafce
+ another folder posts/new/page.js

dynamic routing
. posts/blog-post-1
. posts/blog-post-2
. posts/blog-post-3
+ posts/[postId]/page.js

loading.js
const Loading = () => {
    // add UI inside loading, including skeleton
    return <LoadingSkeleton />
}

handling error next js
error.js (must be client component) new/error.js
```
'use client';
import {useEffect} from 'react';
const Error = ({error, reset}) => {
useEffect(() => {
    console.error(error);
}, {error});
return (
    <div>
     <h2>Something went wrong!</h2>
     <button
       onClick={
         () => reset()
       }
     >
     Try again
     </button>
    </div>
)
} 
export default Error;
```
## SSR - service side rendering
eg
```
async function Page ({params}){
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts/${params.id}',
        {cache: 'no-store'}
    ); 
    >> next js omits the cache to make it static by default
    >> don't store it, refetch it every single time
    {next: {reevalidate: 10}} // data iscashed afer 10 secs
}
```
create api using next js
+ api/users/route.js
(Next.js HTTP methods)
in route.js
```
> GET
export async function GET(request){
    return new Response('Hello, Next.js!')
}
> POST
export async function POST(request){
    return new Response('Hello, Next.js!')
}
> PUT
> PATCH
> DELETE
> HEAD
> OPTIONS
GET IN example
export async function GET (request){
    const users = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Jane'},
        {id: 3, name: 'Bob'}
    ];
    return new Reasponse(JSON.stringify(users))
}
```
</details>
