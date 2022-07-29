function scuberGreetingForFeet(value){
  // Write your code here!
  // Use if and else if statements to return the correct greeting based on the distance the passenger desires to travel.
  // gives customers a free sample if the ride is less than or equal to 400 feet ...
  if (value <= 400) {
    return 'This one is on me!'
  } else if (value >= 401 && value <= 2000) {
    // charges 20 dollars for a distance between 400 and 2000 feet...
    return 'That will be twenty bucks.'
  } else if (value >= 2001 && value <= 2500) {
    // charges 30 dollars for a distance over 2000 feet
    // I will gladly take your thirty bucks.
    return 'I will gladly take your thirty bucks.'
  } else {
    // does not allow rides over 2500 feet
    return 'No can do.'
  }

}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    // if the tip = 'generous', then 'thank you so much'...
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    case 'thanks for everything':
      return 'Bye.'
  }

}