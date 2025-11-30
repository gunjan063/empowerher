const ul = document.querySelector("#items");
const button = document.getElementById("addbtn");

button.addEventListener("click", function(){
    const li = document.createElement("li");
   const count = ul.children.length + 1;


 li.textContent = "newitem" + count;

 if(count % 2 == 1){
  li.style.fontweight="bold";
  li.style.color="blue";

 } else {
    li.style.fontStyle = "italic";
    li.style.color = "red";
 }
 ul.appendChild(li);
})
