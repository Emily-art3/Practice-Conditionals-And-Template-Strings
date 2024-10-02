function bookFlighteligibility (age, hasPassport, isFlightAvailable) {
    if (age >= 18 && age <= 70 && hasPassport && isFlightAvailable) {
        return "Booking successful";
    } else {
        return "Booking failed";
    }
}
console.log(bookFlighteligibility(17, true, true))