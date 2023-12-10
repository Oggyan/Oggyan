let message = {};

function displayMessages(event){
    // console.log(event.target.value,event.target.id);

    let value = event.target.value;
    let feildID = event.target.id;

    if(feildID === "name"){
        message = {
            emptyError  : "name is mandatory",
            patterError : "Name should not have number or special character",
            ElementId : "name_error"
        }
        checkstatus(value , "[A-Za-z\\s]+$" , message)
    }
    else if(feildID === "email"){
        message ={
            emptyError :"Email is mandatory",
            patterError : "characters followed by an @ sign ,followed by more characters , and then a.",
            ElementId : "email_error",
        }
        checkstatus(value, "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" ,message);
    }
    else if(feildID === "password"){
        message ={
            emptyError :"password is mandatory",
            patterError : "password must contain 8 or more characters that are of at least one number, one uppercase ,one lowecase and one number ",
            ElementId : "password_error",
        }
        checkstatus(value, "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" ,message);
    }

}

function checkstatus(value ,exp,message){
    let status = validateFeild(value , exp);
    if(status !== true){
        if(status == 1){
            mesText = message.emptyError;
        }
        else if(status === 2){
            mesText = message.patterError;
        }
        document.getElementById(message.ElementId).style.display = "flex";
        document.getElementById(message.ElementId).innerText = mesText;
    }
    else{
        document.getElementById(message.ElementId).style.display = "none";
    }
}


function validateFeild(value,expt){
    const exp = new RegExp(expt);

    if(value === ""){
        return 1;
    }
    else{
        if(exp.test(value)!=true){
            return 2;
        }
    }
    return true;
}
