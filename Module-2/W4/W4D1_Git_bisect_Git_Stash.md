# Git bisect
- ```git bisect start``` : A new git bisect start will also do that, as it cleans up the old bisection state.
- ```git bisect **bad** && git bisect **good** v2.6.13-rc2 ```
- 
- OR use your own terms by this command ```git bisect start --term-old <term-old> --term-new <term-new>```
  - For example, if you are looking for a commit that introduced a performance regression, you might use
  - ```git bisect start --term-old fast --term-new slow```
  - Or if you are looking for the commit that fixed a bug, you might use
  - ```git bisect start --term-new fixed --term-old broken```
- Once you have specified at least one bad and one good commit, git bisect checkes out a commit in the middle of that range of history uses a binary search algorithm.
- Mark the checked out commit either ```git bisect **bad** || git bisect **good**``` to narrow down the searching.
- When you test and say good/bad to the last commit (when you finish compiling and testing the <i>tree</i>),the reference refs/bisect/bad will be left pointing at first bad commit that made your code crash.
- Finally, ```git bisect reset``` to return your <i>tree</i> to the commit that was checked out before ```git bisect start```.
- Other options, ```git bisect reset HEAD``` leaves you on the current bisection commit || ```git bisect reset bisect/bad ``` will check out the first bad revision.
- Additional commands
  - ``` git bisect visualize``` - To see the currently remaining suspects in gitk [during bisection process], alternative to visualize is - view.
  - ```git bisect skip``` Current version cannot be tested
  - Range notation for skipping in range ```git bisect skip v2.5..v2.6``` , v
  - No commit after v2.5, up to and including v2.6, should be tested. ```(v2.5, v2.6]```
  - If you also want to skip the first commit of the range you would issue the command: ```git bisect skip v2.5 v2.5..v2.6```

Source [YouTube](https://www.youtube.com/watch?v=D7JJnLFOn4A&t=6s)

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
-----
# Dev tools
- Ctrl+Shift+I to open browser dev tools
- ```getEventListeners($0)``` $0 special variable in the console that represents the currently selected element
- 


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
