const express = require('express');
const router = express.Router();


const pokemon = [{
        id: 1,
        name: 'Bulbasaur',
        level: 30,
        img: 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png'
    },
    {
        id: 3,
        name: 'Venusaur',
        level: 36,
        img: 'https://cdn.bulbagarden.net/upload/thumb/a/ae/003Venusaur.png/250px-003Venusaur.png'
    },
    {
        id: 2,
        name: 'Ivysaur',
        level: 50,
        img: 'https://cdn.bulbagarden.net/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png'
    },
    {
        id: 5,
        name: 'Charmeleon',
        level: 40,
        img: 'https://cdn.bulbagarden.net/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png'
    },
    {
        id: 4,
        name: 'Charmander',
        level: 21,
        img: 'https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png'
    },
    {
        id: 7,
        name: 'Squirtle',
        level: 2,
        img: 'https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png'
    },
    {
        id: 6,
        name: 'Charizard',
        level: 100,
        img: 'https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png'
    },
    {
        id: 8,
        name: 'Wartortle',
        level: 58,
        img: 'https://cdn.bulbagarden.net/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png'
    },
    {
        id: 10,
        name: 'Caterpie',
        level: 69,
        img: 'https://cdn.bulbagarden.net/upload/thumb/5/5d/010Caterpie.png/250px-010Caterpie.png'
    },
    {
        id: 9,
        name: 'Blastoise',
        level: 72,
        img: 'https://cdn.bulbagarden.net/upload/thumb/0/02/009Blastoise.png/250px-009Blastoise.png'
    },
]


router.get('/', (req, res) => {
    res.send(pokemon);
});

module.exports = router;