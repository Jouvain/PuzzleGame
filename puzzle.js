function checkDrooper() {
    /** identifie le dropper et met en place ses attributs */
    const dropper = document.getElementById("dropper");
    dropper.setAttribute("ondrop", "drop(event)");
    dropper.setAttribute("ondragover", "allowDrop(event)")
}

function checkDraggable() {
    const draggables = document.getElementsByTagName("div");
    console.log(draggables)
    for (div of draggables) {
        console.log(div);
        if(div.id !== "dropper" & div.id !== "container") {
            div.setAttribute("draggable","true");
            div.setAttribute("ondragstart","drag(event)");
        }
    }
        

}




function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.setData("content", ev.target.innerHTML);
}
function allowDrop(ev) {
    ev.preventDefault();
}
function drop(ev) {
    ev.preventDefault();
    var newId = ev.dataTransfer.getData("id");
    var newContent = ev.dataTransfer.getData("content");

    var pastId = ev.target.id;
    var pastContent = ev.target.innerHTML;
    document.getElementById(newId).innerHTML = pastContent;
    document.getElementById(newId).id = pastId;
    ev.target.id = newId;
    ev.target.innerHTML = newContent;
    checkDrooper();
    checkDraggable();
}

/** START */
checkDrooper();
checkDraggable();