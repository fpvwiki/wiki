# PID

[[_TOC_]]

## Basic PID tuning explanation

For achieving the best results with tuning it's advisable to tune in rate/acro mode first. Start with default PID's and try to fly.

### P Gain
Increase the P gain (Proportional) as long till your stick input feels sharp enough for you. Too low P Gain will result in sluggish multirotor and hard to control. To high P gain can result in vibrations and perhaps too sharp feeling on the sticks, where you can get some bouncing.

### I gain

I gain (Integral) is additional to the P gain and it makes your multirotor to hold the desired angle properly. If you for example have feeling that your multirotor is drifting on pitch or roll you can increase it till it holds angle better. Too high I gain can result in twitching and slower oscillations.

### D Gain

D gain (Derivative) is the last gain to play with it and it only slows down the edges of P gain/reaction. After stopping the stick movement D gain will smooth out the last last part of the correction and you can get rid of the bounce effect if it is there. It also can remove the last bit of wobbles caused by the wind as it will smooth out the PID effect.

### TPA

If you let's say have your multi flying really well and you are comfortable with your PID's, but still have some oscillations on full throttle or higher throttle ranges you could add some TPA. With TPA basically your PID's will stay the same till 50% throttle, but above that those will be linearly decreased. See a visual presentation of TPA in action.

## Reading

* [Quadcopter PID Explained and Tuning](http://blog.oscarliang.net/quadcopter-pid-explained-tuning/)

## Video Guides

### PID Tuning

<<YouTube(hqySmoprzpM)>>

This is probably one of the best PID tuning videos, make sure to watch [part 1](https://www.youtube.com/watch?v=hqySmoprzpM) and [part 2](https://www.youtube.com/watch?v=UBgYEstAfvY).