# PiXeL Intelligence
![](https://img.shields.io/github/tag/PiXel-Intelligence/editor.md.svg) ![](https://img.shields.io/github/release/PiXel-Intelligence/editor.md.svg) ![](https://img.shields.io/github/issues/PiXel-Intelligence/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)

## Command & Toturals

[TOCM]

[TOC]

## App Features
- ##### Introduce
Ask PiXel to introduce itself:
	- introduce yourself
	- etc...
- ##### Search Engine
Search anything on youtube, wikipedia, imdb and anywhere:
	- Search python toturial on youtube
	- Search python on wikipedia
	- Search office on imdb
	- Search your name genre
	- etc...
- ##### Ask Engine
Ask anything about anything:
	- Tell me about Donald Trump
	- who is Jason momoa
	- what is python
	- etc...
- ##### Download Engine:
Download anything from aimeout, youtube and anywhere under the internet:
	- download Lovely from YouTube
	- download Your name from animeout
	- download call of duty word war II
	- etc...
- ##### Play Media Engine
Play media from memory or download it if not found:
	- play Avengers EndGame
	- etc...
- ##### Send Message Engine
Send any text message on telegram:
	- send a message to john on telegram
	- send a message on telegram
	- send a message to john
	- send hello on telegram
	- send a message
	- etc...
- ##### Reminder Engine
Set a reminder for anytime:
	- remind me to do my homeworks
	- set a reminder for 30 minutes later
	- remind me at 10
	- etc...
- ##### Manage reminders
To manage your reminders first say/write manage my reminders than say:
	- show me my reminders list
	- delete my last reminder
	- delete a reminder
	- edit my last reminder
	- edit my reminder
	- etc...
- ##### Translate Engine
Translate any language to persian/english/french/japanese:
	- translate hello world to persian
	- etc...
- ##### Type anything
Type any word on Desktop:
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
Set system volume:
	- set the volume 10% higher
	- adjust volume 20 percent lower
	- etc...
- ##### Keyboard Shortcut
Check AppConfig.json file for more details
	- To Rise Command box, press **ctrl+shift+t**
	- To Start Voice Recognition, press **ctrl+shift+e**
	- To write your saved shortcut, press **ctrl+e+[1,2,3,...,9]**
- ##### Flexibility
Commands are 90% Flexible
Feels free to use these commands As you wish
	- You can say download a media instaed of saying media name
	- or say remind me to do my homework at 10
	- or say remind me to do my homework 10 mins later
	- or say remind me for 10 minutes later
	- or say remind me 10 minutes later
	- and etc...

## AppConfig toturials:
AppConfig Has 5 Sections.

### AppConfig Sections
1. **PATH:** Applications and local files PATH Settings
2. **AnimeOut:** This Setting is for AnimeOut Downloader
3. **web:** This is for Filtering links while searching and downloading
4. **main:** This is for main application setting such as keyboard shortcuts and etc...
5. **movie_suggestion:** This is for Movie suggestion system settings

### PATH
Here you can put your Apps Destination.
**This is necessary to add them to make Assistant work currectly.**
**POT**: Pot player Destination to play media.
**IDM**: Internet Download Manager to put Downloaded links.
**telegram**: Telegram path to send message on telegram.
**whatsApp**: whatsApp path to send message on whatsApp.
**save_to**: Your downloaded files Destination.
**media**: Put your media folder Destinations (one or more) to play your medias

### AnimeOut
- **q_filter**:
Here you can set your anime quality filter.
Can be "720" or "1080" or "720|1080"

### web
**Filters Values support Regular Expression.**
- **search_region**:
Choose Your Browser Region.
Value Can be "IR" or etc...
- **file_type**: 
You can **Filter** which file type you want to download
Value Can be "mkv", "rar", "zip", "mkv|zip" or etc...
- **q_filter**: 
You can **Filter** which Movie quality you want to download.
Value Can be "720" or "1080" or "720|1080"
- **ignore**: 
You can **Filter** which link should be skipped.
Value Can be anything
- **auto_open**: 
Choose Assistant can open reviewed links on browser or not
Value Can be "True" or "False"
- **search_pickRate**: 
Choose how many link fetch at one try:
(Less number less speed but More Safe for your ip)
**Highly Recomended to choose at most 10 links**
Value Can be any number
- **search_limit**: 
Choose how many link can be collected in total:
(Less number less speed but More Safe for your ip)
**Highly Recomended to choose at most 15 links**
Value Can be any number

### main
- **voice**:
	- **toggle**: toggle Assistant Voice on/off
- **speech**:
	- **voice_key**:
		- key shortcut to start Voice Recognition
		- Value Can be like: "ctrl+shift+e"
	- **text_key**: 
		- key shortcut to Rise Command text box
		- Value Can be like: "ctrl+shift+t"
- **keyboard_shortcuts**:
	- **start**:
		- key shortcut to start keyboard checking and Write shortcut
		- Value Can be like: "ctrl+e"
	- **shortcut**:
		- Texts you want to make them shortcut to write faster
		- Value Can be anything you want to write fast
		 **Maximum 9 Shortcut**

**Othe Values should be kepp by default**
### movie_suggestion
- **start_year**:
	- The year you want to search from then
	- Value Can be any year from 1900
- **end_year**:
	- The year you want to search until then
	- Value Can be any year from 1910
- **rating**:
	- Video Rating in imdb
	- Value Can be any number from 3 to 9