# Bluetooth

[[_TOC_]]

[[/uploads/bluetooth-module.jpg]]

Boards like [[Naze32]] and [[Flip32]] support an external Bluetooth module which lets you interact and configure your [[Flight Controller]] via a phone application.

There are two possible scenarios when you are trying to connect a Bluetooth module:

1. Everything just works, you are able to connect to the module and the phone application works as expected. Be happy!
2. You are able to connect to the module but no data comes through. Things aren't horrible but you will have to tinker with the module to get it to work with your [[Flight Controller]].

## Configuring The Bluetooth Module

If you can pair with the module but no data is coming through, that means the baud rate is not set correctly. To fix the problem you must change your Bluetooth module baud rate to `115200` (this number was verified for [[Flip32]] [[Flight Controller]]).

### Via Arduino

If you happen to have an Arduino laying around and you are comfortable using it - it's very easy to change the baud rate. **Most of the Arduino section was based on the information by [Oscar Liang](http://blog.oscarliang.net/multiwii-bluetooth-change-baud-rate/).**

* If you have `HC-05` module you'll need pin 34 of the module high to enter AT mode.
* If you have `HC-06` module, as long as it's not paired via BT, you should be in AT mode without having to do anything special.

### Identifying Your Module

The easiest way to identify if you have `HC-05` or `HC-06` is just to power it on and scan for Bluetooth devices with your phone. You will see an unpaired device with one or the other name. Pretty straightforward. Alternatively if your module has `JY-MCU` it's *probably* `HC-06`, `ZS-040` is *probably* `HC-05`. There are some additional details on the subject over [at this Instructable](http://www.instructables.com/id/AT-command-mode-of-HC-05-Bluetooth-module/?ALLSTEPS).

### Changing The Baud Rate

Here's the pin out. Please note this is an example for the `HC-05` Bluetooth module. For `HC-06` you can simply omit the `KEY` pin.

[[/uploads/arduino-bluetooth-change-baud-rate-connection.jpg]]

```c
#include <SoftwareSerial.h>

SoftwareSerial BTSerial(10, 11); // RX, TX

void setup() {
  // This pin will pull the module's pin 34 (key pin) HIGH to switch module to AT mode.
  // Simply delete pin 9 mode and write if you have `HC-06` module.
  pinMode(9, OUTPUT); 
  digitalWrite(9, HIGH);

  // Your own module default speed in AT command more. If you are seeing garbage in
  // the serial monitor, it's because the baud rate doesn't match. Keep changing this
  // until it work.
  Serial.begin(9600);
  BTSerial.begin(9600);
  Serial.println("Enter AT commands:");
}

void loop() {
  // Keep reading from BT Module and send to Arduino Serial Monitor
  if (BTSerial.available())
    Serial.write(BTSerial.read());

  // Keep reading from Arduino Serial Monitor and send to BT Module
  if (Serial.available())
    BTSerial.write(Serial.read());
}
```

When you run the program above and see `Enter AT command` prompt, try `AT`. If you see `OK` reply, you have successfully established connection with the Bluetooth module. Give yourself a hi-five!

The only thing you have to do now is to run the `AT+BAUD8` to change the baud rate to `115200`. You can also change the module ID and PIN like so:

```
> AT+BAUD8
< OK115200

> AT+NAMEMultirotorWIKI
< OMultirotorWIKI

> AT+PIN1234
< OK1234
```

## Video Guides

### Flip 32+ Flight Controller Week 7

<<YouTube(BKHp3U-8rV8)>>

This video deals with setting up [[Flip32]] with a Bluetooth module. It shows in details how to set the baud rate and connect the module to [[Flip32]] [[Flight Controller]].