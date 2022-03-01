const adviceid = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");


const randomAdvice = "https://api.adviceslip.com/advice"

const getAdvice = async () => {
    const res = await fetch(randomAdvice);
    const advice = await res.json()

    adviceid.innerText = `${advice.slip.id}`;
    adviceText.innerHTML = `"${advice.slip.advice}"`;

}

getAdvice()