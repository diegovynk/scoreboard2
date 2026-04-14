//VARIABLES

let homeScore = document.getElementById ("homeSc")
let guestScore = document.getElementById ("guestSc")
homeScore = 0
guestScore = 0

//HOME SCORE

function plus1h() {
   homeSc.innerText = homeScore += 1
}

function plus2h() {
    homeSc.innerText = homeScore += 2
}

function plus3h() {
    homeSc.innerText = homeScore += 3
}

//GUEST SCORE

function plus1g() {
   guestSc.innerText = guestScore += 1
}

function plus2g() {
    guestSc.innerText = guestScore += 2
}

function plus3g() {
    guestSc.innerText = guestScore += 3
}

//NEW GAME BTN

function reset() {
    homeSc.innerText = 0
    guestSc.innerText = 0
}