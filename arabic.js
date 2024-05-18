
function create() {
    let actor = document.getElementById('actor');
    let food = document.getElementById('food');
    let animal = document.getElementById('animal');
    let adjective = document.getElementById('adjective');
    let result = document.getElementById('result');

    if (actor.value === '' || food.value === '' || animal.value === '' || adjective.value === '') {
        alert('عزيزي، لا تكن ذكياً، قم بملء جميع الحقول!');
        return;
    }

    let stories = [
        `كان هناك طفل يُدعى ${actor.value}، لديه ${food.value}، لكن ال${animal.value} أسقطه، وهو مت${adjective.value}`,
        `قبل سنوات عديدة كان هناك رجل يُدعى ${actor.value}، كان يحب أن يأكل فقط ${food.value}، في يوم من الأيام انتهى الأمر لأن ال${animal.value} أكل كل شيء، وكان مت${adjective.value}`,
        `مرحبًا، اسمي ${actor.value}، أحب أن أأكل فقط ${food.value}، على الأقل كنت كذلك حتى أكلها ال${animal.value} كلها ويجب أن تعلم ${animal.value} حيوان ${adjective.value}`,
        `يُسمى ${actor.value} ${animal.value}، يحب الرقص وتناول ${food.value} على الرغم من أنه يرقص مثل ${adjective.value}`,
        `اسم والدي هو ${actor.value}، يحب لعب الشطرنج ويحب أيضًا تناول ${food.value}، يرقص مثل ${animal.value} ويجب أن تعلم أنه ${adjective.value}`,
        `${actor.value} ال${adjective.value} رأى ${animal.value}، كان ${adjective.value} و${animal.value} أكل ${food.value}`,
        `${actor.value} ال${adjective.value} لعب مع ${animal.value} وتناول ${food.value}`,
        `${actor.value} ال${adjective.value} رأى ${animal.value}، على فكرة، كان ${adjective.value} يأكل ${food.value}`,
        `${actor.value} ال${adjective.value} لعب مع ${animal.value} ال${adjective.value} بجانب شجرة مع ${food.value}`,
        `${actor.value} ال${adjective.value} أعطى ${animal.value} ال${adjective.value} قطعة من ${food.value}`,
        `${actor.value} ال${adjective.value} قدم ال${adjective.value} ${animal.value} حلوى.`,
        `${actor.value} ال${adjective.value} وجد ${animal.value} ${adjective.value} يأكل ${food.value}`,
        `${actor.value} ال${adjective.value} رأى ${animal.value} ${adjective.value} بجانب ${food.value}`,
        `${actor.value} ال${adjective.value} لعب مع ${animal.value} ${adjective.value} يأكل ${food.value}`,
        `${actor.value} ال${adjective.value} مشى مع ${animal.value} ${adjective.value} يأكل ${food.value}`,
        `${actor.value} ال${adjective.value} رأى ${animal.value}، ال${adjective.value} يأكل ${food.value}`,
        `${actor.value} ال${adjective.value} قدم ${animal.value} ${adjective.value} قطعة من ${food.value}`,
    ];

    let num = randomInteger(0, stories.length - 1);
    result.innerHTML = stories[num];
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
