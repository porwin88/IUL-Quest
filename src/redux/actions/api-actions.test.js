import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { getData } from './api-actions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('fetch request', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates SAVE_DATA after fetching the data', () => {
    fetchMock.getOnce('/data', {
      body: { questions: ['question1', 'question2']}
    })

    const expectedAction = {
      type: 'SAVE_DATA',
      body: { questions: ['question1', 'question2']}
    }

    const store = mockStore({questions: []})

    return store.dispatch(getData().then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    }))
  })
})

