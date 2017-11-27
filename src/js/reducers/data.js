import initialState from '../constants/initialState';
import * as types from '../constants/actionTypes';

/*
*
* Это reducer, он обрабатывает наши actions. Можно создать несколько редьюсеров для разных
* по смыслу событий.
*
* Reducer это функция (всегда), которая принимает на вход два параметра,
*
* первый - state, это или кусочек данных из всего приложения который мы можем с помощью
* этого редьюсера изменять.
*
* второй - action, это событие которое мы вызвали. Событием в redux служит объект, который по
* договоренности должен содержать в себе тип события, и определенные данные которые
* опять же по договоренности называются payload, этим payload может быть что угодно.
*
* Есть еще одно правило - функция reducer должна являться чистой функцией.
*
* Чистая функция — это функция, которая при одинаковых аргументах всегда
* возвращает одни и те же значения и не имеет видимых побочных эффектов.
*
*/

export default function data(state = initialState.numbers, action) {
    let { type, payload } = action;

    switch (type) {
        case types.SOME_ACTION:
            return state;
        case types.REMOVE_INITIAL:
            return (
                state.map((item, index) => {
                    return { ...item, initial: false }
                })
            )
        case types.HANDLE_ClICK:
            // console.log('change class', payload);
            return (
                state.map((item, index) => {
                    if (index == payload) {
                        return { ...item, clicked: true }
                    }
                    return item;
                })
            )
        case types.COMPARE_CLICKED:
            // console.log('compare', payload);
            // if (payload.length == 2) {
                if (payload[0] == payload[1]) {
                    return (
                        state.map((item, index) => {
                            if (item.value == payload[0]) {
                                return {...item, disable: true, clicked: false}
                            }
                            else return item;
                        })
                    )
                } else {
                    // console.log('not equal');
                    return state.map((item, index) => ({ ...item, clicked: false }));
                }
            // } else {
                // console.log('one item')
                return state;
            // }
            
            
        default:
            return state;
    }
};