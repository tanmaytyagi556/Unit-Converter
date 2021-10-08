function calculate(value,unit){

  switch (unit) {
    case 's':
        document.getElementById('m').innerHTML = value/60 + " min"
        document.getElementById('h').innerHTML = value/(60*60) + " hrs"
        document.getElementById('d').innerHTML = value/(60*60*24) + " days"
        document.getElementById('mon').innerHTML = value/(60*60*24*30) + " months"
      break;
      case 'm':
          document.getElementById('s').innerHTML = value*60 + " sec"
          document.getElementById('h').innerHTML = value/(60) + " hrs"
          document.getElementById('d').innerHTML = value/(60*24) + " days"
          document.getElementById('mon').innerHTML = value/(60*24*30) + " months"
        break;
      case 'h':
          document.getElementById('s').innerHTML = value*60*60 + " sec"
          document.getElementById('m').innerHTML = value*60 + " mins"
          document.getElementById('d').innerHTML = value/24 + " days"
          document.getElementById('mon').innerHTML = value/(24*30) + " months"
        break;
      case 'd':
          document.getElementById('s').innerHTML = value*24*60*60 + " sec"
          document.getElementById('m').innerHTML = value*24*60 + " min"
          document.getElementById('h').innerHTML = value*24 + " hrs"
          document.getElementById('mon').innerHTML = value/30 + " months"
        break;
        case 'mon':
            document.getElementById('s').innerHTML = value*24*60*60+30 + " sec"
            document.getElementById('m').innerHTML = value*24*60*30 + " min"
            document.getElementById('h').innerHTML = value*24*30 + " hrs"
            document.getElementById('d').innerHTML = value*24 + " days"
          break;

    default:

  }
}
