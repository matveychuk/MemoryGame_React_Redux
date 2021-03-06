import {combineReducers} from 'redux';
import data from './data';
import results from './results';

// Reducer - это обработчик события, мы можем создавать под определенные логически cвязаные
// действия свой редьюсер, например в случае с нашим репозиторием, я создал

// Собираем все редьюсеры в один большой, для того чтобы в
// дальнейшем передать его в store.
// Ложить его в store нужно для того чтобы при вызове какого-то события - это событие обработалось нужным нам редьюсером.

const reducers = combineReducers({
    data,
    results
});

export default reducers;