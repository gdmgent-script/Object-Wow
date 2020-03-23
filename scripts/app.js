
// Stap 1: Maak een object met  naam, ras, wapen, talenten: (nested object) naam en level
let player = {
    name: 'Vengeful Outsider',
    race: 'Blood Elf',
    weapon: 'Axe',
    image: './images/blood-elf.png',
    talents: [
        {
            name: 'Demon Hunter',
            level: 2
        },
        {
            name: 'Magic Resistance',
            level: 4
        },
        {
            name: 'Arcane Affinity',
            level: 2
        }
    ],
    //Stap 2: Maak de methode .greet aan
    greet: function() {
        // return Hi, i'm Vengeful Outsider of the Blood Elf race
        return `Hi, I'm ${this.name} of the ${this.race} race`;
    },
    //Stap 3: Maak de methode .greet aan
    fight: function() {
         //Get random talent
        let talenten = this.talents;
        let randomTalent = talenten[Math.floor(Math.random()*talenten.length)];
        // return Vengeful Outsider vecht terug met haar Axe en magic resistance
        return `${this.name} vecht terug met haar ${this.weapon} en ${randomTalent.name}`;

    }
}

player.enchantment = 'Simsalabim';
let ul = document.getElementById('player');
//Loop door alle properties
for(let playerProperty in player) {

    // waarde ophalen
    let value = player[playerProperty];
    
    // controleer op datatype
    console.log(typeof value);

    if(playerProperty == 'image') {
        let content = document.getElementById('content');
        let img = document.createElement('img');
        img.src = value;
        content.appendChild(img);
    }
    else if(typeof value == 'string') {
        // li aanmaken en toevoegen aan de ul
        let li = document.createElement('li');
        li.innerHTML = '<strong>' + playerProperty + '</strong>: ' + value;    
        ul.appendChild(li);
    }
}

// talenten als geneste lijst in de li steken
let talentsLi = document.createElement('li');
let nestedUl = document.createElement('ul');

// talents
for(let talent of player.talents) {
    let li = document.createElement('li');
        li.innerHTML = '<strong>' + talent.name + '</strong>: ' + talent.level;    
        nestedUl.appendChild(li);
}

// ul in listitem steken
talentsLi.appendChild(nestedUl);
// listitem in ul steken
ul.appendChild(talentsLi);


player.race = 'Dwarf';

let greetingLi = document.createElement('li');
greetingLi.innerHTML = player.greet();
ul.appendChild(greetingLi);


let fightLi = document.createElement('li');
fightLi.innerHTML = player.fight();
ul.appendChild(fightLi);

