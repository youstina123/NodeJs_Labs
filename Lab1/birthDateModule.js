function birthdate(name,birthday){

    if (birthday.getFullYear() == 2023) {
        return "year 2023 not accepted"
    }else{
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs);
        return name+" "+Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  
}
//  console.log(birthdate("Selvia",new Date(2023, 3 , 26)));

module.exports = birthdate;


