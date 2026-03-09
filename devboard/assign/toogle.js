
function btnClick(event,task,number,cardTitleID,historyID){

    // disable the click button correctly
    const clickedBtn = event.target;
    clickedBtn.disabled = true;
    clickedBtn.classList.add("opacity-50","cursor-not-allowed");
    

    // task number decreasing
    const taskAssign = document.getElementById(task).innerText;
    const convertedAssign = parseInt(taskAssign);
    //coovertedAssign--; also can use this
    const  completedTask = convertedAssign - 1;
    document.getElementById(task).innerText = completedTask;
    
    if(completedTask === 0){
        alert("Congratulations! All tasks completed")
    }

    // point add
    const point = document.getElementById(number).innerText;
    const convertedPoint = parseInt(point);
    const completedPoint = convertedPoint + 1;
    document.getElementById(number).innerText = completedPoint;


    // history add 
    const title = document.getElementById(cardTitleID).innerText;
    const history = document.getElementById(historyID);

    const titleBlock = document.createElement("div");
    titleBlock.innerText = `You have completed the task ${title} at ${new Date().toLocaleTimeString()}`;

    titleBlock.classList.add("bg-gray-100", "p-3","rounded-lg", "mb-2", "shadow-sm");
    
    history.appendChild(titleBlock);
 
}


/// hover effect on card

function handleHover(e) {
    if (e.type === "mouseenter") {
        this.style.backgroundColor = "lightblue";
    } else if (e.type === "mouseleave") {
        this.style.backgroundColor = "#f1f5f9";
    }
}