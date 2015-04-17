# Flip32

[[_TOC_]]

[[/uploads/flip32-02.jpg]]

Flip32 (aka DragonFly32) is a small (36x36mm) flight control based on 32-bit STM32 processor running at 72MHz. With current attitude code from MultiWii, CPU spends more than 90% time at idle.

* [Flip 32+ User Manual](http://www.rcgroups.com/forums/showthread.php?t=2212634)

## Models

There are two Flip32 models being sold today: **6dof** and **10dof**. The difference is that 10dof includes Digital Compass (HMC5883L) and Barometer (MS5611) sensors. The 6dof version is generally slightly cheaper.

## Specifications

* Size: 36mm x 36mm
* Versions: 10dof or 6dof
* 3-axis MEMS gyro+accelerometer (MPU6050)
* 3-axis magenetometer (HMC5883L)
* Pressure sensor (MS5611)
* Flexible motor output, support various airframe types: Quad/Hexa/Tri/Bi/Y4/Y6/Octo/Camera Gimbal (Default is Quad-X)
* Up to 8 ch RC input-supports standrad receivers (PWM), PPM Sum receiver (FrSky, etc), or Spektrum Stellite receiver
* Battery voltage monitoring
* Modern 32 processor running at3.3V/72MHz (STM32F103CB)
* Onboard MicroUSB for setup and configuration (Fully [[Cleanflight]] compatible)
* Support [[Bluetooth]] module

## Pins

[[/uploads/flip32-pins.jpg]]

## Video Guides

Watch [this 7 part Flip32 walkthrough](https://www.youtube.com/playlist?list=PLcgC1hv_h_0YaeVh5UI0XY5iC4p97ljv1) by [RC JOSEB](https://www.youtube.com/channel/UC8x4XDXGAa4RqTaBuUcMicQ).

### Overview, Cleanflight install and comparison with Naze32

<<YouTube(SZdIWCOigoY)>>

> In this video we explore the Flip32, another version of the excellent Naze32 full board. The Flip32 provides the same features as the full Naze32 but also offers simpler receiver connections and more places to use to power external devices like the GPS, MinimOSD and Bluetooth adapters.
>
> The aim of this video is to cover the differences between this board and the Naze32 so you can watch the full Naze32 series and be able to configure and install all the add-ons and extras with this cheaper version too. 


### DragonFly32 Flight Controller Minimalistic Pin Setup

<<YouTube(geuoSKtjHes)>>

> How to setup your Dragon32 Flight Controller with minimal pins for a nice clean build. This method takes advantage of CPPM so you only have one wire from the receiver to the flight controller and only using signal cables from the ESC's to the FC with exception of one for power to the FC. 