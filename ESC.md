# ESC

[[_TOC_]]

[[/uploads/esc-generic.jpg]]

BEC stands for **Battery Eliminator Circuit**. In the old days of electric flight you had to use a separate 4.8V battery pack to power your receiver and servos. As the hobby evolved, speed controls started to include Battery Eliminator Circuits to power your receiver and servos, allowing you to get rid of the extra receiver battery pack.

## What's inside: ESCs

<<YouTube(22CpRl2_TRI)>>

> RCModelReviews takes you inside an electronic speed controller (ESC) for RC planes and discusses a little about how they work.

## FAQ

### BEC

* The BEC on the [[ESC]] can supply power to the [[Flight Controller]] which in turn powers [[Receiver]] which can generally take only 5V. For example, [[Naze32]] can take up to 16V which it will directly pass to the [[Receiver]] (and burn it if it's more than 5V). If your [[ESC]]s don't have BEC, you can add a separate BEC, otherwise known as a [[Voltage Regulator]] either before [[Flight Controller]] or before the [[Receiver]].

* [To BEC or Not To BEC](http://www.stefanv.com/electronics/qf200105.html)
  
  > That is the question. Whether ’tis nobler in the mind to suffer receiver pack failure, or to risk running the motor battery too low to power the electronics?

