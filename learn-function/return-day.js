const returnDay = (number) => {
  const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (number > 0 && number < 8) ? day[number - 1] : null;
}

returnDay(9)