function create() {
    let actor = document.getElementById('actor');
    let food = document.getElementById('food');
    let animal = document.getElementById('animal');
    let adjective = document.getElementById('adjective');
    let result = document.getElementById('result');

    if (actor.value === '' || food.value === '' || animal.value === '' || adjective.value === '') {
        alert('عزیز من، هوشمند نباشید، تمامی فیلدها را پر کنید!');
        return;
    }

    let stories = [
        `یک کودک به نام ${actor.value}، ${food.value} داشت، اما ${animal.value} آن را انداخت و او خیلی ${adjective.value} است`,
        `سال‌ها پیش مردی به نام ${actor.value} وجود داشت، او فقط ${food.value} دوست داشت. یک روز به پایان رسید چون ${animal.value} همه‌چیز را خورد، و او خیلی ${adjective.value} بود`,
        `سلام، نام من ${actor.value} است، من فقط دوست دارم ${food.value} بخورم. حداقل تا زمانی که ${animal.value} همه آن را خورد و باید بدانید ${animal.value} حیوانی ${adjective.value} است`,
        `این ${animal.value} را ${actor.value} نامیده‌اند، او دوست دارد برقصد و ${food.value} بخورد، هرچند که مثل ${adjective.value} رقص می‌کند`,
        `نام پدر من ${actor.value} است، او دوست دارد شطرنج بازی کند و همچنین دوست دارد ${food.value} بخورد. او مثل ${animal.value} رقص می‌کند و باید بدانید او ${adjective.value} است`,
        `${actor.value} ${adjective.value} ${animal.value} را دید، او ${adjective.value} بود و ${animal.value} ${food.value} را خورد`,
        `${actor.value} ${adjective.value} با ${animal.value} بازی کرد و ${food.value} خورد`,
        `${actor.value} ${adjective.value} ${animal.value} را دید، به هر حال، او ${adjective.value} ${food.value} می‌خورد`,
        `${actor.value} ${adjective.value} با ${animal.value} ${adjective.value} کنار درخت با ${food.value} بازی کرد`,
        `${actor.value} ${adjective.value} ${animal.value} را به ${adjective.value} داد`,
        `${actor.value} ${adjective.value} به ${animal.value} ${adjective.value} یک شیرینی داد`,
        `${actor.value} ${adjective.value} ${animal.value} را پیدا کرد ${food.value} را می‌خورد`,
        `${actor.value} ${adjective.value} ${animal.value} را دید ${adjective.value} ${food.value} با`,
        `${actor.value} ${adjective.value} با ${animal.value} ${adjective.value} ${food.value} را بازی کرد`,
        `${actor.value} ${adjective.value} با ${animal.value} ${adjective.value} ${food.value} را خورد`,
        `${actor.value} ${adjective.value} ${animal.value} را دید، ${adjective.value} ${food.value} خورد`,
        `${actor.value} ${adjective.value} ${animal.value} به ${adjective.value} ${food.value} تازه داد`,
    ];

    let num = randomInteger(0, stories.length - 1);
    result.innerHTML = stories[num];
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
