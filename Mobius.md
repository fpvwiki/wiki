# Mobius

[[_TOC_]]

[[/uploads/mobius.jpg]]

[[/uploads/mobius-overview.jpg]]

## Specifications

* Standard microSDHC cards up to 32GB are accepted for recording. Class 4 cards should work fine and are recommended. 
* The stock 520 mAH lipo battery can power the camera for approximately 80-90 min. 
* The higher capacity 820 mAH battery can power the camera for about 140 min.
* Approximate weight:
  * Stock camera (inc. battery & memory card): 39g (add 2g. for the wider angle lens)
  * Case with heat sink: 12g.
  * Stock battery (520 mAh): 10g
  * Optional battery (820 mAH): 15g
  * Circuit board, lens module, & memory card: 17g
  * Mounting base plate without screw stud: 7g
  * Mounting base plate with screw stud: 10g
* Power consumption:
  * No battery connected:
    * Standby mode: 225mA @ 4.97v
    * Standby mode with AV-Out enabled: 265mA @ 4.97v
    * Recording 1080p: 305mA @ 4.97v
    * Recording 1080p with AV-OUT enabled: 330mA @ 4.96v
  * Battery connected:
    * Battery being charged from flat, powered off: 186mA @ 4.97v
    * Battery being charged from flat, recording 1080p: average 505mA @ 4.95v

## Wide Angle vs Regular

[[/uploads/mobius-lens.jpg]] 

Mobius comes in two flavors:

1. Regular ~85 degree lens (on the right)
2. Wide angle ~120 degree lens (on the left)

Each lens can be purchased separately and replacing existing lens is a matter of a few screws, unplugging existing lens and plugging in the new one. Could be done in under 5 minutes.

## FPV Setup

Mobius could be used as the recording and FPV camera at the same time if plugged in directly into the video transmitter.

[[/uploads/mobius-fpv-setup.jpg]] 

The USB pinout is very straightforward and pretty much any USB type B mini connector could be adapted for this purpose.

[[/uploads/mobius-fpv-usb.jpg]]

## Circuit Board

* The circuit board has a reset button and easy disconnects for the battery and CMOS ribbon cable.
* The charging and external communication port is a standard 5 pin mini-USB socket. 
* The V3 circuit board released in Oct. 2014 has an added over-voltage protection IC on the USB external power input which will disconnect the external power if the voltage is between 5.6V to 28V. 
* The CMOS imager and DSP chips used in the camera are confidential at this point at the developer's request. 

[[/uploads/mobius-circuit-board-01.jpg]]

[[/uploads/mobius-circuit-board-02.jpg]]

## Video Guides

### Graduated filter hack for the Mobius action cam

<<YouTube(2psCOseCGCo)>>

> Graduated filter hack for the Mobius action cam. This hack is very useful when you use the Mobius as a dashcam. This may work on most dashcams or action cams but the effect may vary depending on the focal length of the lens.

### Assembling a hidden dash-cam from a Mobius Camera and some accessories

<<YouTube(9qx5fgy8f28)>>

> Using a Mobius camera, a wide-angle lens, a super capacitor and a lens extender wire to make a hidden dash cam.

Or... a way to place a Mobius camera body in a different location away from the lens.

### How to Build a Mobius Actioncam Power Cable with Video Out

<<YouTube(u9uD3X6-ndQ)>>

> This video was a build request from some local flyers who fly Mobius cameras in their rigs and needed a way to plug them into an onboard power source to supplement the camera's internal battery. I take it a step further and show you how to enable video out mode on the Mobius so you can use this as either a flight camera or in a 2 camera rig (using a video switcher).