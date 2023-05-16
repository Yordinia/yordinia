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