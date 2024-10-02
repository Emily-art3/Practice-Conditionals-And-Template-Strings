function jobEligibilty (age, yearsEXperience, knowsJavascript) {
    if (age > 25 && age < 50 && (yearsEXperience > 5 || (age < 30 && yearsEXperience >= 3)) && knowsJavascript){
        return "Eligible for the job";
    } else {
        return "Not eligible";
    }
}

console.log(jobEligibilty(28, 3, true))