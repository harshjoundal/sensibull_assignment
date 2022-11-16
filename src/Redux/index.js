import { legacy_createStore} from 'redux'

let init = {
    'username': localStorage.getItem('user') || '',
    'email' : ''
}

function reducer(state=init,action){

    switch(action.type){
        case 'login':{
            localStorage.setItem('user',action.payload.username);
            return {...state,email:action.payload.email,username:action.payload.username}
        }

        case 'logout':{
            localStorage.removeItem('user')
            return {
                email :'',
                password:''
            }
        }

        default : return state;

    }
}


export const store = legacy_createStore(reducer);