let inputAdults = document.getElementById("adults");
let inputChildren = document.getElementById("children");
let inputTime = document.getElementById("time");

let result = document.getElementById("result");

function calculate() {

    let adults = inputAdults.value;
    let children = inputChildren.value;
    let time = inputTime.value;

    let amountMeat = meatPP(time) * adults + (meatPP(time) / 2 * children);
    let amountBeer = beerPP(time) * adults;
    let amaoutSausage = sausagePP(time) * adults + (sausagePP(time) / 2 * children);
    let amountDrink = drinksPP(time) * adults + (drinksPP(time) / 2 * children);
    let amountChiken = chikenPP(time) * adults + (chikenPP(time) / 2 * children);


    result.innerHTML = `<p>${amountMeat / 1000} Kg de carne</p>`
    result.innerHTML += `<p>${Math.ceil(amountBeer / 355)} Latas de cerveja</p>`
    result.innerHTML += `<p>${Math.ceil(amountDrink / 2000)} Refrigerantes </p>`
    result.innerHTML += `<p>${amaoutSausage / 1000} Kg de linguica </p>`
    result.innerHTML += `<p>${amountChiken / 1000} Kg de frango </p>`


};

function meatPP(time) {
    if (time >= 6) {
        return 650;
    } else {
        return 400;
    };
};

function beerPP(time) {
    if (time >= 6) {
        return 2000;
    } else {
        return 1200;
    };
};

function sausagePP(time) {
    if (time >= 6) {
        return 200;
    } else {
        return 120;
    }
}

function chikenPP(time) {
    if (time >= 6) {
        return 200;
    } else {
        return 100;
    }
}


function drinksPP(time) {
    if (time >= 6) {
        return 1500;
    } else {
        return 1000;
    };
};

function onOver() {
    let over = document.getElementById("btn");
    over.style.backgroundColor = "#ff8000"
}

function onOut() {
    let over = document.getElementById("btn");
    over.style.backgroundColor = "#ff800098"
}