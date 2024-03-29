# Gitflow
- Git-flow toolset is an actual command line tool that has installation process
- Start it up with ```git flow init```
- Uses TWO branches to record the history of the project. main || develp

# To set up gitflow
first pull we're upto date
- git pull origin master
- git checkout -b dev (develop or name of repository)
## Git flow components
- feature 
    - Without the git-flow extensions:
    ```git checkout develop && git checkout -b feature_branch```
    - When using the git-flow extension:
    ```git flow feature start feature_branch```
- Finishing a feature branch
    - merge the feature_branch into develop.
    - Without the git-flow extensions:
```git checkout develop && git merge feature_branch```
    - Using the git-flow extensions:
```git flow feature finish feature_branch```
- Main work resides at Dev (latest version of your code, preferrably code that passed the tests)
- Dev is _ pretty much upto date with master
- Release - you fork a release branch off of develop
    - Without the git-flow extensions:
    ```git checkout develop && git checkout -b release/0.1.0```
    - when using the git-flow extensions:
   ``` $ git flow release start 0.1.0``` 
   Switched to a new branch 'release/0.1.0'
- We merge and delete release branches into dev and main after.
- If your organization stresses code review, this would be an ideal place for a pull request.
- Hotfix - based on main
- As soon as the fix is complete, it should be merged into both main and develop (or the current release branch), and main should be tagged with an updated version number.
    - Without the git-flow extensions:
    ```git checkout main && git checkout -b hotfix_branch```
    - When using the git-flow extensions: 
    ```$ git flow hotfix start hotfix_branch```
- finishin hotfix
    - Without the git-flow extensions:
```
git checkout main
git merge hotfix_branch
git checkout develop
git merge hotfix_branch
git branch -D hotfix_branch
```
-  with git-flow
```$ git flow hotfix finish hotfix_branch```
