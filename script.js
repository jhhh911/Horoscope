let day = 29
let month = 'September'
let hourBorn = 4
let star = (day, month) => {
  if (day >= 21 && month === 'March' || day < 21 && month === 'April') {
    return 'Aries';
  } else if (day >= 21 && month === 'April' || day < 21 && month === 'May') {
    return 'Taurus';
  } else if (day >= 21 && month === 'May' || day < 21 && month === 'June') {
    return 'Gemini';
  } else if (day >= 21 && month === 'June' || day < 21 && month === 'July') {
    return 'Cancer';
  } else if (day >= 21 && month === 'July' || day < 21 && month === 'August') {
    return 'Leo';
  } else if (day >= 21 && month === 'August' || day < 21 && month === 'September') {
    return 'Virgo';
  } else if (day >= 21 && month === 'September' || day < 21 && month === 'October') {
    return 'Libra';
  } else if (day >= 21 && month === 'October' || day < 21 && month === 'November') {
    return 'Scorpio';
  } else if (day >= 21 && month === 'November' || day < 21 && month === 'December') {
    return 'Sagittarius';
  } else if (day >= 21 && month === 'December' || day < 21 && month === 'January') {
    return 'Capricorn';
  } else if (day >= 21 && month === 'January' || day < 21 && month === 'February') {
    return 'Aquarius';
  } else if (day >= 21 && month === 'February' || day < 21 && month === 'March') {
    return 'Pisces';
  } else {
    return 'Please enter birth day and birth month';
  }
}
starSign = star(day, month)

starMessage = (star) => {
  if (star === 'Aries') {
    return 'More peace will reside in your heart!';
  } else if (star === 'Taurus') {
    return 'Be ready to refresh with a new connection!'
  } else if (star === 'Gemini') {
    return 'If you have been thinking of doing something different, now is the time!'
  } else if (star === 'Cancer') {
    return 'No point in rushing, relax and take your time!'
  } else if (star === 'Leo') {
    return 'Now is the right time to have a talk to someone close to you!'
  } else if (star === 'Virgo') {
    return 'Important bonds should be your top priority!'
  } else if (star === 'Libra') {
    return 'You will be granted with massive amounts of motivation!'
  } else if (star === 'Scorpio') {
    return 'You can take the bull by the horns, get creative!'
  } else if (star === 'Sagittarius') {
    return 'Focus on the minor details!'
  } else if (star === 'Capricorn') {
    return 'Time for a spontaneous adventure!'
  } else if (star === 'Aquarius') {
    return 'Do your best to become ultra-proud of yourself!'
  } else if (star === 'Pisces') {
    return 'Invite your flirty self outside!'
  }
}

moonSign = (hourBorn) => {
switch (hourBorn) {
  case 0 || 1:
    return 'Aries';
    case 2 || 3:
    return 'Taurus';
    case 4 || 5:
    return 'Gemini';
    case 6 || 7:
    return 'Cancer';
    case 8 || 9:
    return 'Leo';
    case 10 || 11:
    return 'Virgo';
    case 12 || 13:
    return 'Libra';
    case 14 || 15:
    return 'Scorpio';
    case 16 || 17:
    return 'Sagittarius';
    case 18 || 19:
    return 'Capricorn';
    case 20 || 21:
    return 'Aquarius';
    case 22 || 23:
    return 'Pisces';
    default:
    return 'Please enter a number between 0 - 23'
}
}

moonMessage = (moonSign) => {
switch (moonSign) {
  case 'Aries':
    return 'Aries';
    case 2 || 3:
    return 'Taurus';
    case 4 || 5:
    return 'Gemini';
    case 6 || 7:
    return 'Cancer';
    case 8 || 9:
    return 'Leo';
    case 10 || 11:
    return 'Virgo';
    case 12 || 13:
    return 'Libra';
    case 14 || 15:
    return 'Scorpio';
    case 16 || 17:
    return 'Sagittarius';
    case 18 || 19:
    return 'Capricorn';
    case 20 || 21:
    return 'Aquarius';
    case 22 || 23:
    return 'Pisces';
}
  }
console.log(starSign)
console.log(starMessage(starSign))
console.log(moonSign(hourBorn))
