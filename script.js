let font=document.querySelector("#font");
let color=document.querySelector("#color");
let main=document.querySelector("main");
let button=document.querySelector("button");


    let fon=localStorage.getItem("fontSize");
    let bgC=localStorage.getItem("bgColor");
    if(fon && bgC){
        setValues(fon,bgC);
    }
    else if(fon && !bgC){
        setValues(fon,"aqua");
    }
    else if(!fon && bgC){
        setValues("16px",  bgC);
    }
    else{
        setValues("16px","aqua");
    }

    
function setValues(fontS, bg){
    main.style.fontSize=fontS;
    main.style.backgroundColor=bg;
    font.value=fontS;
    color.value=bg;
}

let fontSize=(e)=>{
    main.style.fontSize=e.target.value;
    localStorage.setItem("fontSize",e.target.value);
}
let bgColor=(e)=>{
    main.style.backgroundColor=e.target.value;
    localStorage.setItem("bgColor",e.target.value);
}
let reset=(e)=>{
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgColor");
    setValues("16px","aqua");
}


font.addEventListener("change",fontSize);
color.addEventListener("change", bgColor);
button.addEventListener("click",reset);
