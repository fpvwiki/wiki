# Bluetooth

TODO: WIP

Boards like [[Naze32]] and [[Flip32]] support an external Bluetooth module which lets you interact and configure your [[Flight  Controller]] via a phone application.

There are two possible scenarios when you are trying to connect a Bluetooth module:

1. Everything just works, you are able to connect to the module and the phone application works as expected. Be happy!
2. You are able to connect to the module but no data comes through. Things aren't horrible but you will have to tinker with the module to get it to work with your [[Flight Controller]].

## Configuring The Bluetooth Module

* If you have `HC-05` module you'll need pin 34 of the modu.le high to enter AT mode.
* If you have `HC-06` module, as long as it's not paired via BT, you should be in AT mode without having to do anything special.