function timeWord(time) {
  
  // a list of every word describing minutes from 0 ("oh") to 19.
  const minuteInWords = [
      "oh", "one", "two", "three", "four", "five",
      "six", "seven", "eight", "nine", "ten", "eleven",
      "twelve", "thirteen", "fourteen", "fifteen",
      "sixteen", "seventeen", "eighteen", "nineteen"
  ];
  // the multiple-of-ten prefixes for minutes from 20 to 50. "20:01" would be "twenty oh one".
  const tensWords = [
      "", "", "twenty", "thirty", "fourty", "fifty"
  ]
  // hours written out for a 24-hour period converted into a 12-hour scale by repeating.
  const hourWords = [
      "twelve", "one", "two", "three", "four", "five",
      "six", "seven", "eight", "nine", "ten", "eleven",
      "twelve", "one", "two", "three", "four", "five",
      "six", "seven", "eight", "nine", "ten", "eleven"
  ]

  // splits the time into minutes and hours.
  const { minString, hourString } = time.split(":");
  let hour = parseInt(hourString, 10);
  let minute = parseInt(minString, 10);
  // determines if it is am or pm.
  const period = hour < 12 ? "am" : "pm";

  // converts 24 hour time into 12 hour time by finding the remainder out of 12.
  hour = hour % 12;
  if (hour === 0) hour = 12;

  // piece together each part of the written time into "minuteWords"
  let minuteWords;
  // an exact hour is simply "the-hour o'clock".
  if (minute === 0) {
    minuteWords = "o'clock";
  } 
  // a single digit minute is "hour oh-minute".
  else if (minute < 10) {
    minuteWords = `oh-${minuteInWords[minute]}`;
  } 
  // for 10-19 minutes, simply reference the words array.
  else if (minute <20) {
    minuteWords = minuteInWords[minute];
  } 
  // 20 minutes and above:
  else {
    // find if it is 20, 30, 40, or 50.
    const tens = Math.floor(minute / 10);
    // then find how much single-digit minutes are left.
    const units = minute % 10;
    // get the written word for the tens.
    minuteWords = tensWords[tens];
    // if there's single digit minutes, then add the number's word after the ten's word.
    if (units !== 0) {
      minuteWords += `-${minuteInWords[units]}`;
    }
  }
  // Put it all together. 
  return `${hourWords[hour]} ${minuteWords} ${period}`;
}
