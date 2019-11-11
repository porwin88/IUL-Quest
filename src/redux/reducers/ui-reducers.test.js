import uiReducer from './ui-reducers';

describe('ui reducer', () => {
  test('return the initial state  ', () => {
    const newState = uiReducer(undefined, {});
    expect(newState).toStrictEqual({
      showDetails: {},
    })
  })

  test('should handle TOGGLE_SHOW_DETAILS', () => {
    const question = 'testQuestion';
    const val = true;
    const newState = uiReducer({}, {
      type: 'TOGGLE_SHOW_DETAILS',
      question,
      val,
    })
    expect(newState).toEqual({
      showDetails: {
        testQuestion: true,
      }
    })
  })
})
