const display= document.getElementById("display");

function calculateTodisplay(input){
       display.value+= input;
}

function calculate(){
      display.value=eval(display.value);
}

function clearTodisplay(){
     display.value="";
}

function deleteTodisplay(){
    display.value= display.value.slice(0 , -1);
}