# Overcraft PDB

[[_TOC_]]

[[/uploads/overcraft-pdb-beauty-shot.jpg]]

This is an integrated PDB board for the [[ZMR-250]] frame. [Official Page](http://www.rcgroups.com/forums/showthread.php?t=2260906) is the RCGroups thread. Price is around under $10.

## Features

*   **Esc integration:** Solder your esc on the board. You can also solder the signal wires to the pdb, so you even has less wires around there!

*   **3s and 4s compatibility**. You can power 3s and 4s batteries. Also you can power 2s batteries, but most motors run at 3 and 4s.

*   **Multiples FC supported:** Naze32, Flip32, CC3D, kk board and any other 36x36mm.

*   **Onboard 5v BEC:** This board uses the lm2940 regulator to provide an output of 5v and 1 amp. You can power your flight control with that bec and buy OPTO esc. Also you can buy your normal esc, and power the flight control from the bec of the esc #1.  You decide what you prefer

*   **Fpv filter:** Esc make noise to the fpv system, so this board has a inbuilt fpv filter to avoid that noise. All outputs are filtered on the pdb.

*   **Optional 4S battery fpv regulator:** If you want to run your fpv at 4S, you should know that some systems run only at 12v. So you can easily plug a pololu regulator step down, or step up-down and thats it!.  [https://www.pololu.com/product/2846](https://www.pololu.com/product/2846) ([kind #1](https://www.pololu.com/category/131/step-down-voltage-regulators) [kind #2](https://www.pololu.com/category/133/step-up-step-down-voltage-regulators)) Not only pololus regulators, any other regulators accepted as well, most people buy them on ebay.

*   **Front Camera 3 power options**: To cover all kinds of cameras, front camera can be powered from the battery, from the bec, or from the 4s regulator (in case you need it 12v from 4s).

*   **Video transmitter power options:** Same as front camera, the video could be powered from the battery or the 4s 12v optinal regulator. But also it can be used into the osd. In that case solder the AV wire to the OSD pad instead of the Camera AV, and you have your minim OSD full wired. You dont need to wire anything else!

*   **Minim OSD integration**. Minim OSD its very small, and it can be soldered under the FC, so you dont lost room for other components. It shows you the FC stats into your fpv, such as level, current voltage, bar, even rssi or gps speed and compass. Minim OSD kv version supported as well. Wires are minimal, you only need to solder the rx and tx pads next to the FC, and they are really close to it.

*   **Evolved leg copper retraction.** In the past some shorts happends using metalic spacers who bit the solder mask with the time. Carbon fiber its conductive, so in this version the shape of the legs has been retracted front the copper to keep a very solid anti-shorts system. Also any spacer has a retraction of 8mm to support metalic and nylon spacers.

*   **Friendly Esc Pads**: Esc pads angled to provide a easy solder even if you place your esc on the legs. There are also holes to provide wire access to the space between plates in case you plug your esc on the middle.

*   **Auxiliary Front esc pads**: Some people get wide lens on the fron camera, so they need to retract the camera much as possible. Front camera pads are retracted as well, but now you also have alternative power to avoid nuts from the camera hit the wires.

*   **Optional Inbuild leds:** This board has 20 leds on it, but there is a optional jumper to allow turning they off. Jumper its shorted by default, you dont need to short jumpers to get the board running as normal. Also you can use this solder jump to turn the leds on or off when you want with electronics.

*   **Big holes**: Big holes to make the board weigh less.

*   **Optional inbuilt Buzzer**: PDB includes a buzzer, just solder it its optional. Easy solder. Very usefull if you lost your quadcopter and you want to find it, or you want to setup your profiles without looking at the leds of the FC.

*   **CleanFlight LEd System**. Buy some WS2812 or WS2812b led stips, and make your quad cooler.

## Assembly

[This RCGroups thread](http://www.rcgroups.com/forums/showpost.php?p=30805173&postcount=723) has very detailed assembly instructions.

[[/uploads/overcraft-pdb.png]]
