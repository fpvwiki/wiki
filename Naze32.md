# Naze32

[[_TOC_]]

[[/uploads/AcroNaze32.jpg]]

## Specifications

* Size: 36mm x 36mm
* Versions: 10dof or 6dof
* 5.3 grams (no headers, 7.3 grams with)
* 2000 degrees/second 3-axis MEMS gyro + accelerometer (MPU6050)
* 3-axis magnetometer (HMC5883L)
* Pressure sensor (MS5611)
* Flexible motor outputs, support various airframe types: Quad/Hexa/Tri/Bi/Y4/Y6/Octo/Camera Gimbal. (Default is Quad-X)
* Up to 8 ch RC input - supports standard receivers (PWM), PPM Sum receiver (FrSky, etc), or Spektrum Satellite receiver.
* Built in FrSky telemetry inverter (shared w/main port)
* Battery voltage monitoring
* Modern 32-bit processor running at 3.3V/72MHz (STM32F103CB).
* 16Mbit onboard SPI flash
* Onboard MicroUSB for setup and configuration (Fully [[Cleanflight]] compatible)
* Support [[Bluetooth]] module

## Models

There are two Naze32 models being sold today: **6dof** and **10dof**. The difference is that 10dof includes Digital Compass (HMC5883L) and Barometer (MS5611) sensors. The 6dof version is generally about 50% the cost of 10dof.

**Please note** that often [[Flip32]] 10dof is [being sold as Naze32 10dof](http://www.besthobbymall.com/multirotors/multirotor-control/naze32-flight-controller-with-32-bit-stm32-for-multicopter-10dof.html) version. While technically [[Flip32]] is nearly exact copy, technically it's not the same board. 

## Setup Guides

See the [amazing documentation](http://www.abusemark.com/downloads/naze32_rev3.pdf) put together by *AbuseMarK* (if the previous link is broken, [[here|uploads/naze32_rev3.pdf]] is v3 a snapshot).

### How to setup a Naze32 Acro / Funfly Flight Controller

<<YouTube(rj6IXA2hDW0)>>

This is THE guide to Naze32.

### Naze 32 Board Setup by Flite Test

<<YouTube(l1GWtlRk45Q)>>

Make sure to checkout [accompanying article](http://flitetest.com/articles/naze-32-board-setup).