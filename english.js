
function create() {
    let actor = document.getElementById('actor');
    let food = document.getElementById('food');
    let animal = document.getElementById('animal');
    let adjective = document.getElementById('adjective');
    let result = document.getElementById('result');

    if (actor.value === '' || food.value === '' || animal.value === '' || adjective.value === '') {
        alert('Honey, don’t be clever, fill in all the fields!');
        return;
    }

    let stories = [
        `A kid named ${actor.value}, has ${food.value}, but the ${animal.value} dropped it, and he is very ${adjective.value}`,
        `Many years ago there was a man named ${actor.value}, he loved to eat only ${food.value}. One day it ended because the ${animal.value} finished it all, and he was very ${adjective.value}`,
        `Hello, my name is ${actor.value}, I like to eat only ${food.value}. At least I did until the ${animal.value} ate it all and you should know ${animal.value} is a ${adjective.value} animal`,
        `The ${animal.value} is called ${actor.value}, he loves to dance and eat ${food.value} even though he dances like ${adjective.value}`,   
        `My dad's name is ${actor.value}, he loves to play chess and he also loves to eat ${food.value}. He dances like ${animal.value} and you should know he is ${adjective.value}`,
        `${actor.value} the ${adjective.value} saw ${animal.value}, he was ${adjective.value} and the ${animal.value} ate ${food.value}`,
        `${actor.value} the ${adjective.value} played with the ${animal.value} and ate ${food.value}`,
        `${actor.value} the ${adjective.value} saw ${animal.value}, by the way, was ${adjective.value} eating ${food.value}.`,
        `${actor.value} the ${adjective.value} played with the ${adjective.value} ${animal.value} by a tree with ${food.value}.`,
        `${actor.value} the ${adjective.value} gave the ${adjective.value} ${animal.value} a piece of ${food.value}.`,
        `${actor.value} the ${adjective.value} fed the ${adjective.value} ${animal.value} a treat.`,
        `${actor.value} the ${adjective.value} found a ${adjective.value} ${animal.value} eating ${food.value}.`,
        `${actor.value} the ${adjective.value} saw a ${adjective.value} ${animal.value} with ${food.value}.`,
        `${actor.value} the ${adjective.value} played with a ${adjective.value} ${animal.value} eating ${food.value}.`,
        `${actor.value} the ${adjective.value} walked with a ${adjective.value} ${animal.value} eating ${food.value}.`,
        `${actor.value} the ${adjective.value} saw ${animal.value}, the ${adjective.value} eating ${food.value}.`,
        `${actor.value} the ${adjective.value} fed a ${adjective.value} ${animal.value} fresh ${food.value}.`,
    ];

    let num = randomInteger(0, stories.length - 1);
    result.innerHTML = stories[num];
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}