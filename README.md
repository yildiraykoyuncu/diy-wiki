# Do-It-Yourself Wiki

A nifty little site that allows you to create, read, and update pages in a markdown wiki.  We've provided most of the code for you. All you need to do is write the code that sits between the server and your file system, reading, writing and updating files saved on your computer.

You coaches will share a link to a live, working version of this wiki so you can know how yours should work when it's finished.

### Index

* [Learning Objectives](#learning-objectives)
* [Getting Started](#getting-started)
    * [Running the API](#running-the-api)
    * [Running the Frontend](#running-the-frontend)
* [Your Task](#your-task)
    * [get an existing page](#get-an-existing-page)
    * [post a new page](#post-a-new-page)
    * [get all page names](#get-all-page-names)
    * [get all tags](#get-all-tags)
    * [get page names by tag](#get-page-names-by-tag)
* [Helpful Links](#helpful-links)
* [Contributors](#contributors)

---

## Learning Objectives


### Programming Skills
* Debugging Node apps in VSC
* Using `npm`: installing dependencies, running scripts
* Understanding what "fullstack" means
* Using branches
* Running the Frontend & Backend separately


### Node.js & Express Skills
* Reading and writing from the File System
* Correctly using Sync & Async file system manipulations
* Writing Express routes with different verbs and URL parameters
* Using Async/Await to write more readable code


### Other People's Code
* Navigating larger directory structures
* Understanding code you didn't write
* Setting up and running other people's projects
* Contributing to existing code bases



### API's
* Explaining why you can't run an API with the browser
* Running API's with Node.js & VSC
* Testing API's with Postman
* Understanding the need for CORS
* URL Request Parameters
* Sending values in the Request Body


### Create-React-App
* Know that it exists
* Be able to install dependencies
* Be able to run the frontend with `npm run start`


[TOP](#do-it-yourself-wiki)

---

## Getting Started

Before you can get started writing your routes you'll want to make sure all dependencies are installed, and to make sure the frontend and backends are operational.

Step 0 is to clone this repo.  Then you can move on to ...

### Running the API


__Installing Dependencies__
1. `npm install`

__Running the API__
1. `npm run dev`
1. Open Postman
1. Explore `localhost:xxxx`!


### Running the Frontend

The frontend works, you don't need to change any code there.  All you need to do is run it! (and study the code a bit if you're feeling ambitious :)

__Installing Dependencies__
1. `npm install`

__Running the Frontend__
1. `npm run start`
1. It will automatically open a new tab in your browser
1. Explore the wiki API from the frontend app!




[TOP](#do-it-yourself-wiki)

---

## Your Task

What you need to do to complete this assignment is write the 5 routes described in the `./wiki-server/server.js' file.  You'll know your work is finished when you can use every button, link, and page in your frontend!

We recommend always keeping the live demo open as you develop to be sure you keep the final product in mind.  You can find the link in a pinned message on your class' Slack channel.

### Get an Existing Page

Calling this route should return a response with a property called `body` containing the text stored inside the file with the name `:slug`

* _method_: GET
* _path_: `"/api/page/:slug"`
* _success response_: `{status: 'ok', body: '<file contents>'}`
* _failure response_: `{status: 'error', message: 'Page does not exist.'}`

### Post a New Page

Calling this route with a `body` property in the body of your HTTP Request, and a file name in the `:slug` URL parameter will add a new markdown file to the `./wiki-server/data` directory

* _method_: POST
* _path_: `"/api/page/:slug"`
* _body_: `{body: '<file content>'}`
* _success response_: `{status: 'ok'}`
* _failure response_: `{status: 'error', message: 'Could not write page.'}`


### Get All Page Names

Calling this route will return a response with a property called `pages` which is an array containing all of the file names in `./wiki-server/data`.

* _method_: GET
* _path_: `"/api/page/all"`
* _success response_: `{status:'ok', pages: ['fileName', 'otherFileName']}`
* _failure response_: (none)


### Get All tags


Calling this route will return a response with a property called `tags` which is an array containing all of the tagged words in all of the files of `./wiki-server/data`. Tagged words are any word in a file with a # in front of it, like so `#tree`.  Or `#table`,

* _method_: GET
* _path_: `"/api/tags/all"`
* _success response_: `{status:'ok', tags: ['tagName', 'otherTagName']}`
* _failure response_: (none)


### Get Page Names by Tag

Calling this route will return a response with a property called `tag` which indicates which tag was used to search, and a property called `pages` which is an array of all the file names containing that tag

* _method_: GET
* _path_: `"/api/tags/:tag"`
* _success response_: `{status:'ok', tag: 'tagName', pages: ['tagName', 'otherTagName']}`
* _failure response_: (none)


[TOP](#do-it-yourself-wiki)

---

## Helpful Links



__Debugging JS Servers In VSC__

* [VSC Debugger (from the docs)](https://code.visualstudio.com/docs/editor/debugging)
* [Debugging Node apps (from the docs)](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
* [Express in VSC (video)](https://www.youtube.com/watch?v=2oFKNL7vYV8)
* [Express in VSC (another video)](https://www.youtube.com/watch?v=yFtU6_UaOtA)

__Node.js Tutorials__

These tutorials will introduce you to a bunch of new features in Node that you haven't seen in the Browser.  While you're following these tutorials, it's important to remember that at it's core Node.js is still JavaScript.  Everything you've learned so far (except for the DOM & `fetch` :) is still true!  The Event Loop, Classes, Closure, Arrays, Objects, Variables, `this.`, it's all still the same.


The tutorials below will introduce to what's new and what's special about Node.  But don't forget to take some time and solve a few of the JavaScript Exercises above to get used to working with plain, vanilla JS in the terminal.

* [Traversy: Node for Absolute Beginners](https://www.youtube.com/watch?v=U8XF6AFGqlc)
* [Traversy: Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)
* [Mosh: Node.js in 1 Hour](https://www.youtube.com/watch?v=TlB_eWDSMt4)



__fs: Synchronous & Async__
* [__promises__: FunFunFunction](https://www.youtube.com/watch?v=2d7s3spWAzo&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
* [__async/await__: FunFunFunction](https://www.youtube.com/watch?v=568g8hxJJp4)
* [__fs__: TechSith video](https://www.youtube.com/watch?v=a6dRdtOy4Bg)
* [__fs__: Net Ninja video](https://www.youtube.com/watch?v=U57kU311-nE)
* [__fs, async vs. sync__: Eduonix](https://www.youtube.com/watch?v=vctMo1fDwV4)
* [__fs, async vs. sync__: Kharbanda](https://www.youtube.com/watch?v=dgdcXGxh93s)


__API's and Express__

Node.js is a JavaScript runtime environment capable of writing Web Servers and API's all by itself.  But it's a bit annoying.  Express is a great and easy to use framework to help you write API's and Web Servers by handling all of the boring stuff for you so you can focus on what your app does.

> [Postman](https://duckduckgo.com/?q=postman+tutorials&t=brave&iax=videos&ia=videos) - an app for testing your API's without using a browser.

> [JSON Server](https://github.com/typicode/json-server) - An NPM module that starts a RESTful API without you having to write a single line of code.  This can be helpful practice for getting the hang of API's and Postman without getting tripped up by bugs and errors in code you write.


* [FCC: Node.js & Express](https://www.youtube.com/watch?v=G8uL0lFFoN0)


[TOP](#do-it-yourself-wiki)

---

## Contributors


[TOP](#do-it-yourself-wiki)

___
___
### <a href="https://hackyourfuture.be" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg" width="100" height="100"></a>
