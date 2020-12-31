# [Front Page of RingsDB](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/)

## 1 [JYoder on September 20, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2991508)

Maybe no one here knows the answer to this, but I'll ask anyway. I recently published a self-contained deck on ringsdb. The link is here...

http://ringsdb.com/decklist/view/6380 [http://ringsdb.com/decklist/view/6380]

Since posting it 2 days ago, it's never appeared on the front page, so I assume it never will now. I was going to delete it as I assumed no one would ever see it, then someone (wharmy) recently commented on it.

It's not that I need comments (though great if I do) but I'm wondering how the front page there works. Right now, of the 4 decks on the front page, 2 are from 2 days ago, 1 from a day ago, and 1 from an hour ago.

Others have published decks after me (as can be seen in the "Recent" decklist listing) but most also haven't been on the front page. Any idea how that site works?

## 2 [Kakita Shiro on September 20, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2991538)

There's some kind of ranking algorithm involved, but I don't know the specifics.

## 3 [sappidus on September 20, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2991562)

> Quote
> 
> $qb->addSelect('(1+d.nbVotes)/(1+POWER(DATE_DIFF(CURRENT_TIMESTAMP(), d.dateCreation), 2)) AS HIDDEN popularity');

Source: https://github.com/Sydtrack/ringsdb/blob/master/src/AppBundle/Model/DecklistManager.php [https://github.com/Sydtrack/ringsdb/blob/master/src/AppBundle/Model/DecklistManager.php]

Well, you asked. ;) [//content.invisioncic.com/Mfantflight/emoticons/default_wink.png]

(It’s done by a relatively simple formula weighting the number of likes with the age of the decklist.)

## 4 [dalestephenson on September 21, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2991585)

I never use the front page myself.  Usually I search for decks with certain cards; sometimes I'll just look at the recent decks for ones that haven't received any feedback yet.

## 5 [JYoder on September 21, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2991635)

> 55 minutes ago, sappidus said:
> 
> Source: https://github.com/Sydtrack/ringsdb/blob/master/src/AppBundle/Model/DecklistManager.php [https://github.com/Sydtrack/ringsdb/blob/master/src/AppBundle/Model/DecklistManager.php]
> 
> Well, you asked. ;) [//content.invisioncic.com/Mfantflight/emoticons/default_wink.png]
> 
> (It’s done by a relatively simple formula weighting the number of likes with the age of the decklist.)

 

Hilarious. :) [//content.invisioncic.com/Mfantflight/emoticons/default_smile.png]

So it looks like if you don’t get at least 1 vote early, you won’t see the light of day. And it must update every few hours rather than on the page refresh, or other more recent decks would be shown over the current topmost deck.

Yeah, I guess I did ask. Thanks. :) [//content.invisioncic.com/Mfantflight/emoticons/default_smile.png]

## 6 [sappidus on September 21, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2991676)

> 1 hour ago, JYoder said:
> 
> So it looks like if you don’t get at least 1 vote early, you won’t see the light of day. And it must update every few hours rather than on the page refresh, or other more recent decks would be shown over the current topmost deck.

While the refresh rate may or may not be instantaneous, I note that the boldfaced is not strictly true. ::puts on math hat::

The formula used is (n+1)/[(a+1)^2], with n denoting the # of likes/votes, and a the "age". I didn't drill into the code enough to learn the time units used, but it essentially doesn't matter for the current purpose; let's just assume it's measured in days (and fractions of days).

So let's say Seastan put out his latest & greatest yesterday, and it's already earned 50 upvotes. Now I publish my newest Free Peoples deck, and I'm so eager to see whether it made the front page that I click reload instantly.

What does the formula yield? Well, for trigger-happy me and my deck, it sees 0 votes for a 0-day-old list, so it spits out a value of (0+1)/[(0+1)^2] = 1.

For Seastan's deck, it checks the age and gets back, say, 0.7321 days. So the score for the deck is (50+1)/[(0.7321+1)^2] = 51/3 = 17.

Thus, even in the instant-update case, Seastan's beats mine despite mine being as new as possible. No one is surprised. (The actual numbers used on RingsDB may be different—I do not know whether the "n" from above is a straight count of hearts or whether it mixes in weighted stars or comments somehow—but the general principle remains.)

Nonetheless, you are certainly correct that getting some early recognition helps immensely in getting onto, and sticking to, the front page: among other things, there's the exposure bias, that front-page decks are generally seen more and thus more likely to get further upvotes. But in the end, I'm mostly with @dalestephenson [https://community.fantasyflightgames.com/profile/256741-dalestephenson/] that the vast majority of decklists I check out are from some other kind of search, not just what's on the cover.

(Some more info on ranking algorithms here… Y Combinator's is very similar to RingsDB's: https://moz.com/blog/reddit-stumbleupon-delicious-and-hacker-news-algorithms-exposed [https://moz.com/blog/reddit-stumbleupon-delicious-and-hacker-news-algorithms-exposed])

Edited September 20, 2017 by sappidus

## 7 [JYoder on September 21, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2991764)

I wasn't very clear. When I said, "other more recent decks would be shown over the current topmost deck," I meant literally, in reference to the deck that was currently perched at the top of the page. (It's actually still there now). I say that because it has 0 likes, but there are 3 newer decks that have been posted after it, also with 0 likes. So if it was constantly updating, the newest "0 like" decks would trump the 4th "0 like" deck. Therefore, it would seem that when it refreshes, the most recent "0 like" deck will appear at the top of the page, while the 2nd and 3rd "0 like" decks never had a chance.

## 8 [sappidus on September 21, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2991768)

Ah, fair enough.

## 9 [JYoder on September 21, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2991811)

 

Interesting. It refreshed, and the latest "0 like" deck, and the 4th most recent "0 like" deck are on the front page, but not the 2nd and 3rd most recent "0 like" decks.

So apparently there's something else going on, beyond the equation above. Ah well. I won't lose any sleep over it, but it's certainly strange.

 

## 10 [Seastan on September 21, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2992358)

> 11 hours ago, JYoder said:
> 
>  
> 
> Interesting. It refreshed, and the latest "0 like" deck, and the 4th most recent "0 like" deck are on the front page, but not the 2nd and 3rd most recent "0 like" decks.
> 
> So apparently there's something else going on, beyond the equation above. Ah well. I won't lose any sleep over it, but it's certainly strange.
> 
>  

It's not just about the age. It also depends on the dominant sphere that's in the deck. If the history is as follows:

1 day old spirit deck: 0 likes

2 day old lore deck: 0 likes

3 day old spirit deck: 20 likes

The decks on the front page will be the 2 day old deck and the 3 day old deck, despite the 1 day old deck having the same number of likes as the 2 day old deck.

-----------------------------------

My recommendation is that if you have a deck you've worked a lot on and are proud of, and will be disappointed if it doesn't get noticed, don't rely entirely on the ringsdb algorithm. You are always free to solicit comments on your decks by posting them in the strategy forum here, or on BGG, reddit, discord, facebook, etc. And besides, being on the front page of ringsdb is no guarantee people will comment on your deck anyway.

 

## 11 [JYoder on September 21, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2992421)

Thanks for the advice. I'll post in that forum.

So what does the dominant sphere have to do with it? That seems an odd thing to take into account.

## 12 [Authraw on September 21, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2992456)

The front page shows the deck with the highest popularity score for each of the four spheres. So you're not actually competing with *all* the decks people are posting, just the ones who share the same dominant sphere. 

## 13 [JYoder on September 21, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2992472)

Ah... *lightbulb*... I never noticed that before. :) [//content.invisioncic.com/Mfantflight/emoticons/default_smile.png]

 

## 14 [PocketWraith on September 21, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2992565)

> 19 hours ago, JYoder said:
> 
> Since posting it 2 days ago, it's never appeared on the front page, so I assume it never will now. I was going to delete it as I assumed no one would ever see it, then someone (wharmy) recently commented on it.

This seems weird to me. Why do you feel the need to delete a deck just because it never reached the front page?

## 15 [JYoder on September 21, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2992598)

Only with intent to repost it as I had assumed all decks go to front page for a little while and mine somehow got skipped, and I would have liked some feedback.

Now that I know how it works, I wouldn’t have said that.

Edited September 21, 2017 by JYoder

## 16 [danpoage on September 21, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2993078)

There is another option for exposure. If you have designed a deck and have a write up to describe your deck-building decisions or a detailed play report, there are blogs which will feature your deck in an article. The key here is doing some of the leg-work yourself. If you link to a RingsDB deck with a one sentence description, there's not a whole lot of incentive for someone else to take time out to turn that into an article. On the other hand, members of the community have spent considerable time on concept decks, theme decks and combo decks, all of which have been featured at various times on community blogs (including my own).

I don't presume to speak for anyone else, but my time is seriously constrained - not to mention that I want to spend my free time actually *playing* games too. However, I am more than happy to help members of the community gain exposure. We just need to "meet in the middle" in terms of effort. A subtle but important part of getting your work recognized is to in turn recognize that others have put work in to make the community exist to begin with. All of the podcasts, blogs, search engines, and RingsDB itself, all represent considerable sacrifices on the parts of various community creators. This community is very friendly and helpful, but part of any healthy community is an expectation of the citizens to get their hands dirty and help.

This is not intended as a direct criticism of you, just a reminder of how communities actually work. I can certainly relate to the frustration of having a deck which you like disappear into the ether (it's happened to me plenty of times). Because the RingsDB front page can only ever support one deck for each sphere at a time, relying on a simplistic popularity algorithm is not your best bet for exposure. This is especially true if you have spent considerable time building/testing/thinking about the deck. I encourage you to explore alternative avenues for exposure, this community is about as robust as any you will find online. Thanks for being a part of the community, and may your decks get all of the attention that they deserve!

## 17 [JYoder on September 22, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2993137)

 

Thanks for the note. I did a write-up in RingsDB, but maybe you're talking about something more?

I didn't know there were blogs that featured decks outside the blogger. Maybe I'd contribute to such a blog... but I don't think anyone would want me too. I'm no hotshot cutting edge deck builder. For one, I mostly do two-handed builds, which I don't believe interested most. And two, I avoid spoilers and reading much online, as I prefer to succeed or fail on my own to maintain a high replayability, so I'm far behind the community's knowledge base.

Examples: I only played Na'asiyah the first time a month ago, and I've not even tried Fastred, or Kahliel, or Tactics Imrahil, so I avoid reading anything about them.

 

> 12 minutes ago, danpoage said:
> 
> Thanks for being a part of the community, and may your decks get all of the attention that they deserve!

That's very kind of you, but I'll be the first to say the attention my decks "deserve" may be nothing... and I'm OK with that. I just wanted myself (and everyone who posted within hours of me) to at least get a chance to receive some response, even if it was , "Dude... that's a great combo... that was discovered a year ago." :) [//content.invisioncic.com/Mfantflight/emoticons/default_smile.png] Now in retrospect, I admit I was unrealistic -- I had only used RingsDB to build and store my decks, without digging into what happens when you publish.

## 18 [dalestephenson on September 22, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2993745)

> 12 hours ago, JYoder said:
> 
> I didn't know there were blogs that featured decks outside the blogger. Maybe I'd contribute to such a blog... but I don't think anyone would want me too. I'm no hotshot cutting edge deck builder. For one, I mostly do two-handed builds, which I don't believe interested most. And two, I avoid spoilers and reading much online, as I prefer to succeed or fail on my own to maintain a high replayability, so I'm far behind the community's knowledge base.

For two handed-builds, are you using the fellowship feature on ringsdb?  Virtually all of my published decks on ringsdb are 2-handed fellowships (featuring Dori -- he *needs* two hands to be most useful), and you can set up cool combinations more easily with complementary decks.

The great thing about a cooperative game like this is that decks don't have to be "cutting edge" or powerful or even novel to be either interesting or usable.  What makes Beorn's Path so amazing and useful isn't the inherent quality of the deck (meaning no criticism, I still use two decks derived from them still) but the explanation of how cards are chosen and how they are used.  A well-explained deck may be of interest to blog owners who would like outside content, even if the deck itself isn't particularly novel.

I've also used ringsdb (and before that cardgamedb) for research into what cards are used and in which combinations, and for that purpose even non-commented published decks from creators with little or no votes are useful to me.  Within the usual 50-card deck size, even with mostly 3x cards it's very rare for non-derived decks to be exactly alike.

Let's consider your deck for a moment.  You have a Thurindir/Hirgon/SpEowyn hero lineup.  At this moment, this is the *only* deck in all of ringsdb to feature both Thurindir and Hirgon.  Your goal is to buff Watcher of Brunien with Arwen and Raiment of War.  There's only one other published deck with those three cards, a one-hero Beravor deck with 473 distinct cards in it (not a real deck).  You're one of eight decks that mix Thurindir and Keep Watch, but only two others that have *only* Keep Watch in the main deck.  Here are the other two:

http://ringsdb.com/decklist/view/5379/a-vigilant-dunadan-keeping-watch-1.0 [http://ringsdb.com/decklist/view/5379/a-vigilant-dunadan-keeping-watch-1.0]

http://ringsdb.com/decklist/view/5621/men-of-the-nightwatch-aka-ennemies-are-1-1-1.0 [http://ringsdb.com/decklist/view/5621/men-of-the-nightwatch-aka-ennemies-are-1-1-1.0]

Both use LeDenethor with a tactics heroes, so they don't even have the same spheres as you.  In fact, the only other Thurindir/Keep Watch combo using spirit is this one:

http://ringsdb.com/decklist/view/5507/secret-side-quests-1.0 [http://ringsdb.com/decklist/view/5507/secret-side-quests-1.0]

How similar are the decks?

You have 9 distinct allies, openMfly's deck has 10.  The common allies are Vigilant Dunedain (of course), Arwen (3x for you, 1x for his), Defender of Rammas (3x for you, 2x for his), and Warden of Healing (3x for you, 2x for his).

You have three distinct attachments, openMfly's deck has six.  None are in common.

You have five distinct events, openMfly's deck has three.  Only Daeron's Runes is in common.

You have Keep Watch as the only side quest, openMfly's deck has seven.

So very distinct and different decks, published over a year.  So you may think that no one may be interested in your deck because you don't follow what other deck builders are doing, but as it turned out your deck is unique in a number of ways among all the vast number of ringsdb decks.

And like yours, most of the other decks are published to no fanfare or comments.  Of the other seven Thurindir/Keep Watch decks, five of them *combined* for 2 likes, no favorites, and 2 comments.  (Now they're up to six, because I liked the four decks that included commentary on their decks).  I think the fate of most ringsdb decks is to be unnoticed, unless they're linked elsewhere.  But even the most obscure deck will show up on a decklist search and someone like me will take a look at it to see what it does or has.

## 19 [JYoder on September 22, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2994063)

Wow, great thoughts and stats! I published one Fellowship a while back. I don't know that it's anything special, though it was very effective throughout the saga...

http://ringsdb.com/fellowship/view/2954 [http://ringsdb.com/fellowship/view/2954]

However, your point (and danpoage's) is well taken, in that everyone has something to contribute (recognized or not) and RingsDB is an excellent tool, but it ends there. Beyond that, forums, blogs, etc, are where true interaction lies. When and if I publish more, I'll at least post in the other forum here to maybe get some feedback. So do many others here post "guest decks" on blogs? (Which blogs?) And is Discord, Reddit, or whatever else, pretty popular? (I've only used this site, RingsDB, and BGG.)

## 20 [danpoage on September 22, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2994098)

I have compiled a list of blogs and other community resources here:

https://hallofbeorn.wordpress.com/community/ [https://hallofbeorn.wordpress.com/community/]

## 21 [Laco on September 22, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2994139)

Dan, can I ask to add my blog to your list please? Blog is in Slovak language.

https://temnyhvozd.wordpress.com/ [https://temnyhvozd.wordpress.com/]

## 22 [danpoage on September 26, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2998855)

@Laco [https://community.fantasyflightgames.com/profile/194837-laco/], thanks for letting me know. I've added a link to your site on the Community page [https://hallofbeorn.wordpress.com/community/] on my blog, as well as in the links bar which is displayed on the right side of every page. If there are any other foreign language blogs which you use or know about, please let me know. I am happy to spread the word about resources for this game in any language.

S pozdravom!

## 23 [Rouxxor on September 26, 2017](https://community.fantasyflightgames.com/topic/259059-front-page-of-ringsdb/?do=findComment&comment=2999159)

I don't know if I already told you but what you bring to the game and to people whoes play at it is great. Thanks a lot!

