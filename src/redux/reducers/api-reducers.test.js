import apiReducer from './api-reducers';

describe('api reducer', () => {
  test('return the initial state  ', () => {
    const newState = apiReducer(undefined, {});
    expect(newState).toStrictEqual({
      data: [],
    })
  })

  test('should handle SAVE_DATA', () => {
    const data = [{test1: 1}, {test2: 2}];
    const newState = apiReducer({}, {
      type: 'SAVE_DATA',
      data,
    })
    expect(newState).toEqual({
      data: [
        {test1: 1},
        {test2: 2},
      ]
    })
  })
})