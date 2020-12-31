# [check my math here...](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/)

## 1 [Morithain on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846142)

So I was having a random math nerd moment and wondering what the odds were of pulling a given card X that you have 3 copies of in your deck on the first hand.  You know, that ONE CARD that you just absolutely have to have in order to get your game on, like "Resourceful" for a secrecy deck, or Vilya in a deck with Elrond, etc.  So, basing it on a 50 card deck, including 3 heroes (meaning you have a deck of 47 cards total to draw from), the odds of drawing a copy of the card you need in your first hand of 6 cards is

 

1 - (probability of NOT drawing card X).  Now,

 

P (NOT drawing X) = 44/47 * 43/46 * 42/45 * 41/44 * 40/43 * 39/42 = .657,

 

Which means the odds of drawing card X are 1 - .657 = 34% on your first hand.  Not spectacular.  About one in three beginning hands will have card X in it.

 

However, you get a chance to Mulligan, so, setting aside these 6 cards and drawing 6 more means you take .657 and continue with

 

.657 * 38/41 * 37/40 * 36/39 * 35/38 * 34/37 * 33/36 * the card you get to draw on turn 1 (not counting hero effects like Bilbo's) which is 32/35 = 0.29

 

So the probability of drawing card X is 71%.  Pretty good, each card after that has the odds (32-n)/(35-n) of NOT being card X, with n being the number of cards you subsequently draw (assuming you continue not to draw it), so you can plug and chug from there.

 

Of course, the more cards you put into your deck, the less likely you are to draw card X on your first hand.  On the other hand, if your deck has strong card draw (Beravor, etc.), then that mitigates this problem.  So choose wisely!  

 

 

 

## 2 [Spurries on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846143)

Well you may still be correct but with a mulligan you shuffle those original cards back into the deck, shuffle, then draw 6 more. So I think that second line of multiplication may be wrong.  But thanks for bringing me back to College 400 level Stats, haha

## 3 [OnkelZorni on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846156)

Wrong basis, heroes dont count for deck limit. You start with a player deck of 50 cards + X Heroes

## 4 [Ellareth on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846192)

you've made 2 wrong assumptions.

 

1. Number of cards in tournament legal deck is 50 excluding heroes.

2. While taking mulligan, cards in your hands shuffles back into player deck before drawing.

 

So a chance of drawing a certain card that you've included 3 copies for opening hand with mulligan is;

1 - (chance of not drawing a certain card you've included 3 copies of)

1 - (47/50 * 46/49 * 45/48 * 44/47 * 43/46 * 42/45)

1 - (0.675714)

0.324286

32.4%

 

During Mulligan you have exact same chance of drawing that certain card as initial drawing, so chance of drawing a certain card that you've included 3 copies for opening hand after mulligan is;

2(32.4%)

64.8%

 

However, let's not forget you get to draw a card right after game begins during resource phase. So chance of drawing that certain card including during resource phase of first turn is;

(chacne of drawing certain card in opening hand with mulligan) + (chance of not drawing certain card even after mulligan) * (chance of drawing certain card during resource phase of first turn)

(64.8%) + (100% - 64.8%) * (3/44)

(64.8%) + (35.2%) * (6.8181%)

(64.8%) + (2.4000%)

67.2%

 

 

My numbers probably needs to be double checked as I could've made error somewhere along the line,

but 67.2% (or just little over 2 out of 3 times) sounds about right.

## 5 [ClydeCloggie on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846216)

Actually, the maths are slightly more complicated.

 

First draw, as shown above, you have a 32.4% chance of drawing card X

 

if you do, you don't mulligan. in the 67.6% of occasions that you do not draw X, you mulligan with again a 32.4% chance of drawing X.

 

Combined, the chances of getting card X are therefore (0.324*1)+(0.676*0.324) = 0.543.

 

Then you draw your card for the first turn. The chance of getting X is 0.068, but only if you do not already have X in your hand in which case it becomes 2/44 (if you already have 1), 1/44 (if you already have 2) or 0/44 (if you draw all 3 copies in your opening hand). These scenarios slightly affect the precise percentages but hey ho. To keep it comparatively simple, the chances of having X after the draw for the first turn is:

 

0.543*1 [X in opening draw or mulligan] + 0.457*0.068 [X not in opening hand but as first turn draw] = 0.574

 

57.4% would therefore be my slightly lazy but sort of accurate answer to this one.

## 6 [Rainelotr on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846221)

I love you guys! I had forgotten how to do this. I learn how to do math but not having a math-brain I forget after about 9 months of no application.

 

It's been something I was curious about for a long time.

## 7 [Morithain on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846247)

...And that's why I gave this thread the title I did.  I was under the impression the heroes counted for your deck size, and I also didn't know that you shuffle the mulligan cards back in.  But barring those wrong assumptions, and correcting them does make it more complex.  

 

I would start from P (drawing card X) = 1 - [P (not drawing X in first hand and not drawing card in mulligan and not drawing X on first turn)].  The second term becomes P(not drawing X in first hand) * P (not drawing X in mulligan)*41/44. 

 

So P(not drawing X in first hand) is as above = 0.675.  

P (not drawing X in mulligan) is the same thing so 

 

P (not drawing X and not drawing X in mulligan and not drawing X on first turn) = 0.675 * 0.675 * 41/44 = 0.425.

 

So,

 

P (drawing X) = 1 - 0.425 = 0.574.

 

Almost 60%, but not quite.  Subsequent draws would be P (not drawing X and not drawing X in mulligan and not drawing X after n turns) = 1 - 0.675 * 0.675 * PRODUCT from 1 to n of (42-i)/(45-i) = 1 - 0.456 PRODUCT from 1 to n of (42-i)/(45-i).

 

Anyone care to crunch those numbers to give us the probability for like the first 4 turns?

 

B)

## 8 [Thanatopsis on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846248)

I think the probability is a little more souring. 

 

From a 50 card deck there are about 15.9 million combinations of 6 cards. 

the equation for that is (n!)/(r!(n-r)!) (where n is the total number (50) and r is the set size (6))

 

There are about 2.1 million card combinations that could include 1, 2, or 3 copies the one card you want

given one of the six draws is the card, the combinations of 49 other cards taking the remaining 5 slots totals to 1.9 million

given two of the six draws is the card, the combinations of 48 other cards taking the remaining 4 slots totals to 194 thousand

given three of the six draws is the card, the combinations of 47 other cards taking the remaining 3 slots totals to 16 thousand

 

That sums to about 2.1 million combinations

 

2.1 million combinations with 1, 2, or 3 copies of the one card divided by 5.9 million combinations of all the cards is about a 0.133 

 

A 13.3%  chance of drawing the one card you want.

Edited August 21, 2013 by Thanatopsis

## 9 [Thanatopsis on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846249)

Did not see your first four turn question until it was too late.

 

Change the 6 to a 10 = 10.27 billion combinations

 

the number of 10 card (6 opening hand + 4 turns) combinations with the one card is 2.49 billion

 

that's a 24.28% chance of drawing the card in the first four turns

Edited August 21, 2013 by Thanatopsis

## 10 [ClydeCloggie on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846262)

> I think the probability is a little more souring. 
> 
>  
> 
> From a 50 card deck there are about 15.9 million combinations of 6 cards. 
> 
> the equation for that is (n!)/(r!(n-r)!) (where n is the total number (50) and r is the set size (6))
> 
>  
> 
> There are about 2.1 million card combinations that could include 1, 2, or 3 copies the one card you want
> 
> given one of the six draws is the card, the combinations of 49 other cards taking the remaining 5 slots totals to 1.9 million
> 
> given two of the six draws is the card, the combinations of 48 other cards taking the remaining 4 slots totals to 194 thousand
> 
> given three of the six draws is the card, the combinations of 47 other cards taking the remaining 3 slots totals to 16 thousand
> 
>  
> 
> That sums to about 2.1 million combinations
> 
>  
> 
> 2.1 million combinations with 1, 2, or 3 copies of the one card divided by 5.9 million combinations of all the cards is about a 0.133 
> 
>  
> 
> A 13.3%  chance of drawing the one card you want.

 

2.1M / 5.9M = 0.356 but you fail to control for overlap between options (e.g., in your first example of one-in-six, a number combinations for the remaining 5 will include 2nd and even 2nd+3rd copies of the card...which you will then count again for your 2-from-6 and 3-from6 calculations). Control for those, and your maths will give you 32.4%  ;) [//content.invisioncic.com/Mfantflight/emoticons/default_wink.png]

## 11 [Morithain on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846289)

I think my calculations using 1 - probability of not drawing it is much easier than using combinatorials in this case.  It accounts for all the possibilities, which as ClydeCloggie points out have have some overlap and can skew the calculation.  ClydeCloggie used a slightly different method but still ended up with the same figure I did, of 57.4% of drawing *at least one copy* of card X on the first turn. 

 

Of course, data trumps theory...do it 50 times and see what the results are! :D [//content.invisioncic.com/Mfantflight/emoticons/default_biggrin.png]

## 12 [leptokurt on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846349)

> I think my calculations using 1 - probability of not drawing it is much easier than using combinatorials in this case.  It accounts for all the possibilities, which as ClydeCloggie points out have have some overlap and can skew the calculation.  ClydeCloggie used a slightly different method but still ended up with the same figure I did, of 57.4% of drawing *at least one copy* of card X on the first turn. 
> 
>  
> 
> Of course, data trumps theory...do it 50 times and see what the results are! :D [//content.invisioncic.com/Mfantflight/emoticons/default_biggrin.png]

Your calculation is correct. There are of course other factors - cards like "Dareon's Runes" increase your chances even more.

## 13 [rekath16 on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846352)

Omg...

## 14 [richsabre on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846383)

>  
> 
>  
> 
> Of course, data trumps theory...do it 50 times and see what the results are! :D [//content.invisioncic.com/Mfantflight/emoticons/default_biggrin.png]

reminds me of the first thing you learn about quantum physics ;) [//content.invisioncic.com/Mfantflight/emoticons/default_wink.png]

## 15 [Morithain on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846389)

Well I may be a mere psychiatrist, but I never forget my roots in math and physics undergrad.  :D [//content.invisioncic.com/Mfantflight/emoticons/default_biggrin.png]

## 16 [richsabre on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846393)

my my, we are an educated lot here aren't we? :D [//content.invisioncic.com/Mfantflight/emoticons/default_biggrin.png]

## 17 [GrandSpleen on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846397)

15 replies (16 counting this one) in just a few hours.  That's more than some threads get in a matter of weeks.  You're all a bunch of number crunchers!

## 18 [Thanatopsis on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846404)

>  
> 
> > I think the probability is a little more souring. 
> > 
> >  
> > 
> > From a 50 card deck there are about 15.9 million combinations of 6 cards. 
> > 
> > the equation for that is (n!)/(r!(n-r)!) (where n is the total number (50) and r is the set size (6))
> > 
> >  
> > 
> > There are about 2.1 million card combinations that could include 1, 2, or 3 copies the one card you want
> > 
> > given one of the six draws is the card, the combinations of 49 other cards taking the remaining 5 slots totals to 1.9 million
> > 
> > given two of the six draws is the card, the combinations of 48 other cards taking the remaining 4 slots totals to 194 thousand
> > 
> > given three of the six draws is the card, the combinations of 47 other cards taking the remaining 3 slots totals to 16 thousand
> > 
> >  
> > 
> > That sums to about 2.1 million combinations
> > 
> >  
> > 
> > 2.1 million combinations with 1, 2, or 3 copies of the one card divided by 5.9 million combinations of all the cards is about a 0.133 
> > 
> >  
> > 
> > A 13.3%  chance of drawing the one card you want.
> 
>  
> 
> 2.1M / 5.9M = 0.356 but you fail to control for overlap between options (e.g., in your first example of one-in-six, a number combinations for the remaining 5 will include 2nd and even 2nd+3rd copies of the card...which you will then count again for your 2-from-6 and 3-from6 calculations). Control for those, and your maths will give you 32.4%  ;) [//content.invisioncic.com/Mfantflight/emoticons/default_wink.png]
> 
>  

Thank you for pointing this out! Probability and Statistics, all the fine detail can get the best of you any day.

If you're willing to believe my story, I got pulled into a two hour meeting during which I realized my error and could not race back to my desk in time to fix it before you caught me ;) [//content.invisioncic.com/Mfantflight/emoticons/default_wink.png]

## 19 [Thanatopsis on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846417)

> 15 replies (16 counting this one) in just a few hours.  That's more than some threads get in a matter of weeks.  You're all a bunch of number crunchers!

 

So wait, not everyone in this game calculates statistics for their deck?

 

My two favorite are:

- cost to play all cards in the deck

- average cost to play one of each card

After this little discussion I think I'll add probability of drawing what I will deem an "acceptable" hand

(one copy of the cards that are critical for deck success.  This boils down to controlling the under of essential cards.

## 20 [richsabre on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846427)

>  
> 
> > 15 replies (16 counting this one) in just a few hours.  That's more than some threads get in a matter of weeks.  You're all a bunch of number crunchers!
> 
>  
> 
> So wait, not everyone in this game calculates statistics for their deck?
> 
> 
> 
>  

most of my day is equations.....i prefer this game to be an escape  from that. interestingly i also try not to think too hard at all about this game, hence i lose a lot! this isnt through lack of experience in strategy gaming, but more that for me personally, thinking too much takes away from the game

 

my deck building is usually 'thats a nice card, i guess i'll put that in'.....and no, it doesnt really work haha

rich

Edited August 21, 2013 by richsabre

## 21 [Rapier1 on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846555)

>  
> 
> >  
> > 
> > > 15 replies (16 counting this one) in just a few hours.  That's more than some threads get in a matter of weeks.  You're all a bunch of number crunchers!
> > 
> >  
> > 
> > So wait, not everyone in this game calculates statistics for their deck?
> > 
> > 
> > 
> >  
> 
> most of my day is equations.....i prefer this game to be an escape  from that. interestingly i also try not to think too hard at all about this game, hence i lose a lot! this isnt through lack of experience in strategy gaming, but more that for me personally, thinking too much takes away from the game
> 
>  
> 
> my deck building is usually 'thats a nice card, i guess i'll put that in'.....and no, it doesnt really work haha
> 
> rich
> 
>  

 

You can build a perfectly good deck off intuition in this game. I don't believe any cards exist that seem intuitive good but actually suck. (or the reverse, seem awful but actually are amazing).

## 22 [Whitman on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846655)

I'm no maths genius, but I remember stumbling upon hypergeometric distribution [http://stattrek.com/probability-distributions/hypergeometric.aspx] when I was playing more M:tG. The same site also includes a handy hypergeometric calculator [http://stattrek.com/online-calculator/hypergeometric.aspx]. It's great for working out the optimum card distribution for decks, including things like sphere count, resource costs, traits and effects. When you want to beat the odds, this is your stick!

## 23 [Rainelotr on August 21, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=846742)

>  
> 
> > 15 replies (16 counting this one) in just a few hours.  That's more than some threads get in a matter of weeks.  You're all a bunch of number crunchers!
> 
>  
> 
> So wait, not everyone in this game calculates statistics for their deck?
> 
>  
> 
> My two favorite are:
> 
> - cost to play all cards in the deck
> 
> - average cost to play one of each card
> 
> After this little discussion I think I'll add probability of drawing what I will deem an "acceptable" hand
> 
> (one copy of the cards that are critical for deck success.  This boils down to controlling the under of essential cards.
> 
>  

Frankly I would have been more interested in math if I had a daily reason to apply like this. :) [//content.invisioncic.com/Mfantflight/emoticons/default_smile.png]

## 24 [ClydeCloggie on August 22, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=847093)

>  
> 
> >  
> > 
> > > 15 replies (16 counting this one) in just a few hours.  That's more than some threads get in a matter of weeks.  You're all a bunch of number crunchers!
> > 
> >  
> > 
> > So wait, not everyone in this game calculates statistics for their deck?
> > 
> > 
> > 
> >  
> 
> most of my day is equations.....i prefer this game to be an escape  from that. interestingly i also try not to think too hard at all about this game, hence i lose a lot! this isnt through lack of experience in strategy gaming, but more that for me personally, thinking too much takes away from the game
> 
>  
> 
> my deck building is usually 'thats a nice card, i guess i'll put that in'.....and no, it doesnt really work haha
> 
> rich
> 
>  

 

You and me both, Rich.

 

Number crunching & (allegedly) deep thought as a large part of my job, check.

Escape to Middle Earth, check.

Miserable failure in most games, check.  :D [//content.invisioncic.com/Mfantflight/emoticons/default_biggrin.png]

 

Still it's impossible to resist maths bait on threads like these.

## 25 [Karlson on August 26, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=850814)

There's certain combos that I love to use in a lot of my decks, and for some reason some combinations definitely come up more than others.  The combo I see most of is Sneak Attack/Gandalf.  I almost always get to use that at least once during a quest, and it never gets old.  

 

On the other hand, I also love cards like Great Yew Bow and Hands Upon the Bow, but they don't seem to show up nearly as much for my tactics deck as the Sneak Attack and Gandalf cards do for my Leadership-associated deck.  

 

Honestly, I don't care to put in the time to calculate the percentages/statistics because I do enough of that in college; however, I do find it interesting that some cards almost always show up more than others when each card (usually) has three copies in the deck.

As rare as it is, I always love it when the Black Arrow pops into my hand though!  I actually wish there were more cards limited to 1 a deck simply because my deck building always soars over 50 cards and it's a struggle to tone it down.  I usually end up with around 52-54 cards per deck.  

## 26 [Rainelotr on August 27, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=850824)

I've had friends play 134 + card decks before. Always a disaster but it's hilarious while they try to make it work. I don't really have a problem with playing decks over 50 cards unless I have a card my entire strategy hinges around (something I try to avoid in most cases anyway)

## 27 [Thanatopsis on August 27, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=851493)

> As rare as it is, I always love it when the Black Arrow pops into my hand though!  I actually wish there were more cards limited to 1 a deck simply because my deck building always soars over 50 cards and it's a struggle to tone it down.  I usually end up with around 52-54 cards per deck.  

You should try a "one copy of each card" deck.  That is, fifty different cards in your deck.  Consistency goes out the door, but it's fun to try.

## 28 [ClydeCloggie on September 10, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=862166)

>  
> 
> > As rare as it is, I always love it when the Black Arrow pops into my hand though!  I actually wish there were more cards limited to 1 a deck simply because my deck building always soars over 50 cards and it's a struggle to tone it down.  I usually end up with around 52-54 cards per deck.  
> 
> You should try a "one copy of each card" deck.  That is, fifty different cards in your deck.  Consistency goes out the door, but it's fun to try.
> 
>  

Highlander decks, they are called. There can be only one. Great for the lazy deck builder who can't decide  :D [//content.invisioncic.com/Mfantflight/emoticons/default_biggrin.png]

## 29 [Rainelotr on September 11, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=862730)

why bother restricting yourself? If card consistency isn't a worry just include 3 copy of every card you might use. After all there isn't a deck limit.

## 30 [nismojoe on September 11, 2013](https://community.fantasyflightgames.com/topic/88902-check-my-math-here/?do=findComment&comment=862750)

Don't forget about cards that make you draw, like say a deck with Beravor, 3x Mithrandir's advice, 3x daeron's runes

 

imagine that to be your opening hand with 3 lore characters.  pay 3 lore for mithrandir's, draw 9.  then draw 6 and discard 3 for daeron's. then draw 2 for bearavor.

 

then pretend you and your allies have that leadership party draw! 3 copies each!, in a 4 player game!

