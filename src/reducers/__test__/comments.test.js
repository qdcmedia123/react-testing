import commentsReducers from 'reducers/comments';
import {SAVE_COMMENT} from 'actions/types';

it('handle action of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducers([], action);
    expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
    const newState = commentsReducers([], {
        type: 'DOES_NOT_EXITS'
    });

    expect(newState).toEqual([]);
})