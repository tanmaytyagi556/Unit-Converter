function calculate(value,unit){

  switch (unit) {
    case 'm':
        document.getElementById('k').innerHTML = value/1000 + " Km"
        document.getElementById('f').innerHTML = value*3.28 + " feets"
        document.getElementById('y').innerHTML = value*1.09 + " yards"
        document.getElementById('n').innerHTML = value/1852 + " miles"
      break;
      case 'k':
          document.getElementById('m').innerHTML = value*1000 + " m"
          document.getElementById('f').innerHTML = value*1000*3.28 + " feets"
          document.getElementById('y').innerHTML = value*1000*1.09 + " yards"
          document.getElementById('n').innerHTML = value/1.852 + " miles"
        break;
      case 'f':
          document.getElementById('m').innerHTML = value/3.28 + " metres"
          document.getElementById('k').innerHTML = value/(3.28*1000) + " Km"
          document.getElementById('y').innerHTML = value*1.09/3.28 + " yards"
          document.getElementById('n').innerHTML = value/(1852*3.28) + " miles"
        break;
      case 'y':
          document.getElementById('m').innerHTML = value/1.09 + " m"
          document.getElementById('k').innerHTML = value/(1090) + " Km"
          document.getElementById('f').innerHTML = value*3.28/1.09 + " feets"
          document.getElementById('n').innerHTML = value/(1.09*1852) + " miles"
        break;
        case 'n':
            document.getElementById('m').innerHTML = value*1852 + " m"
            document.getElementById('k').innerHTML = value*1.852 + " km"
            document.getElementById('f').innerHTML = value*1852*3.28 + " feets"
            document.getElementById('y').innerHTML = value*1852*1.09 + " yards"
          break;

    default:

  }
}
