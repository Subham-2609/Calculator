let string ="";

let b = document.querySelectorAll('.glow-on-hover');

Array.from(b).forEach((value)=>{
    value.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.getElementById("inputText").value = string;
        }
        else if (e.target.innerHTML == "AC"){
            string = ""
             document.getElementById("inputText").value = string;
        }
        else {
             string = string + e.target.innerHTML;
            document.getElementById("inputText").value = string;
        }  
        
    })

})

