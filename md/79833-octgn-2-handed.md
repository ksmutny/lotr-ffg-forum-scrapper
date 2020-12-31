# [OCTGN - 2 Handed](https://community.fantasyflightgames.com/topic/79833-octgn-2-handed/)

## 1 [tripecac on February 25, 2013](https://community.fantasyflightgames.com/topic/79833-octgn-2-handed/?do=findComment&comment=767167)

I'm trying to figure out how to run OCTGN 2-handed.

1) run OCTGN
2) click "Custom Games"  (without logging into server first)
3) click "Host"
4) select "Lord of the Rings the Card Game" from the "Game" list
5) click "Start"
6) click "OK"
7) uncheck "Use a two-sided table"

At this point, I can see my local IP address: 192.168.1.3

The following does not work:

8) open a second isntance of OCTGN (either on this computer or another computer on the LAN)
9) click "Custom Games"  (without logging into server first)
10) clicl "Join Offline Game"
11) for "IP Address/Host" type the local IP address: 192.168.1.3
12) select "Lord of the Rings the Card Game" from the "Game" list
13) click "Connect"

This does not work.  After several seconds' wait, I get the following red error message at the top of the "Connect To A Game" box:

"Could not connect: A connection attempt failed because t"  [cuts off]

I can't see anything past the "t". 

I get the same error message for either a second instance of OCTGN on the same PC, or a different PC on my LAN.


Any idea what I am doing wrong?
 

## 2 [Memetix on February 26, 2013](https://community.fantasyflightgames.com/topic/79833-octgn-2-handed/?do=findComment&comment=767213)

I run up two copies of OCTGN on my local machine for testing new releases of the game engine all the time so I know it can work.

You seem to be doing all the right things. The only thing I and think of is the port number. This usually defaults to 5000 but sometimes is 5001. Ensure the port number is the same for both games …..

If that still fails, you should be able to create a second OCTGN account and created a WAN game and join that using the normal match matchup.

## 3 [tripecac on February 26, 2013](https://community.fantasyflightgames.com/topic/79833-octgn-2-handed/?do=findComment&comment=767467)

Both instances are using port 5000.

Do you know if the error message ("Could not connect: A connection attempt failed because…") is logged somewhere?  If so, what file contains that complete error message?

## 4 [tripecac on February 26, 2013](https://community.fantasyflightgames.com/topic/79833-octgn-2-handed/?do=findComment&comment=767475)

I commented out this line in my hosts file:

::1 localhost

OCTGN game me errors for a couple more attempts, but then started working.  I don't know if/why that fix did the trick.

So now I can play 2 instances locally, which is great news!

 

I started a game, and noticed that when using 2 instances, when I use the Setup the Game option, the quest card is not automatically added to the quest area.  This isn't a big deal, but it does deviate from the single-instance behavior.

What other differences are there between 1 and 2-handed OCTGN?

And do you have any tips on how to make 2-handed OCTGN easier?

Thanks!

## 5 [noctum_carpe on May 26, 2013](https://community.fantasyflightgames.com/topic/79833-octgn-2-handed/?do=findComment&comment=799208)

Hi im hijacking this thead, i have the same problem but cant solve it:( any new tips i cant connect either online or offline i have the same port and the ip adress as shown when i start a game but i get an error that i canot connect.

I hope someone can help me! Thx in advance!

## 6 [booored on May 27, 2013](https://community.fantasyflightgames.com/topic/79833-octgn-2-handed/?do=findComment&comment=799501)

lackeyccg fully supports two hands if you want to play that way solo. With out needing to alt tab between games or anything.

## 7 [TragicTheBlathering on May 28, 2013](https://community.fantasyflightgames.com/topic/79833-octgn-2-handed/?do=findComment&comment=799530)

LackeyCCG supports this nativly. Just simply click on the DUMMY PLAYER to "swap" to him… then play as normal. Click back on you to use your cards…. simple as that!

## 8 [noctum_carpe on May 28, 2013](https://community.fantasyflightgames.com/topic/79833-octgn-2-handed/?do=findComment&comment=799595)

I dident know there was another computerprogram for lotr lcg thx i will check out lackeyccg.

## 9 [tripecac on May 28, 2013](https://community.fantasyflightgames.com/topic/79833-octgn-2-handed/?do=findComment&comment=799636)

I play 2-handed OCTGN all the time now. 

Do you have a specific problem or question?  I can help you get started with it.

## 10 [booored on May 28, 2013](https://community.fantasyflightgames.com/topic/79833-octgn-2-handed/?do=findComment&comment=799755)

noctum said:

I dident know there was another computerprogram for lotr lcg thx i will check out lackeyccg.



lackeyCCG is way superiour… check it out. The app is older so not a "flashy" but much much more funcionality. For instence.. you are nto goign to crash continually.. and eve nif you do ti has auto save every time you advace a turn or a phase.. plau you can save at anytime you wish also.. this alone makes it own octgn.. but it also runs native in mac, linux, windows, ipad and android is incoming as well.

## 11 [noctum_carpe on May 29, 2013](https://community.fantasyflightgames.com/topic/79833-octgn-2-handed/?do=findComment&comment=799902)

thx for the offer, but i have set up the lackeycgc now and it works as far as i can see ill play around with it and see if it works as well as i think.

## 12 [michaelramm on May 29, 2013](https://community.fantasyflightgames.com/topic/79833-octgn-2-handed/?do=findComment&comment=800025)

My main question is: Do you have to run two instances of it to play two-handed (either on the same computer or on two different computers)?

Michael

## 13 [tripecac on May 29, 2013](https://community.fantasyflightgames.com/topic/79833-octgn-2-handed/?do=findComment&comment=800054)

Yes, 2 instances.  Just make sure you get the port number correct.  For me, the port is a random number in the 5000-5999 range.  It's not always 5000.  I think that was my mistake when I posted about problems.

## 14 [booored on May 29, 2013](https://community.fantasyflightgames.com/topic/79833-octgn-2-handed/?do=findComment&comment=800092)

you only need 1 instence for lackeyccg… plus it has save and load, auto save , crash recovery, runs on mac, linux, windows, ipad and android incoming

## 15 [tripecac on May 30, 2013](https://community.fantasyflightgames.com/topic/79833-octgn-2-handed/?do=findComment&comment=800186)

I started with LackeyCCG, and then also tried Vassal and OCTGN.  I switched to OCTGN because I felt like it was the easiest to use.

The LackeyCCG LotR plugin itself is very good, but the LackeyCCG engine is a bit cumbersome to use and, well, ugly.  It's hard to see things sometimes.  It reminds me of the old X-Motif days. 

OCTGN has a simpler, cleaner interface that is a lot easier on the eyes and brain.  At least, IMO.

I do wish OCTGN had saving, and an easier way to play 2-handed, but I've learned to live with those deficiencies and have now logged far more hours in OCTGN than LackeyCCG.

 

