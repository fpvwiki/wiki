# Bluetooth

TODO: WIP

Boards like [[Naze32]] and [[Flip32]] support an external Bluetooth module which lets you interact and configure your [[Flight  Controller]] via a phone application.

There are two possible scenarios when you are trying to connect a Bluetooth module:

1. Everything just works, you are able to connect to the module and the phone application works as expected. Be happy!
2. You are able to connect to the module but no data comes through. Things aren't horrible but you will have to tinker with the module to get it to work with your [[Flight Controller]].

## Configuring The Bluetooth Module

If you can pair with the module but no data is coming through, that means the baud rate is not set correctly. To fix the problem you must change your Bluetooth module baud rate to `115200` (this number was verified for [[Flip32]] [[Flight Controller]]).

### Via Arduino

If you happen to have an Arduino laying around and you are comfortable using it - it's very easy to change the baud rate. **Most of the Arduino section was based on the information by [Oscar Liang](http://blog.oscarliang.net/multiwii-bluetooth-change-baud-rate/).**

* If you have `HC-05` module you'll need pin 34 of the module high to enter AT mode.
* If you have `HC-06` module, as long as it's not paired via BT, you should be in AT mode without having to do anything special.

Here's the pin out. Please note this is an example for the `HC-05` Bluetooth module. For `HC-06` you can simply omit the `KEY` pin.

[[/uploads/arduino-bluetooth-change-baud-rate-connection.jpg]]
