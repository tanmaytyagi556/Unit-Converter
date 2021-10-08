function calculate(value,unit){

  switch (unit) {
    case 'w':
        document.getElementById('h').innerHTML = value/746 + " Hp"

      break;
      case 'h':
          document.getElementById('w').innerHTML = value*746 + " Watts"
      break;


    default:

  }
}
