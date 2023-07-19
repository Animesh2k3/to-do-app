function add(){
    const td=document.getElementById("td");
    const todo_list=document.getElementById("todo_list");

    const td_text=td.value;

    const newitem=document.createElement("li");
    newitem.textContent=td_text;

    todo_list.appendChild(newitem);

    input.value="";

}