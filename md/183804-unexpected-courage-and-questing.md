# [unexpected courage and questing](https://community.fantasyflightgames.com/topic/183804-unexpected-courage-and-questing/)

## 1 [alexbobspoons on August 1, 2015](https://community.fantasyflightgames.com/topic/183804-unexpected-courage-and-questing/?do=findComment&comment=1713312)

Ok, if i played unexpected courage on Eowyn, am I right in thinking I CANNOT commit her to quest twice, because there is only one opportunity window to comit characters to quest and thus no chance for UC to action until after the opportunity to comit has passed???

So she could use UC to then do something else,eg defend, but not two lots of questing.

Am I understanding/playing that right or am I making this harder for myself than I need to?

I am fairly sure its similar with aragorn because you ready him after you have comitted, thus cannot then comit a second time.

## 2 [ricedwlit on August 1, 2015](https://community.fantasyflightgames.com/topic/183804-unexpected-courage-and-questing/?do=findComment&comment=1713335)

You are correct: a character cannot commit to a quest more than once.  A player commits all of his questing characters at one time and then you can play actions. So there is no window in which you could double "commit". 

## 3 [alexbobspoons on August 1, 2015](https://community.fantasyflightgames.com/topic/183804-unexpected-courage-and-questing/?do=findComment&comment=1714273)

Thanks I thought it worked like that. Unexpected courage seems best for multiple attacks or defends or multiple card-text usage.

Thanks again.

## 4 [Lecitadin on August 1, 2015](https://community.fantasyflightgames.com/topic/183804-unexpected-courage-and-questing/?do=findComment&comment=1714509)

Unexpected courage is such a good card that there's only one in the core set...

## 5 [alogos on August 3, 2015](https://community.fantasyflightgames.com/topic/183804-unexpected-courage-and-questing/?do=findComment&comment=1717398)

Also, commit is a state / boolean, either true or false. "Double commit" or "Double" attack/defense does not exist.

## 6 [alexbobspoons on August 3, 2015](https://community.fantasyflightgames.com/topic/183804-unexpected-courage-and-questing/?do=findComment&comment=1718358)

> Also, commit is a state / boolean, either true or false. "Double commit" or "Double" attack/defense does not exist.

I know what you mean, though when Aragorn commits to a quest, his ability (core) readies him and so he is no longer exhausted yet still considered comitted to the quest anyway.. so some may think "oh can I commit again?" which of course you cant. Similarly, while you cannot double-attack the same character, you can attack one enemy, use a readying effect and then attack another enemy afterwards (like a double attack) but the rulebook does say that you are no longer attacking once your attack resolves, so just like you say the "state" is no longer in effect when you use an ability to then attack another enemy.

So thanks for your info yes, I fully agree and understand :) [//content.invisioncic.com/Mfantflight/emoticons/default_smile.png] though there are aspects where slight confusion can creep in :) [//content.invisioncic.com/Mfantflight/emoticons/default_smile.png]

Cheers Alogs!

Alex

## 7 [Ecthelion III on August 4, 2015](https://community.fantasyflightgames.com/topic/183804-unexpected-courage-and-questing/?do=findComment&comment=1718932)

> Also, commit is a state / boolean, either true or false. "Double commit" or "Double" attack/defense does not exist.

Boolean? Someone's a programmer! Last time it was:

> Think of it like a list.
> 
> [player one].first() return player one
> 
> [player one].last() return player one
> 
> [player one].next() return null

:) [//content.invisioncic.com/Mfantflight/emoticons/default_smile.png]

## 8 [alexbobspoons on August 5, 2015](https://community.fantasyflightgames.com/topic/183804-unexpected-courage-and-questing/?do=findComment&comment=1720410)

10 print "playeronequests"

20 print "cant comit anymore now"

30 goto 20

.....bzzzzt...out-of-cheese-error....redo-from-start...

Edited August 4, 2015 by alexbobspoons

## 9 [jnicol on August 7, 2015](https://community.fantasyflightgames.com/topic/183804-unexpected-courage-and-questing/?do=findComment&comment=1724409)

You guys are totally overthinking this. It's quite simple really:

 


var Character = function(name) {
  this.name = name;
  this.committedToQuest = false;
};
Character.prototype.quest = function() {
  if (!this.committedToQuest) {
    this.committedToQuest = true;
    console.log(this.name + ' has committed to the quest');
  } else {
    console.log(this.name + ' is already committed to the quest and cannot commit again');
  }
};
var eowyn = new Character('Eowyn');
eowyn.quest(); // success
eowyn.quest(); // fail

## 10 [alogos on August 7, 2015](https://community.fantasyflightgames.com/topic/183804-unexpected-courage-and-questing/?do=findComment&comment=1724760)

I'm currently working with


Class Charater(val name :String) {
   var committedToQuest = false
   def comit = if(!committedToQuest) commitedToQuest else throw new Exception("already committed to quest")
}
var eowyn = new Character("Eowyn")
eowyn.quest.quest


hard...

