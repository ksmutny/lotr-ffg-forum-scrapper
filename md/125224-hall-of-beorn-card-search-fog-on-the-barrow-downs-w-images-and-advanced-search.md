# [Hall of Beorn Card Search: Fog on the Barrow Downs (w/ Images) and Advanced Search](https://community.fantasyflightgames.com/topic/125224-hall-of-beorn-card-search-fog-on-the-barrow-downs-w-images-and-advanced-search/)

## 1 [danpoage on October 20, 2014](https://community.fantasyflightgames.com/topic/125224-hall-of-beorn-card-search-fog-on-the-barrow-downs-w-images-and-advanced-search/?do=findComment&comment=1305050)

http://hallofbeorn.com/Cards/Search?CardSet=Fog+on+the+Barrow-downs [http://hallofbeorn.com/Cards/Search?CardSet=Fog+on+the+Barrow-downs]

I have also made some changes that should improve the site reliability, but there are more changes on the way.

The other feature that I am proud to announce is the initial release of Advanced Search.

You can now apply multiple filters in a single search using a special syntax in the query text box:

+ includes a given filter. Multiple filter values can be included separated by a comma
- includes the negation of a given filter. Multiple filter values can be excluded separated by a comma

For example:

+sphere=Lore,Leadership will include only cards from the Lore OR Leadership sphere
-sphere=Spirit will exclude cards from the Spirit sphere

 

You can mix these special filters (prefixed with + or -) with regular queries. For example:

Aragorn +sphere:Leadership,Lore -sphere:Fellowship,Tactics

The above would search for Aragorn and filter for Leadership and Lore spheres, but exclude the Fellowship and Tactics spheres.

These special tokens can be also be combined with existing basic filters from the drop down menus. For example, you could choose 2 from the Cost drop down and Ally from the card type drop down, then enter the following query:

+sphere:Spirit,Tactics -keyword:Ranged +trait:Silvan,Noldor

This will return all 2 cost Spirit and Tactics allies with the Silvan or Noldor trait that do NOT have the Ranged keyword. I will have a post on the blog soon, with full details of the advanced search syntax, but I wanted to make the announcement here and encourage people to try it out.

 

## 2 [GrandSpleen on October 20, 2014](https://community.fantasyflightgames.com/topic/125224-hall-of-beorn-card-search-fog-on-the-barrow-downs-w-images-and-advanced-search/?do=findComment&comment=1305071)

You're the best! Thanks for all you do.

## 3 [Dedalus on October 20, 2014](https://community.fantasyflightgames.com/topic/125224-hall-of-beorn-card-search-fog-on-the-barrow-downs-w-images-and-advanced-search/?do=findComment&comment=1305106)

Thank you very much!  :D [//content.invisioncic.com/Mfantflight/emoticons/default_biggrin.png] 

Are you going to update The Old Forest?  ;) [//content.invisioncic.com/Mfantflight/emoticons/default_wink.png] 

 

## 4 [MyNeighbourTrololo on October 20, 2014](https://community.fantasyflightgames.com/topic/125224-hall-of-beorn-card-search-fog-on-the-barrow-downs-w-images-and-advanced-search/?do=findComment&comment=1305135)

thats-nice-cat-300x300.jpg [http://www.soldwithvideo.com/articles/wp-content/uploads/2013/09/thats-nice-cat-300x300.jpg]
 

## 5 [danpoage on October 20, 2014](https://community.fantasyflightgames.com/topic/125224-hall-of-beorn-card-search-fog-on-the-barrow-downs-w-images-and-advanced-search/?do=findComment&comment=1305301)

> Thank you very much!  :D [//content.invisioncic.com/Mfantflight/emoticons/default_biggrin.png] 
> 
> Are you going to update The Old Forest?  ;) [//content.invisioncic.com/Mfantflight/emoticons/default_wink.png]

I still don't have the images for The Old Forest (nor the time to scan the cards myself) so that will have to wait a while longer. The holidays will give me more time for maintenance, and The Old Forest is definitely on the list.

## 6 [PsychoRocka on October 20, 2014](https://community.fantasyflightgames.com/topic/125224-hall-of-beorn-card-search-fog-on-the-barrow-downs-w-images-and-advanced-search/?do=findComment&comment=1305375)

I'll take some pics tomorrow of some old forest cards and post them until beorn has them =)

## 7 [Gizlivadi on October 20, 2014](https://community.fantasyflightgames.com/topic/125224-hall-of-beorn-card-search-fog-on-the-barrow-downs-w-images-and-advanced-search/?do=findComment&comment=1305421)

Awesome art on these cards. Really grim and atmospheric. "I'm waiting for you"? More like "Return the slaaab!"

## 8 [joezim007 on October 20, 2014](https://community.fantasyflightgames.com/topic/125224-hall-of-beorn-card-search-fog-on-the-barrow-downs-w-images-and-advanced-search/?do=findComment&comment=1305474)

Quick feedback:

 

- Your first example in the opening post you used "=" instead of ":". Confused me for a bit.

 

- Make words case-insensitive: I have to type "Tactics" and can't type "tactics". Same with pretty much all values. Just a nicety for people and can prevent typo issues.

## 9 [danpoage on October 20, 2014](https://community.fantasyflightgames.com/topic/125224-hall-of-beorn-card-search-fog-on-the-barrow-downs-w-images-and-advanced-search/?do=findComment&comment=1305532)

> Quick feedback:
> 
>  
> 
> - Your first example in the opening post you used "=" instead of ":". Confused me for a bit.
> 
>  
> 
> - Make words case-insensitive: I have to type "Tactics" and can't type "tactics". Same with pretty much all values. Just a nicety for people and can prevent typo issues.

 

You can use either ":" or "=" after a filter, it understands either delimiter. I will clarify this in my blog post.

Filter names and values will be case-insensitive in the next release. Thanks for the feedback.

## 10 [danpoage on October 23, 2014](https://community.fantasyflightgames.com/topic/125224-hall-of-beorn-card-search-fog-on-the-barrow-downs-w-images-and-advanced-search/?do=findComment&comment=1308710)

The latest update is live now and has more advanced search goodness:

1. Numeric filters now support ranges with a - character. For example: +rcost:2,3,4,5 can instead be written as +rcost:2-5

2. Numeric filters now support < and > comparison. For example: +rcost:>2 returns cards with a resource cost greater than 2.

3. Added a unique filter. It works just like the unique checkbox, except that it can be negated.

Here is an example that uses all of these new features:

+trait:silvan +rcost:2-4, +atk:>1 -unique

This returns all non-unique Silvan cards with a resource cost between 2 and 4 (inclusive) and an attack strength greater than 1.

Enjoy, and please do give feedback if you find anything that is not working or think of a way that advanced search can be improved.

## 11 [PsychoRocka on October 23, 2014](https://community.fantasyflightgames.com/topic/125224-hall-of-beorn-card-search-fog-on-the-barrow-downs-w-images-and-advanced-search/?do=findComment&comment=1308951)

Just uploaded all the old forest artwork for anyone who doesn't have it yet and wants to see the art :D [//content.invisioncic.com/Mfantflight/emoticons/default_biggrin.png] All the card text spoilers are already up on Hall of Beorn card search so I didn't include the 2A stages. Sorry a couple of the pics are a little blurry but Beorn should have perfect spoilers up eventually this is just for the meantime

 

http://imgur.com/a/5a6JI [http://imgur.com/a/5a6JI]

Edited October 23, 2014 by PsychoRocka

## 12 [PsychoRocka on October 23, 2014](https://community.fantasyflightgames.com/topic/125224-hall-of-beorn-card-search-fog-on-the-barrow-downs-w-images-and-advanced-search/?do=findComment&comment=1308954)

Its cool how the Tom Bombadil ally objective card is IDENTICAL in The Old Forest and Fog on the Barrowdowns

