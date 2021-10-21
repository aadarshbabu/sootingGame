let bul1 = document.querySelector("#bult1");
let bul2 = document.querySelector("#bult2");
let btn = document.querySelector("#start");
let scr1 = document.querySelector("#scorep1")
let scr2 = document.querySelector("#scorep2")
let msg = document.querySelector(".msg");
let round = 0;
let p1health = 10;
let p2health = 10;
let p1won = 0;
let p2won = 0;

let autostart = function () {
    bul1.classList.add("bulani");
    bul2.classList.add("bulani2");
    setTimeout(() => {
        bul1.classList.remove("bulani");
        bul2.classList.remove("bulani2");
    }, 2000);

}
function resetDomValue() {
    round = 0;
    p1health = 10;
    p2health = 10;
    p1won = 0;
    p2won = 0;
    scr1.innerHTML = 0;
    scr2.innerHTML = 0;
    msg.innerHTML = " "
}

function gamechaker(id) {
    if (p1health < 0) {
        scr1.innerHTML = p1won += 1
        clearInterval(id)
        p1health = 10
        p2health = 10;
    }
    else if (p2health < 0) {
        scr2.innerHTML = p2won += 1;
        clearInterval(id)
        p2won >= 3 ? msg.innerHTML = "player 1 is won" : "";
        p1health = 10
        p2health = 10;
    }
    if (p1won >= 3) {
        round += 1
        msg.innerHTML = "player 1 win";
    }
    else if (p2won >= 3) {
        round += 1
        msg.innerHTML = "player 2 win"

    }
    round >= 5 ? msg.innerHTML = "Round over" : " "
}

btn.addEventListener("click", () => {
    if (p1won >= 3 || p2won >= 3 || round >= 5)
        resetDomValue();

    autostart();
    let id = setInterval(() => {
        p1health -= Math.floor(Math.random() * 5)
        p2health -= Math.floor(Math.random() * 5)
        gamechaker(id);
        autostart();
    }, 3000);

});

