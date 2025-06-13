const screen=document.getElementById("screen");
function add_element(element){
    screen.value += element;
}
function del_all(){
    screen.value = '';
}
function del(){
    screen.value = (screen.value !=="ERROR") ? screen.value.slice(0,-1) : screen.value;    
}
function calc(){
    try {
    
        screen.value = eval(screen.value);
    } catch (error) {
        
        screen.value="ERROR";
}
    
}