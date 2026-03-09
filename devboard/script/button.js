
for (let i = 1; i <= 6; i++) {
    document.getElementById(`complete-btn-${i}`).addEventListener("click", function (event) {

        alert("You have completed the task");

        btnClick(event, "task", "number", `cardTitle-${i}`, "history-1")

    })
}


document.getElementById("theme-btn").addEventListener("click", function () {
    const colors = ["#f87171", "#60a5fa", "#34d399", "#fbbf24", "#a78bfa", "#fb7185"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[randomIndex];

    //   document.getElementById("theme-btn").addEventListener("click", function(){
    //     const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    //     document.body.style.backgroundColor = randomColor;
    // });

})


for (let i = 1; i <= 6; i++) {
    const card = document.getElementById(`card-${i}`);

    card.addEventListener("mouseenter", handleHover);
    card.addEventListener("mouseleave", handleHover);


}


document.getElementById("clear-history").addEventListener("click", function () {
    document.getElementById("history-1").innerHTML = "";
})


document.getElementById("discover-btn").addEventListener("click", function () {
    window.location.href = "blog.html";
})

