import getDuration from './getDuration'

describe('getDuration', () => {
  it('Should return duration', () => {
    expect(getDuration(1234)).toEqual('20:34')
  })
})
