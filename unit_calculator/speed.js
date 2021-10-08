function calculate(value,unit){

  switch (unit) {
    case 'k':
        document.getElementById('kn').innerHTML = value*0.539957 + " knots"
        document.getElementById('m').innerHTML = value/3.6 + " Mps"
      break;
      case 'm':
          document.getElementById('k').innerHTML = value*3.6 + " KMph"
          document.getElementById('m').innerHTML = value*1.94 + " knots"
      break;
      case 'kn':
          document.getElementById('k').innerHTML = value/0.539957 + " KMph"
          document.getElementById('m').innerHTML = value/1.94 + " Mps"
        break;

    default:

  }
}
