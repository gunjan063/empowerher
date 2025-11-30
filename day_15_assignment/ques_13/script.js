const colorinput=document.getElementById("colorinput");
const textinput=document.getElementById("textinput");
const changebg=document.getElementById("changebg");
const updatebtn=document.getElementById("updatebtn")
const boc=document.getElementById("box");

changebg.addEventListener("click",()=>{
    const color = colorinput.ariaValueMax;

    box.style.background = color;

    if(box.style.background === ""){
        alert("invalid color");
    }
}
);


updatebtn.addEventListener("click", () =>{
    const text = textinput.value;
    
    if(text === ""){
        alert("please enter text");
} else {
    box.textcontent = text;
}
});