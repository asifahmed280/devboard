const today = new Date();

const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
}

const formateDate = today.toLocaleDateString("en-US",options);

document.getElementById("today-date").innerText = formateDate;


const card = document.getElementById("card-1");




