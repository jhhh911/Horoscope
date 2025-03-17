let star = (day, month) => {
  if (day >= 21 && month === 'March' || day < 21 && month === 'April') {
    starSign === 'Aries';
  } else if (day >= 21 && month === 'April' || day < 21 && month === 'May') {
    starSign === 'Taurus';
  } else if (day >= 21 && month === 'May' || day < 21 && month === 'June') {
    starSign === 'Gemini';
  } else if (day >= 21 && month === 'June' || day < 21 && month === 'July') {
    starSign === 'Cancer';
  } else if (day >= 21 && month === 'July' || day < 21 && month === 'August') {
    starSign === 'Leo';
  } else if (day >= 21 && month === 'August' || day < 21 && month === 'September') {
    starSign === 'Virgo';
  } else if (day >= 21 && month === 'September' || day < 21 && month === 'October') {
    starSign === 'Libra';
  } else if (day >= 21 && month === 'October' || day < 21 && month === 'November') {
    starSign === 'Scorpio';
  } else if (day >= 21 && month === 'November' || day < 21 && month === 'December') {
    starSign === 'Sagittarius';
  } else if (day >= 21 && month === 'December' || day < 21 && month === 'January') {
    starSign === 'Capricorn';
  } else if (day >= 21 && month === 'January' || day < 21 && month === 'February') {
    starSign === 'Aquarius';
  } else if (day >= 21 && month === 'February' || day < 21 && month === 'March') {
    starSign === 'Piscies';
  } else {
    return 'Please enter birth day and birth month';
  }

starMessage = (star) => {
  if (star === 'Aries') {
    return 'Message 1';
  } else if (star === 'Taurus') {
    return 'Message 1'
  } else if (star === 'Gemini') {
    return 'Message 1'
  } else if (star === 'Cancer') {
    return 'Message 1'
  } else if (star === 'Leo') {
    return 'Message 1'
  } else if (star === 'Virgo') {
    return 'Message 1'
  } else if (star === 'Libra') {
    return 'Message 1'
  } else if (star === 'Scorpio') {
    return 'Message 1'
  } else if (star === 'Sagittarius') {
    return 'Message 1'
  } else if (star === 'Capricorn') {
    return 'Message 1'
  } else if (star === 'Aquarius') {
    return 'Message 1'
  } else if (star === 'Piscies') {
    return 'Message 1'
  }
}
}
console.log(star(29, 'November'))