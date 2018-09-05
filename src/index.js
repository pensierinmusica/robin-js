
function participantsArrGen (participants, randomStart) {
  // Accepts the number of participants or an array with their names,
  // and returns the array of participants, allowing for randomization.
  // It guarantess the returned array has always an even number of elements
  // (if the number of participants is odd the first element will be "null").
  const isNamesArr = Array.isArray(participants)
  if (!((Number.isInteger(participants) && participants > 0) || isNamesArr)) {
    throw new Error('The "participants" argument must be a positive integer or an array of names')
  }
  const res = []
  const numOfParticipants = isNamesArr ? participants.length : participants
  const isOdd = numOfParticipants % 2 === 1
  if (isOdd) res.push(null)
  let pos = randomStart ? Math.ceil(Math.random() * numOfParticipants) : 1
  for (let i = 0; i < numOfParticipants; i++) {
    res.push(isNamesArr ? participants[pos - 1] : pos)
    pos = pos % numOfParticipants + 1
  }
  return res
}

export default (participants, opts = { randomStart: false, rounds: 0 }) => {
  if (typeof opts !== 'object') {
    throw new Error('The "opts" argument must be an object')
  }

  const participantsArr = participantsArrGen(participants, opts.randomStart)
  const half = participantsArr.length / 2
  const end = participantsArr.length - 1

  let { rounds } = opts
  if (!rounds) {
    rounds = end
  } else if (!(Number.isInteger(rounds) && rounds > 0)) {
    throw new Error('The "opts.rounds" argument must be a positive integer')
  }

  const res = []
  for (let i = 0; i < rounds; i++) {
    const round = []
    for (let i = 0; i < half; i++) {
      const pair = []
      const firstEl = participantsArr[i]
      const secondEl = participantsArr[end - i]
      if (firstEl) pair.push(firstEl)
      pair.push(secondEl)
      round.push(pair)
    }
    res.push(round)
    participantsArr.splice(1, 0, participantsArr.pop())
  }

  return res
}
