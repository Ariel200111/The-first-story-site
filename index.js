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
        `לילד שקוראים ${actor.value}, יש ${food.value}, אבל ה${animal.value} הפיל לו אותו, והוא מאוד ${adjective.value}`,
        `לפני הרבה שנים היה איש בשם ${actor.value}, הוא אהב לאכול רק ${food.value}. יום אחד זה נגמר כי ה${animal.value} גמר את הכל, והוא מאוד ${adjective.value}`,
        `שלום שמי ${actor.value}, אני אוהב לאכול רק ${food.value}. לפחות אהבתי עד שה${animal.value} אכל את הכל ושתדעו ${animal.value} זאת חיה ${adjective.value}`,
        `ל${animal.value} קוראים ${actor.value} הוא מאוד אוהב לרקוד ולאכול ${food.value} למרות שהוא רוקד כמו ${adjective.value}`,   
        `לאבא שלי קוראים ${actor.value} הוא מאוד אוהב לשחק בשחמט והוא גם אוהב לאכול ${food.value} הוא רוקד כמו ${animal.value} ושתדעו הוא ${adjective.value}`,
        `${actor.value} ה${adjective.value} ראה ${animal.value} הוא היה ${adjective.value} וה${animal.value} אכל ${food.value}`,
        `${actor.value} ה${adjective.value} שיחק עם ה${animal.value} ואכל ${food.value}`,
        `${actor.value} ה${adjective.value} ראה ${animal.value} דרך אגב היה ${adjective.value} שאוכל ${food.value}.`,
        `${actor.value} ה${adjective.value} שיחק עם${animal.value} ה${adjective.value} ליד עץ עם ${food.value}.`,
        `${actor.value} ה${adjective.value} נתן ל${animal.value} ה${adjective.value} חתיכת ${food.value}.`,
        `${actor.value} ה${adjective.value} האכיל את ה${animal.value} ה${adjective.value} במתנה.`,
        `${actor.value} ה${adjective.value} מצא ${animal.value} ${adjective.value} שאכל ${food.value}.`,
        `${actor.value} ה${adjective.value} ראה ${animal.value} ${adjective.value} עם ${food.value}.`,
        `${actor.value} ה${adjective.value} שיחק עם ${animal.value} ${adjective.value} שאכל ${food.value}.`,
        `${actor.value} ה${adjective.value} טייל עם ${animal.value} ${adjective.value} שאכל ${food.value}.`,
        `${actor.value} ה${adjective.value} ראה ${animal.value}, ה${adjective.value} שאוכל ${food.value}.`,
        `${actor.value} ה${adjective.value} האכיל ${animal.value} ה${adjective.value} בעלי ${food.value} טריים.`,
    ];

    let num = randomInteger(0, stories.length - 1);
    result.innerHTML = stories[num];
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeToEnglish() {
    localStorage.setItem("language", "english");
    location.href = 'english.html';
}
function changeToarabic() {
    localStorage.setItem("language", "arabic");
    location.href = 'arabic.html';
}
function changeToPersian() {
    localStorage.setItem("language", "Persian");
    location.href = 'Persian.html';
}