# [Tools for combining Strange Eons and Octgn](https://community.fantasyflightgames.com/topic/255655-tools-for-combining-strange-eons-and-octgn/)

## 1 [Flrbb on August 5, 2017](https://community.fantasyflightgames.com/topic/255655-tools-for-combining-strange-eons-and-octgn/?do=findComment&comment=2914339)

I am new to Octgn. I want to use it to test my custom missions instead of printing modified cards each time. That is why I wonder weather there is some kind of skript/tool to automaticallly generate/update the needed set files for Octgn out of the data from Strange Eons?

Thanks in advance,

Flrbb

## 2 [Seastan on August 6, 2017](https://community.fantasyflightgames.com/topic/255655-tools-for-combining-strange-eons-and-octgn/?do=findComment&comment=2915760)

> On 8/5/2017 at 3:12 AM, Flrbb said:
> 
> I am new to Octgn. I want to use it to test my custom missions instead of printing modified cards each time. That is why I wonder weather there is some kind of skript/tool to automaticallly generate/update the needed set files for Octgn out of the data from Strange Eons?
> 
> Thanks in advance,
> 
> Flrbb

I have the opposite of what you're looking for. I make my custom sets in an Excel spreadsheet, which is very convenient. Then, there is an Excel macro that generates the necessary OCTGN file. I then have a macro in Strange Eons that takes the OCTGN file and generates the Strange Eons cards, sans images. Then you just have to load in the images by hand* and do a mass Strange Eons export. I have yet another script that will take the exported images and make them into an OCTGN image pack.

*Once you've done this once, you don't need to load in the images by hand all over again if you make changes to the set. There is a second script that will just take all the cards you already made and update the text, leaving the image alone.

I don't have the time right now, but I plan on making a tutorial video of how to do all this. It definitely makes the creation, modification, and playtesting of custom content way easier.

 

 

## 3 [Kjeld on August 7, 2017](https://community.fantasyflightgames.com/topic/255655-tools-for-combining-strange-eons-and-octgn/?do=findComment&comment=2915975)

Generating the OCTGN file automatically would definitely be a huge plus -- manually filling out the xml is horrible...

## 4 [Seastan on August 7, 2017](https://community.fantasyflightgames.com/topic/255655-tools-for-combining-strange-eons-and-octgn/?do=findComment&comment=2917324)

> 19 hours ago, Kjeld said:
> 
> Generating the OCTGN file automatically would definitely be a huge plus -- manually filling out the xml is horrible...

https://github.com/GeckoTH/Lord-of-the-Rings/blob/master/LotR set editor.xlsm [https://github.com/GeckoTH/Lord-of-the-Rings/blob/master/LotR%20set%20editor.xlsm]

## 5 [Kjeld on August 7, 2017](https://community.fantasyflightgames.com/topic/255655-tools-for-combining-strange-eons-and-octgn/?do=findComment&comment=2917497)

Super cool, thank you for developing and sharing this!

## 6 [Seastan on August 8, 2017](https://community.fantasyflightgames.com/topic/255655-tools-for-combining-strange-eons-and-octgn/?do=findComment&comment=2918305)

That Excel script, along with most of the LotR plugin in general, is thanks to GeckoTH.

