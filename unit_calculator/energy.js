function calculate(value,unit){

  switch (unit) {
    case 'j':
        document.getElementById('c').innerHTML = value/4.184 + " cal"

      break;
      case 'c':
          document.getElementById('j').innerHTML = value*4.184 + " J"
      break;


    default:

  }
}
