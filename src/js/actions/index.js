import * as types from '../constants/actionTypes';

// Actions here

export const someAction = (payload) => ({type: types.SOME_ACTION, payload});
export const handleClick = (payload) => ({type: types.HANDLE_ClICK, payload});
export const removeInitial = () => ({type: types.REMOVE_INITIAL});
export const compareClicked = (payload) => ({type: types.COMPARE_CLICKED, payload});
export const endGame = (payload, score) => ({type: types.END_GAME, payload, score});

