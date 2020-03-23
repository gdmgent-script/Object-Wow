# Object World Of Warcraft

4 categories

- Only the exercise ***master***
- Exercise + steps in comments ***guided***
- Exercise + steps in comments + start-code ***extra-guided***
- Solution ***solution***


Oefening - normal
-------

### Stap 1

Maak een object aan van een WoW-personage naar keuze. [WOW - Races](https://worldofwarcraft.com/en-us/game/races)

```
let player = {...}
```

Het object moet uit volgende properties bestaan:

```
    naam (string)
    ras (string)
    wapen (string)
    talenten (genest object)
        naam (string)
        level (number) (van 0 tot 5)
```

Loop door alle properties van het object en zet ze in de DOM.
(in list-items)

### Stap 2

Voeg een methode `.greet()` toe aan het object.

Als je de methode aanspreekt moet volgende string gereturned worden:

`Aye, ik ben Xing-Hao van het ras Pandaren.`

De gereturnede waarde moet je ook in een DOM-element plaatsen.

### Stap 3

Voeg een methode `.fight()` toe aan het object.

Als je die methode aanspreekt moet er volgende string geretourneerd worden:

`Xing-Hao vecht terug met zijn {wapen} en {talent naar keuze}`

**uitdaging:** maar er een random talent van.

###  Stap 4

Zet een passende afbeelding in de images-folder van de oefeningenmap en voeg het relatief pad naar die afbeelding als property toe aan het player-object.
(vb image: './images/pandaren.png')

Scrijf onderaan je script een stukje code die:

- een image-element creëert
- `let playerImage = document.createElement('img');`
- het pad uit het image-property van het player-object toewijst aan het `src-attribuut` van `playerImage`.
- `playerImage` wordt aan de DOM toegevoegd
- (tip: ......`appendChild(playerImage);)`

