# [a formula i made for you to work out card draw chances](https://community.fantasyflightgames.com/topic/66408-a-formula-i-made-for-you-to-work-out-card-draw-chances/)

## 1 [richsabre on June 23, 2012](https://community.fantasyflightgames.com/topic/66408-a-formula-i-made-for-you-to-work-out-card-draw-chances/?do=findComment&comment=648319)

having to work with equations every day through my studies i thought i would have a go at creating a simple formula to work out the chances of drawing various cards as an ONGOING process- what i mean by this will be explained below, as it differs from simply saying you have a 3/50 = 6% chance of drawing a certain card with 3 copies in a deck of 50…………….

i know alot of you will already know this but i just thought id share it and someone may find it useful………also im working on how to include the mulligan it it

 

so i know that basically speaking chance is usually    AMOUNT OF COPIES OF DESIRED CARD
                                                                                               ___________________________________

                                                                                                         AMOUNT OF CARDS IN DECK

so if i had 3 gandalfs in a deck of 50 cards it is      3        which = 6%
                                                                                         __
                                                                                         50

and if we draw 6 cards in our opening hand it is          3                which = 36%
                                                                                               __     X 6
                                                                                               50

however the problem with this is that it doesnt address the fact that after each draw you lose 1 card from your deck and you also may draw a gandalf- taking these into consideration i came up with this:

          P- ®
N = _______
       Q - (S+T)

N = the chance we are looking for
P = the number of copies of the desired card in your start hand
R = the number of that specific card that you have actually drawn
Q = the number of cards in your start deck
S = the number of cards in your hand
T = the number of cards in the discard pile

so in other words you take away R from P to get the number of copies left to draw, and you take away S and T from Q to find the number of cards actually left in your deck…..using an example

you have 3 gandalfs at the start of the hand draw- the chances of drawing it are    3 - (0)
                                                                                                                                                  _____         = 3 over 50 = 6% as we already know
                                                                                                                                                 50 - (0+0)

now the next card you draw (assuming you didnt draw a gandalf first) is         3 - (0)
                                                                                                                                       ______    = 3 over 49 = 6.1% (to 2 sig.fig)
                                                                                                                                       50-(1+0)

 

now assume you just drew a gandalf at the 2nd draw, the 3rd draw is now           3 - (1)

                                                                                                                                              _______          = 2 over 48 = 4.2%
                                                                                                                                               50 - (2+0)

 

another simplified example could be you have a deck of 10 cards with 3 fast hitches in, first draw you have  3 - (0)

                                                                                                                                                                                     _____        = 30%

                                                                                                                                                                                      10 - (0+0)

then assume you draw a fast hitch, now the 2nd draw is  3 - (1)

                                                                                                       ____               = 2/9 = 22%  

                                                                                                      10 - (1+0)

then assume you get to the point where you have drawn 5 cards, and are about to draw the 6th - you have two fast hitches in your hand  

          3 - (2)

         _______    =   1/5  =20%  

         10 - (5+0)               

 

so as you can see the formula takes into account not only how many times you draw, but also whether you draw your card
so hopefully this all correctly takes into account the variable and on going process of card draw. it (with some modification i think) could be used for drawing cards once the game has properly started- you would need to keep track of your cards in the discard pile as well as your hand (S+T)

anyways,let me know your thoughts and i hope someone may find this useful

 

## 2 [jjeagle on June 23, 2012](https://community.fantasyflightgames.com/topic/66408-a-formula-i-made-for-you-to-work-out-card-draw-chances/?do=findComment&comment=648325)

I'm not competent to judge your maths (my brother and playing partner is a mathematician and he does that part of the brainwork for us), but I've found a few deck calculating tools online which I think are helpful.

For example, this one [http://www.implair.com/deckulator/mana.html], although it uses MTG vocabulary, can perform the sort of calculations you are talking about.

## 3 [richsabre on June 23, 2012](https://community.fantasyflightgames.com/topic/66408-a-formula-i-made-for-you-to-work-out-card-draw-chances/?do=findComment&comment=648326)

while that is probably more efficient and reliable- i dont know what 'mana' means so i found that bit confusing, but i guess most people understand mtg lingo

personally i find doing long hand maths easier

## 4 [jjeagle on June 23, 2012](https://community.fantasyflightgames.com/topic/66408-a-formula-i-made-for-you-to-work-out-card-draw-chances/?do=findComment&comment=648329)

The calculator listed as "Example 2" on the link I gave will give the probabilities of drawing X copies of a card you run Y of, in a 50 (or whatever) sized deck, in the first Z cards drawn - which I think is the most important number to be aware of in deck construction.

It's quite a bit trickier to factor the mulligan into these calculations though.

This article [http://www.kibble.net/magic/magic10.php] breaks down the maths involved.

## 5 [richsabre on June 23, 2012](https://community.fantasyflightgames.com/topic/66408-a-formula-i-made-for-you-to-work-out-card-draw-chances/?do=findComment&comment=648334)

oh well if no one finds it useful at least it filled in 5 minutes of my time, and i was aware of being able to google a better verison of it (which i am still working on), but if we let google do all our work wheres the fun in that? haha

## 6 [lleimmoen on June 23, 2012](https://community.fantasyflightgames.com/topic/66408-a-formula-i-made-for-you-to-work-out-card-draw-chances/?do=findComment&comment=648380)

Thanks for the post!

