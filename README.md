# Welcome to PiXeL Intelligence

A small smart Assistant. Anytime, Everywhere :)<br>

Thank you for reading this toturial.<br>
if you have any problem of using app [Email Me](mailto:amirhosseinfr79@gmail.com)<br><br>
**(this version of program is under development and made for beta testers)**<br>

## Command & Tutorials
- [Requirements](#requirements)
- [App Features](#app-features)
	- [Introduce](#introduce)
	- [Joke Engine](#joke-engine)
	- [Search Engine](#search-engine)
	- [Get IP Engine](#get-ip-engine)
	- [Ask Engine](#ask-engine)
	- [Download Engine:](#download-engine)
	- [Play Media Engine](#play-media-engine)
	- [Send Message Engine](#send-message-engine)
	- [Reminder Engine](#reminder-engine)
	- [Manage reminders](#manage-reminders)
	- [Favorite system](#favorite-system)
	- [Movie Suggestion system](#movie-suggestion-system)
	- [Translate Engine](#translate-engine)
	- [Type anything](#type-anything)
	- [App Control](#app-control)
	- [Volume Control](#volume-control)
	- [Keyboard Shortcut](#keyboard-shortcut)
	- [Flexibility](#flexibility)
- [Remote Control over Http](#remote-control-over-http)
	- [Features](#features)
- [AppConfig toturials](#appconfig-toturials)
	* [AppConfig Sections](#appconfig-sections)
	* [PATH](#path)
	* [AnimeOut](#animeout)
	* [web](#web)
	* [main](#main)
	* [movie_suggestion](#movie-suggestion)

## Requirements
- Chrome Browser
- Internet Download Manager
- Pot Player
- Telegram Desktop
- whatsApp Desktop

App can run without above requirements but for some actions like open links and playing medias needs above applications.

### System Specs
- a Windows computer that can run telegram and chrome :D

## App Features
- ##### Introduce
	- Ask PiXel to introduce itself:
		- introduce yourself
		- etc...
- ##### Joke Engine
	- Ask Assistant to tell you a Joke:
		- tell me a joke
- ##### Search Engine
	- Search anything on youtube, wikipedia, imdb and anywhere:
		- Search python toturial on youtube
		- Search python on wikipedia
		- Search office on imdb
		- Search your name genre
		- etc...
- ##### Get IP Engine
	- Get your IP any time:
		- what is my ip address
		- whats my ip
		- etc...
- ##### Ask Engine
	- Ask anything about anything:
		- Tell me about Donald Trump
		- who is Jason momoa
		- what is python
		- etc...
- ##### Download Engine
	- Download anything from aimeout, youtube and anywhere under the internet:
		- download Lovely from YouTube
		- download Your name from animeout
		- download call of duty word war II
		- download a random action movie
		- download random action comedy movie
		- etc...
- ##### Play Media Engine
	- Play media from memory or download it if not found:
		- play Avengers EndGame
		- etc...
- ##### Send Message Engine
	- Send any text message on telegram and whatsApp Desktop:
		- send a message to john on telegram
		- send a message on telegram
		- send a message to john
		- send hello on telegram
		- send a message
		- etc...
- ##### Reminder Engine
	- Set a reminder for anytime:
		- remind me to do my homeworks
		- set a reminder for 30 minutes later
		- remind me at 10
		- etc...
- ##### Manage reminders
	- To manage your reminders first say/write manage my reminders than say:
		- show me my reminders list
		- delete my last reminder
		- delete a reminder
		- edit my last reminder
		- edit my reminder
		- etc...
	- Or to get reminder full list say whats on my reminders

- ##### Favorite system
	- You can teach bot your favorites:
		- learn that my favorite food is pizza
		- add pizza to my favorite foods
		- my favorite food is pizza
		- delete pizza frm my favorite foods
		- whats my favorite food
		- tell me about my favorite food
		- etc...
- ##### Movie Suggestion system
	- You Can get any movie Suggestion:
		- suggest me action comedy movie
		- recommend me an action movie
		- suggest me action or comdy movie
		- suggest me action and comedy movie
		- recommend me a dram movie
		- suggest me a movie
		- etc...
- ##### Translate Engine
	- Translate any language to persian/english/french/japanese:
		- translate hello world to persian
		- etc...
- ##### Type anything
	- Type any word on Desktop:
		- writedown hello my friend
		- type hello world
		- etc...
- ##### App Control
	- Open an App
		- open telegram
	- Close current opened app:
		- close current app
		- close this app
		- etc...
- ##### Volume Control
	- Set system volume:
		- set the volume 10% higher
		- adjust volume 20 percent lower
		- etc...
- ##### Keyboard Shortcut
	- Check AppConfig.json file for more details
		- To Rise Command box, press **ctrl+shift+t**
		- To Start Voice Recognition, press **ctrl+shift+e**
		- To write your saved shortcut, press **ctrl+e+[1,2,3,...,9]**
- ##### Flexibility
	- Commands are 90% Flexible
	- Feels free to use these commands As you wish
	- You can say download/play a media instaed of saying media name
	- More Examples:
		- remind me to do my homework at 10
		- remind me to do my homework 10 mins later
		- remind me for 10 minutes later
		- remind me 10 minutes later
		- and etc for every commands...

## Remote Control over Http
You can Controll your PC & Assistant on your web browser!<br>
Just type your ipv4 Address (192.168.1.* - your local ip address) on your browser to control your assistant anywhere!<br>
**if you want to use this feature from your phone, you need to unblock port 5050 on your firewall**
### Features
- Controll PC and share Screen
	- View your PC Screen
	- Controll mouse & Keyboard
	- Share files from phone to your computer<br>

- Access PiXeL Intelligence from web
	- Send your commands over the http

## AppConfig toturials
AppConfig Has 6 Sections.

### AppConfig Sections
1. **user_name:** Your username in app settings
2. **PATH:** Applications and local files PATH Settings
3. **AnimeOut:** This Setting is for AnimeOut Downloader
4. **web:** This is for Filtering links while searching and downloading
5. **main:** This is for main application setting such as keyboard shortcuts and etc...
6. **movie_suggestion:** This is for Movie suggestion system settings

### PATH
Here you can put your Apps Destination.<br>
**This is necessary to add them to make Assistant work correctly.**<br>
**You can Add these PATHs easly in Application First Start.**<br><br>
**POT**: Pot player Destination to play media.<br>
**IDM**: Internet Download Manager to put Downloaded links.<br>
**telegram**: Telegram path to send message on telegram.<br>
**whatsApp**: whatsApp path to send message on whatsApp.<br>
**save_to**: Your downloaded files Destination.<br>
**media**: Put your media folder Destinations (one or more) to play your medias

### AnimeOut
**Filter Values support Regular Expression.**<br>
- **q_filter**:<br>
Here you can set your anime quality filter.<br>
Can be "720" or "1080" or "720|1080"<br>

### web
**Filter Values support Regular Expression.**<br>
- **search_region**:<br>
Choose Your Browser Region.<br>
Value Can be "IR" or etc...<br>
- **file_type**: <br>
You can **Filter** which file type you want to download<br>
Value Can be "mkv", "rar", "zip", "mkv|zip" or etc...<br>
- **q_filter**: <br>
You can **Filter** which Movie quality you want to download.<br>
Value Can be "720" or "1080" or "720|1080"<br>
- **ignore**: <br>
You can **Filter** which link should be skipped.<br>
Value Can be anything<br>
- **auto_open**: <br>
Choose Assistant can open reviewed links on browser or not<br>
Value Can be "True" or "False"<br>
- **smart_rename**: <br>
Choose Assistant can rename links in download manager or not<br>
Value Can be "True" or "False"<br>
- **search_pickRate**: <br>
Choose how many link fetch at one try:<br>
(Less number less speed but More Safe for your ip)<br>
**Highly Recomended to choose at most 10 links**<br>
Value Can be any number<br>
- **search_limit**: <br>
Choose how many link can be collected in total:<br>
(Less number less speed but More Safe for your ip)<br>
**Highly Recomended to choose at most 15 links**<br>
Value Can be any number<br>

### main
- **starting_sound**:
	- Toggle App Play a song while starting<br>
	- Value Can be True or False<br>
- **voice**:<br>
	- **toggle**: toggle Assistant Voice on/off<br>
- **speech**:<br>
	- **voice_key**:<br>
		- key shortcut to start Voice Recognition<br>
		- Value Can be like: "ctrl+shift+e"<br>
	- **text_key**: <br>
		- key shortcut to Rise Command text box<br>
		- Value Can be like: "ctrl+shift+t"<br>
- **keyboard_shortcuts**:<br>
	- **start**:<br>
		- key shortcut to start keyboard checking and Write shortcut<br>
		- Value Can be like: "ctrl+e"<br>
	- **shortcut**:<br>
		- Texts you want to make them shortcut to write faster<br>
		- Value Can be anything you want to write fast<br>
		 **Maximum 9 Shortcut**<br>

- **telegram_send_key**:
	- Set your telegram send hotKey<br>
	- Value can be like "ctrl+enter" or "enter"<br>
- **whatsApp_send_key**: "enter"<br>
	- Set your whatsApp send hotKey<br>
	- Value can be like "ctrl+enter" or "enter"<br>

	**Othe Values should not be changed**<br>
### movie_suggestion
- **start_year**:<br>
	- The year you want to search from then<br>
	- Value Can be any year from 1900<br>
- **end_year**:<br>
	- The year you want to search until then<br>
	- Value Can be any year from 1910<br>
- **rating**:<br>
	- Video Rating in imdb<br>
	- Value Can be any number from 3 to 9<br>

### remote
- **username**:<br>
	- Usernam is required to enter remote server<br>
	- Value Can be any string text<br>
- **password**:<br>
	- Password is required to enter remote server<br>
	- Value Can be any string text<br>
- **superuser**:<br>
	- This is a backup password to enter remote without username and password<br>
	- Value Can be any string text<br>
