import {createStore} from 'redux';

//1) Initial State
const initialState = {
    user : {
        username: "Praneeth Allichetty",
        balance: 70000,

    }
}


//2) Action
 export const addMoney = (amt) => ({
    type: 'addMoney',
    payload: amt,
});

 export const removeMoney  = (amt) => ({
    type: "removeMoney",
    payload: amt,
 });


//3) Reducer
function reducer(state = initialState, action) {
    switch(action.type) {
        case "addMoney":
            return {
                user : {
                 username: state.user.username,
                  balance: state.user.balance + action.payload
                },
            };
        
            case "removeMoney":
                return {
                    user : {
                        username: state.user.username,
                        balance: state.user.balance - action.payload,
                    },
                };
            default:
                return state;
        }
    }

const store = createStore(reducer);
export default  store;