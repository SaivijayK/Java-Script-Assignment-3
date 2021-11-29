// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    if(mass<=0){
        return "INVALID INPUT"
    }
    if(height<=0){
        return "INVALID INPUT"
    }
    var BMI = mass/(height*height)
    return BMI
    // Write your code here
}

module.exports = BMICalculator;
