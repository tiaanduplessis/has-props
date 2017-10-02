const hasProps = require('./')

test('should be defined', () => {
  expect(hasProps).toBeDefined()
})

test('should check if object has properties', () => {

  const foo = {}
  const bar ={baz: 'foo'}

  expect(hasProps(foo)).toBe(false)
  expect(hasProps(bar)).toBe(true)
})
