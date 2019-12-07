Make repo if not:
- Create repo via github interface
- Clone it locally, for example `git clone git@github.com:yourname/yourrepo.git`
- Make some file `echo "" >> readme.md`
- Add to git `git add .`
- Make first commit `git commit -m init`

Add web-basic:
- Add web-basic as remote `git remote add web-basic git@github.com:enovikov11/web-basic.git`

To update:
- Fetch it data `git fetch web-basic`
- Rebase your repo `git rebase -i web-basic/master`
- Solve conflicts

First setup:
- `npm init` with start task `nodemon server`
- `npm i express nodemon sqlite`

Usage:
- `npm i`
- `npm start`