function addWeek(date) {
  let start = new Date("0001-01-01");

  const day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "secondMonday",
    "secondTuesday",
    "secondWednesday",
    "secondThursday",
    "secondFriday",
    "secondSaturday",
    "secondSunday",
  ];

  const tawani = date.getTime() - start.getTime();
  const difday = Math.floor(tawani / (1000 * 60 * 60 * 24));
  const dayindex = difday % 14;
  return day[dayindex];
}

function timeTravel({ date, hours, minet, second }) {
  const newdate = new Date(date);

  newdate.setHours(hours);
  newdate.setMinutes(minet);
  newdate.setSeconds(second);
  return newdate;
}