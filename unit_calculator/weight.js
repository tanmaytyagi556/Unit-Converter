function calculate(value,unit){

  switch (unit) {
    case 'k':
        document.getElementById('p').innerHTML = value*2.20462 + " pounds"
        document.getElementById('o').innerHTML = value*2.20462*16 + " ounces"
      break;
      case 'p':
          document.getElementById('k').innerHTML = value/2.20462 + " Kg"
          document.getElementById('o').innerHTML = value*16 + " ounces"
      break;
      case 'o':
          document.getElementById('k').innerHTML = value/(2.20462*16) + " Kg"
          document.getElementById('p').innerHTML = value/16 + " pounds"
        break;

    default:

  }
}
