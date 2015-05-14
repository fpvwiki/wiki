# The Variable C And How It Applies

> This is a backup copy of the article by [Chris aka TJinGuy](https://sites.google.com/site/tjinguytech/home) and is here in case the [source article](https://sites.google.com/site/tjinguytech/charging-how-tos/the-variable-c) ever goes offline. This page is currently unlinked.

## The variable C

Even though C is printed in some way on every lipo we buy, many people do not fully understand what it is or how to figure it out. Simply put C is a variable just like X from your algebra days. It is tied to a capacity of a lipo and as such can be used to figure things like charge rates and maximum continuous discharge rates. 

Since C is tied to the capacity of the pack, it can be used to estimate charge times, discharge times and stress. For example if a pack is discharged at 1C, it will be totally discharged in 1 hour. It will also be charged in 1 hour when fully discharged. At 2C those time are cut roughly in half and at 3C those times will be cut down to roughly 1/3rd.

Figuring out what C is for a particular pack is simple, just take the capacity of the pack in mAh, divide it by 1000 to get Ah and then drop the "h", that is C. 

For example C for a 2200mAh 3s pack is 2.2A. Start by dividing 2200mAh by 1000 to get 2.2Ah. Then drop the "h" to get C=2.2A. It is as simple as that but here are a few other examples

```
850mAh 2s 15C lipo
C = .85A

5000 6s 35C/45C lipo
C = 5A

2500 12s 25C/50C lipo
C = 2.5A
```

**Important concept:** Note how the number of cells in each pack, as well as other ratings, have no impact on C. Only the capacity is used to determine C.

## Using C

Now that we know how to find C, we can use it to figure out important numbers like the 1C charge rate for a pack or how many amps a pack can output continuously. So take the first example pack, a 2200mAh 3s pack. What is the 1C charge rate? We just multiply the numbers to find out.

The 1C charge rate for a 2200mAh 3s pack

```
1C = 1 * C 
1C = 1 * (2.2A) = 2.2A
```

Next the 2C charge rate for the same pack

```
2C = 2 * (2.2A) = 4.4A
```

Lastly the 5C charge rate for the same pack

```
5C = 5 * (2.2A) = 11A
```

Now that we know C and how to calculate the charge rate for the 2200 3s pack, lets expand on the uses for C and figure out the maximum continuous discharge rating, or maximum amps. Say the above 2200mAh pack is rated at 25C/40C. This means that the continuous discharge rating of the pack is 25C and the burst rating is 40C.

```
25C = 25 * C = 25 * (2.2A) = 55A
40C = 40 * C = 40 * (2.2A) = 88A
```

For repetition sake, lets do the same exercise above with a different pack. This time lets use a 6s 5000mAh 20C/30C pack. First the 1C, 2C and 5C charge rates

```
1C = 1 * (5.0A) = 5A
2C = 2 * (5.0A) = 10A
5C = 5 * (5.0A) = 25A
```

Now for the max discharge ratings, both 20C continuous and 30C burst.

```
20C = 20 * C = 20 * (5.0A) = 100A
30C = 30 * C = 30 * (5.0A) = 150A
```