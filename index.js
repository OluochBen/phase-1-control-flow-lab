function scuberGreetingForFeet(distanceInFeet) {
  if (distanceInFeet <= 400) {
      return "This one is on me!";
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return "That will be twenty bucks.";
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return "I will gladly take your thirty bucks.";
  } else {
      return "No can do.";
  }


}

function ternaryCheckCity(city) {
  if (city === "NYC") {
    return "Ok, sounds good.";
  } else if (city !== "NYC") {
    return "No go.";
  }
}



function switchOnCharmFromTip(tipGenerosity) {
  if (tipGenerosity === "generous") {
    return "Thank you so much.";
  } else if (tipGenerosity === "not as generous") {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}
