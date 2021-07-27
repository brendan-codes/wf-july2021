function hideAlert(){
    var x = document.querySelector("#message");
    x.remove();
}


function counter(id){
    var counter = document.querySelector(id);
    var count = parseInt(counter.innerHTML);
    counter.innerHTML = count + 1;
}

function changeKeanu(element){
    var temp = element.getAttribute("src");
    element.setAttribute("src", element.getAttribute("alt-src"));
    element.setAttribute("alt-src", temp);
}




// changing the colors of our message box
function readKey(event){
    if(event.code === "ArrowUp"){
        console.log("You are reading arrow up");

        // if we want to protect our route
        if(document.querySelector("#message")){
            document.querySelector("#message").style.backgroundColor = "red";
        }
    }else if(event.code === "ArrowDown"){
        console.log("You are reading arrow down");
        document.querySelector("#message").style.backgroundColor = "blue";
    }else if(event.code === "ArrowLeft"){
        console.log("You are reading arrow left");
        document.querySelector("#message").style.backgroundColor = "green";
    }else if(event.code === "ArrowRight"){
        console.log("You are reading arrow right");
        document.querySelector("#message").style.backgroundColor = "purple";
    }
}

document.addEventListener('keydown', readKey);