import { toggleShowDetails } from '../actions/ui-actions';

describe('toggleShowDetails', () => {
  test('returns an action with type TOGGLE_SHOW_DETAILS and the correct payload', () => {
    const question = 'testQuestion';
    const val = false;
    const expectedAction = toggleShowDetails(question, val);
    expect(expectedAction).toEqual({ type: 'TOGGLE_SHOW_DETAILS', question: 'testQuestion', val: false });
  });
});