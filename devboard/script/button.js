document.getElementById("complete-btn").addEventListener("click", function(event){

    event.preventDefault();


    // alert("You have completed task");

    // event.target.disabled = true;

    // // task number decreasing
    // const taskAssign = document.getElementById("task").innerText;
    // const convertedAssign = parseInt(taskAssign);
    // const  completedTask = convertedAssign - 1;
    // document.getElementById("task").innerText = completedTask;
    

    // // point add
    // const point = document.getElementById("number").innerText;
    // const convertedPoint = parseInt(point);
    // const completedPoint = convertedPoint + 1;
    // document.getElementById("number").innerText = completedPoint;


    // const title = document.getElementById("card-1-title").innerText;
    // const titleBlock = document.createElement("div")
    // titleBlock.innerText = `You have completed ${title} task`;
    // titleBlock.classList.add("bg-gray-100", "p-3","rounded-lg", "mb-2", "shadow-sm")
    // document.getElementById("history").appendChild(titleBlock);

    btnClick(event,"task","number","card-1-title","history");

})
