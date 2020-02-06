# Assassins



## Getting Started

requires:
- Node.js version 8.0 and above
```bash
$ brew install node
```
- mysql
```bash
$ brew install mysql
```
- yarn
```bash
$ brew install yarn
```
- Java
```bash
$ brew cask install java
```
- nodemon
```bash
$ yarn global add nodemon
or
$ npm install nodemon -g
```
___

## Install Dependencies

### yarn is required (npm will not work)
Clone repo

#### install dependencies from package.json with yarn


```bash
$ cd Assassin
$ yarn install
```

## Running the App

Make sure android phone is plugged in to computer and both devices are using same wifi

Phone must be in development mode with debuggin on
___
 Instantiate the localConfig.js File
 ```bash
$ ./configStartUp.sh
 ```

 Start mysql server

 ```bash
 $ mysql.server start
 ```

 Starting server

```bash
$ cd Server
$ nodemon server.js
```
Should see text pop up:

```bash
[nodemon] 1.14.12
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
1. connecting to db:
The server is working on Port 3001
```

In seperate terminal window in root Assassin directory start the application

```bash
$ yarn android
```




This amazing game will take you back to your youth. Back in junior high when a group of friends wanted to play "Assassins" here is what we were working with: a live-action game in which players try to eliminate one another using mock weapons, in an effort to become the last surviving player... each time you killed your target, you recieved your oponents target, so on and so on. Gameplay occurs at all hours and in all places unless otherwise disallowed by the rules. Since an elimination attempt could occur at any time, successful players are obliged to develop a degree of watchful paranoia. 

We revamped it with the help of android technology to have friends sign into a "debrief room" for thier mission. Each member is then given a target in which to "assassinate". When the timer starts counting down to "enter the game", you have 2 minutes to RUN. Once the game begins, as a player you will see a compass pointing in your anonomous targets direction(our app works off of geo-location). You must reach a radius of 20 meters in order for your "KILL BUTTON" to appear. If you kill your target, you will be assigned their target until only one player remains. 

Good Luck. There is no safety, even at the grocery store or in the comfort of your living room. You are being hunted. 

## Table of Contents
1. [Technologies](#Technologies)
2. [Team Members](#Team)
3. [File-Structure](#File-Structure)
4. [Git Structure](#Git)
5. [Schedule](#Schedule)
6. [Misc](#Misc)

## <a name="Technologies"></a>Technologies
- Node
- Express
- Mysql
- React
- React-Native
- React-native-simple-compass
- React-navigation
- Redux
- jsonwebtoken
- Babel
- Yarn
- Heroku
- Trello
- Slack

## <a name="File-Structure"></a>File-Structure
 well… here there be dragons… (in a Scottish brogue)

## <a name="Team"></a>Team Members
 - <p>Quinn Bruderer   --  Project Manager / frontend</p>
 - <p>Tim Kornish      -- Assistant Project Manager / lead backend engineer</p>
 - <p>Cian Hohman      --  Assistant Project Manager / security specialist</p>
 - <p>Kelsey Iverson   --  Full Stack bug sqasher / timer/navigation</p>
 - <p>Lauren Grinder   --  Full Stack</p>
 - <p>Shannon Dooling  --  Front end</p>
 - <p>Mike Koosman     --  Front end</p>
 - <p>Brenda Nichisch  --  Full Stack / copy expert</p>
 - <p>Thomas Elrod     --  Compass / lead android developer</p>

## <a name="Git"></a>Git Structure
Worked on personal branches
Requested code reviews with pull request
Merged to master by secondary code reviewer

## <a name="Schedule"></a>Schedule

### Deadline: 3 week Agile Sprint

## <a name="Misc"></a>Miscellaneous
Here be more dragons… will update later :)
