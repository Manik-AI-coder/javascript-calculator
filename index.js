const resultField= document.getElementById("MyResult");


function DeleteMe(){
resultField.value="" ;

}
function Calculator(NewValue){
  resultField.value+=NewValue ;
}
function Backspace (){
  resultField.value=resultField.value.slice(0, -1);
}
function Answer(){
  try{
    let expression=resultField.value;
    let result=eval(expression);
    resultField.value=result;
  } catch{
    resultField.value="error";
  }
}
