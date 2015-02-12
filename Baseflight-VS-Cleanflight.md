# Baseflight VS Cleanflight

## Baseflight vs CleanFlight, facts & proofs [DRAMA]

(by cTn-dev, [source](https://www.reddit.com/r/Multicopter/comments/2qabqh/baseflight_vs_cleanflight_facts_proofs_drama/))

Hi, I am pretty sure most of you heard of Baseflight (the nifty firmware running on the so popular naze boards). Some of you probably also heard, or will hear about CleanFlight, which tries to advertise it self as "Clean-code version of baseflight flight-controller".
 
This reddit thread aims to cleanup some confusion, mostly for people that are just getting into the hobby and are deciding what to use, but I also want to educate current users, so they would know a little more of how did the software/firmware they use come together.
 
To give this post some credibility, I am cTn, I have been part of the multirotor community for a little bit over 2 years, first as a regular hobbyist and later on as a developer, i am the author of:

* Baseflight - Configurator
* openLRSng - Configurator
* RapidFlash
 
All I am stating in this thread are pure facts which I will try to back up with as much evidence as I have, but everyone is entitled to their own opinion and if you decide to think that I am just full of crap, you are certainly free to do so as all I am trying is to do, is to get the word out, everyone reading this can make up their own mind.
 
The main reason for writing all of this is the fact that i "had to" turn my most successful project (Baseflight - Configurator) from open source to closed source / freeware.
 
Since CleanFlights hostile fork of my app kept pulling the latest code to their monstrosity called CleanFlight - Configurator, which included GPL covered code and big pile of licensed artwork (all those nice motor diagrams, and 3D models) that you might have seen in my app, they were submitted with exclusive permission to use them in my project, so all of the baseflight users out there could enjoy them.
 
While I am aware of the fact that due to me licensing the code under GPL I have no "legit" claim to tell somebody to not do something, you would have thought people/developers would have listened if you told them that you are really against doing that or that since the "community relations" weren't a problem for me, and while working on the project for 2 years I certainly learned how to compromise when its needed.
 
Sadly, what happened is an exact opposite, the hostile fork of my app was added to the chrome web store, where in the beginning it was simply a plain 1:1 clone of what I made with a new app name and new authors name, actually to this day he haven't even bothered to update the screenshots in the chrome web store that are showing that no real work has been done at that stage, I will link some screenshots taken today (2014/12/24) since he will go ahead and update them when he will hear about this post, I will link them below.

* http://i.imgur.com/adLDw4h.png
* http://i.imgur.com/VktMXKt.png
 
Oh and fun fact, even back then, you see that little motor svg in the corner? Yeah, against my will and the underlying licence, this stuff went live.
 
With this in mind, we contacted google (actually 3 times) and we requested removal of the copyrighted content due to a valid copyright claim, unfortunately, it never went through.
 
But I jumped ahead, why hydra (the author of CleanFlight) even needed my app in the first place, why weren't the required changes ever merged into the respective projects?
 
Well here is the thing, hydra refused to comply with the requirements set by the maintainer of firmware, after couple of heated discussions he got stripped of voice privileges on the irc channel (where most developers, including me, gather to do what we do best, make cool things), shortly after this he decided to troll the channel by avoiding the -voice joining with different nicknames, different ip addresses, etc... after this he received a permanent ban on the channel.

Even after all of this he decided to troll the github repository with a couple of stupid pull request, at this point he received a user block from the multiwii github account so no more troll content would leak in.
 
Regular person would think, "well there is that, stuff happened, move along", oh boy was I surprised to see my app forked, mutilated and pushed to the chrome web store, to troll people even more he registered the domain www.baseflight.com and make it an redirect to www.cleanflight.com.
 
He is pretty open about "his version of the story", which you can find here https://www.youtube.com/watch?v=RuhNqrUFaj4#t=300 it would seem by his definition of GPL is, if the maintainer don't like it, you can go away and do your own thing, yeah that's certainly a cool approach, take years of work that somebody put into something, slap your name on top of it, ditch all the references from original author so he never gets anything from the mutilated clone and move along.
 
With all of this crap happening I thought that at least some last bit of decency would prevent him from violating the project even more (that naivety right?) after about 2-3 months of failing to maintain his monstrosity of an app, he simple goes ahead another step by pulling all the changes I made during that period of time (carefully avoiding the license change I made) and once again reaping all the benefits of someone else's work, slapping his name on it, and moving along.
 
Its today when I decided to take my project to a private repository and protect the code output for every new app release from this date. I don't have time to deal with trolling and garbage this guy creates every week, I will rather spend this time writing some nice code for the project.

I am expecting a lot of criticism for doing this (I already received quite a bit from my friends, which pains me greatly) but this is what I decided to do and everyone can just use whatever software they like. While over 2 years I didn't really receive a lot of code from external contributors I highly value the code and content that was submitted into the project which just made the project so much better and it made the decision to close the source so much harder.
 
I will leave this post with two more screenshot on the bottom which will show a bug ticket content listing most of the problems he created by his incompetence to even pull the latest code since it will most likely be edited or removed to keep his made up story intact.

* http://i.imgur.com/WaFNd1K.png
* http://i.imgur.com/BNo64k8.png
 
I am really looking forward to see how he will cope with adding new features and fixing bugs since he wasn't able contribute literally anything worthwhile, his changes are embarrassing as the green baseflight logo that he is using as the application icon, while my configurator is getting better every day, having over 16 000 happy users now and growing.
 
I wish everyone in the world (excluding one person mentioned above) happy holidays.
 
Stefan



