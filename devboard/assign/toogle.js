

function btnClick(event,task,number,cardTitleID,historyID){

    alert("You have completed task");

    // disable the click button correctly
    const clickedBtn = event.target;
    clickedBtn.disabled = true;
    clickedBtn.classList.add("opacity-50","cursor-not-allowed");
    

    // task number decreasing
    const taskAssign = document.getElementById(task).innerText;
    if(taskAssign === 0){
        alert('Congrats! You have completed all the current tasks')
    }
    const convertedAssign = parseInt(taskAssign);
    const  completedTask = convertedAssign - 1;
    document.getElementById(task).innerText = completedTask;

    // point add
    const point = document.getElementById(number).innerText;
    const convertedPoint = parseInt(point);
    const completedPoint = convertedPoint + 1;
    document.getElementById(number).innerText = completedPoint;


    // history add 
    const title = document.getElementById(cardTitleID).innerText;

    const titleBlock = document.createElement("div")
    titleBlock.innerText = `You have completed the task ${title} at ${new Date().toLocaleDateString()}`;
    titleBlock.classList.add("bg-gray-100", "p-3","rounded-lg", "mb-2", "shadow-sm")
    document.getElementById(historyID).appendChild(titleBlock);

    clickedBtn.closest('.card-class-name').classList.add('opacity-50','pointer-events-none');
}