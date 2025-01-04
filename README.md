# Servo calibration
## Goal:
Find where is the 0 on you servos,
Find what is the maximum value accepted by the connected servo, and where it is.

## Requirements:
### Hardware
* [micro:bit](https://microbit.org/)
* [DFRobot's micro:Driver - Driver Expansion Board for micro:bit ](https://www.dfrobot.com/product-1738.html)
### Software
* [MakeCode](makecode.microbit.org)
* extension board's library : [DFRobot/pxt-motor](https://github.com/DFRobot/pxt-motor)


## Usage:
1. unplug your micro:bit 
1. Disconnect everything from board's all servo pins.
1. Connect all servo motors to be tested on servo connectors.
1. plug your micro:bit 

Once connected:
* At start, all servos will receive a command to move to position 0.
* on buttonA pressed : servo position will increase by 30
* on buttonB pressed : servo position will decrease by 10
* on buttonAandB pressed : servo position will be set to 0






> Ouvrir cette page à [https://taccart.github.io/amakerservocalibration/](https://taccart.github.io/amakerservocalibration/)

## Utiliser comme extension

Ce dépôt peut être ajouté en tant qu'**extension** dans MakeCode.

* ouvrir [https://makecode.microbit.org/](https://makecode.microbit.org/)
* cliquez sur **Nouveau projet**
* cliquez sur **Extensions** dans le menu engrenage
* recherchez **https://github.com/taccart/amakerservocalibration** et importez

## Éditer ce projet

Éditer ce dépôt dans MakeCode.

* ouvrir [https://makecode.microbit.org/](https://makecode.microbit.org/)
* cliquez sur **Importer** puis cliquez sur **Importer l'URL **
* collez **https://github.com/taccart/amakerservocalibration** et cliquez sur importer

#### Métadonnées (utilisées pour la recherche, le rendu)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
