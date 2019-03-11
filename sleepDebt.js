function getSleepHours (day) {
  if (day === 'sunday'){
    return 8
  } else if (day === 'monday'){
    return 7
  } else if (day === 'tuesday'){
    return 6
  } else if (day === 'wednesday'){
    return 5
  } else if (day === 'thursday'){
    return 8
  } else if (day === 'friday'){
    return 7
  } else if (day === 'saturday') {
    return 6
  }
}

function getActualSleepHours () {
  return getSleepHours('sunday')+getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')
}

function getIdealSleepHours () {
  const idealHours = 8
  return idealHours * 7
}

function calculateSleepDebt () {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.')
  } else if (actualSleepHours > idealSleepHours) {
  console.log('You got more sleep than needed. '+ 'You have sleep over for '+ (actualSleepHours-idealSleepHours)+' hour(s).')
  } else {
    console.log('You should get some rest. '+ 'You have sleep under for '+ (idealSleepHours-actualSleepHours)+' hour(s).')
  }
}

calculateSleepDebt() 