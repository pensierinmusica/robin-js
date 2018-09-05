'use strict'

const pairsGen = require('./../dist/index.cjs.js')

const evenNamesArr = ['Tom', 'Lucy', 'Hannah', 'Jack']
const oddNamesArr = ['Tom', 'Lucy', 'Hannah', 'Jack', 'Dora']

describe('Round-robin pairs utility', () => {
  test(
    'Should throw on invalid input',
    () => {
      expect(() => pairsGen('hello')).toThrow()
      expect(() => pairsGen(-3)).toThrow()
      expect(() => pairsGen(0)).toThrow()
      expect(() => pairsGen(0)).toThrow()
    }
  )

  test(
    'Should return the correct number of rounds',
    () => {
      expect(pairsGen(3).length).toBe(3)
      expect(pairsGen(4).length).toBe(3)
      expect(pairsGen(3, { rounds: 2 }).length).toBe(2)
      expect(pairsGen(3, { rounds: 4 }).length).toBe(4)
      expect(pairsGen(4, { rounds: 2 }).length).toBe(2)
      expect(pairsGen(4, { rounds: 4 }).length).toBe(4)
      expect(pairsGen(evenNamesArr).length).toBe(evenNamesArr.length - 1)
      expect(pairsGen(oddNamesArr).length).toBe(oddNamesArr.length)
      expect(pairsGen(evenNamesArr, { rounds: 2 }).length).toBe(2)
      expect(pairsGen(evenNamesArr, { rounds: 4 }).length).toBe(4)
      expect(pairsGen(oddNamesArr, { rounds: 4 }).length).toBe(4)
      expect(pairsGen(oddNamesArr, { rounds: 6 }).length).toBe(6)
    }
  )

  test(
    'If no rounds are specified each member should be paired only once with every other and never with itself',
    () => {
      function validator (arr) {
        const mem = {}
        return arr.every(round => {
          return round.every(pair => {
            const firstEl = pair[0]
            const secondEl = pair[1]
            if (typeof mem[firstEl] === 'undefined') mem[firstEl] = {}
            if (mem[firstEl][secondEl] || firstEl === secondEl) return false
            else mem[firstEl][secondEl] = true
            return true
          })
        })
      }
      expect(validator(pairsGen(6))).toBe(true)
      expect(validator(pairsGen(7))).toBe(true)
      expect(validator(pairsGen(evenNamesArr))).toBe(true)
      expect(validator(pairsGen(oddNamesArr))).toBe(true)
    }
  )
})
