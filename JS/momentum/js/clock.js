const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();

    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock();
setInterval(getClock,1000);

//Data object (JS 갠소)
//date.getMinutes = getMinutes() ??