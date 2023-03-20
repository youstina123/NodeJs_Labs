function Add(num1,num2){
    try{
        if(typeof num1 !="number" || typeof num2 !="number")
        {
            throw ("please Enter Two valid numbers");
        }
        else{
            return num1 + num2;
        }
    }catch(error)
    {
        return error;
    }
}

function Sub(num1,num2){

    try{
        if(typeof num1 !="number" ||typeof num2 !="number")
        {
            throw ("please Enter Two valid numbers");
        }
        else{
            return num1 - num2;
        }
    }catch(error)
    {
        return error;
    }
    
   
}

function Multiply(num1,num2){
    try{
        if(typeof num1 !="number" || typeof num2 !="number")
        {
            throw ("please Enter Two valid numbers");
        }
        else{
            return num1 * num2;
        }
    }catch(error)
    {
        return error;
    }
}

module.exports={
    AddNumbers:Add,
    SubNumbers : Sub,
    MultiNumbers: Multiply

}