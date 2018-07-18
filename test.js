const should = require('should')

const splitFilter = require('./index')

describe('splitFilter', () => {
  const arrayToSplit = [1, 2, 'a', 3, 'b', 'c', 4, [], true, {}, 100, 'z']

  it('should split an array based on a filterFn', () => {
    const stringResults = splitFilter(arrayToSplit, (item) => typeof item === 'string')
    const [stringArray, stringLeftovers] = stringResults

    stringArray.length.should.eql(4)
    stringLeftovers.length.should.eql(8)
  })

  it('should split an array twice', () => {
    const stringResults = splitFilter(arrayToSplit, (item) => typeof item === 'string')
    const [stringArray, stringLeftovers] = stringResults

    const numberResults = splitFilter(stringLeftovers, (item) => typeof item === 'number')
    const [numbersArray, leftovers] = numberResults

    stringArray.length.should.eql(4)
    stringLeftovers.length.should.eql(8)
    numbersArray.length.should.eql(5)
    leftovers.length.should.eql(3)
  })
})
