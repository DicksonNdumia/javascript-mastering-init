// If Statements

let age = 101;
let hasLicense = false;

if(age >= 18) {
    console.log(`You are old enough to enter the club`);
    if(hasLicense) {
        console.log('You have your license!')
    }
    else {
        console.log("You don't have a license")
    }

}
else if (age < 5 ) {
    console.log("Your age can't be below 5")
}

else {
    console.log(`You are not old enough to enter the club`);
}