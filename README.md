#	Node.js & Git 教學
##	Node.js
[參考投影片](http://goo.gl/qXc4k4)

###	什麼是 Node.js?
*	高效能、易擴充的網站應用程式開發框架
*	使用 V8 Javascript Engine
*	Node.js 可以說是 Javascript 的後端語言
*	Non-Blocking
*	Event-Driven
*	High Concurrency

###	Node.js 安裝
安裝方式有兩種：	
	
*	[直接下載安裝	](http://goo.gl/oPPdY1)
*	[透過 nvm 安裝](http://goo.gl/d6Jfg8)

###	NPM
*	管理 Node.js 套件的工具(安裝與管理)
*	從 0.6.3 版後內建於 Node.js
*	npm install module_name - 安裝指定模組
*	npm install -g module_name - 安裝指定模組於系統目錄
*	npm update module_name - 更新套件 
*	JSON
*	package.json
*	npm init
*	npm start

###	模組
*	C++ 原生模組、Javascript 原生模組、外部引用模組
*	require
*	exports / module.exports

###	Node.js 執行
*	node jsFilename.js

###	Basic Example
*	模組引用
*	Synchronization & Asynchronization
*	HTTP Server

###	Express
[Express](http://expressjs.com/)

*	快速，靈活度高，輕量化的 Web framework
*	npm install express
*	npm install express-generator -g
*	express myapp
*	set DEBUG=myapp & node .\bin\www
*	npm start
*	middleware

###	好用模組
*	[node inspector](https://github.com/node-inspector/node-inspector) - Node debugger
*	[Async.js](https://github.com/caolan/async) - A better way to write async program
*	[mocha](https://github.com/mochajs/mocha) - Node test framework
*	[PM2](https://github.com/Unitech/pm2) -  Node process manager
*	[passport](https://github.com/jaredhanson/passport) - Simple, unobtrusive authentication for Node.js

###	其他學習資源
*	[NodeSchool](http://nodeschool.io/)
*	[Node.js api](http://nodejs.org/api/)
*	[Express 4.x 使用 HTTPS/SSL](http://jade.logdown.com/posts/233332-nodejs-express-4x-using-https-ssl)
*	[學好 Node.js 不可不知的事](http://www.slideshare.net/BenLue/nodejs-38545130)

##	Git
###	什麼是 Git?
*	Git是一個分佈式版本管理系統，是為了更好地管理Linux內核開發而創立的。
*	Git可以在任何時間點，把文檔的狀態作為更新記錄保存起來。因此可以把編輯過的文檔復原到以前的狀態，也可以顯示編輯前後的內容差異。
*	而且，編輯舊文件後，試圖覆蓋較新的文件的時候（即上傳文件到服務器時），系統會發出警告，因此可以避免在無意中覆蓋了他人的編輯內容。

###	基本 Git 操作
[參考連結1](http://ihower.tw/git/remote.html)

[參考連結2](http://gogojimmy.net/2012/01/21/how-to-use-git-2-basic-usage-and-worflow/)

*	git init
*	git clone [remote repository url]	
*	git branch -a
*	git branch
*	git checkout [branchname]
*	git remote add origin [remote repository url]
*	git pull
*	git push / git push -u origin master  //永遠先拉再推
*	git merge [source branch]	
*	git diff [branch1] [branch2]
*	git log
*	git reset --hard [HEAD hash]
*	git checkout -- [filename]
*	git commit --amend



