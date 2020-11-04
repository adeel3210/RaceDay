let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 18;

if(runnerAge > 18 && registeredEarly){
  raceNumber += 1000;
}
if(runnerAge>18 && registeredEarly){
  console.log(`Your race number is ${raceNumber} and your race starts at 9:30am !`)
}else if (runnerAge>18 && !registeredEarly){
  console.log(`Your race number is ${raceNumber} and your race starts at 11:00am !`)
}else if(runnerAge < 18){
  console.log(`Your race number is ${raceNumber} and your race will start at 12:30pm !`)
} else{
  console.log("Please see the registration desk");
}