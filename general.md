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
- the fetch and push origin links ```git remote -v ```

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

### POST, GET, PUT
<details>
<summary> POST </summary>

- 
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


# other
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