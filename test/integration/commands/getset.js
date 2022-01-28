import Redis from 'ioredis'

describe('getset', () => {
  it('should set the new value and return the old value', () => {
    const redis = new Redis({
      data: {
        foo: 'Hello',
      },
    })
    return redis
      .getset('foo', 'World')
      .then(result => {
        return expect(result).toBe('Hello')
      })
      .then(() => {
        return expect(redis.data.get('foo')).toBe('World')
      })
  })
  it('should set the new value and return null when does not have an old value', () => {
    const redis = new Redis({
      data: {},
    })
    return redis
      .getset('foo', 'World')
      .then(result => {
        return expect(result).toBe(null)
      })
      .then(() => {
        return expect(redis.data.get('foo')).toBe('World')
      })
  })
})