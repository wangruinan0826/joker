import axios from 'axios'
import store from './store'

export let add=()=>{
    // console.log('触发了add action');
    // return {
    //     type:'ADD',
    //     payload:count
    // }
    return ()=>{
        console.log('action!!!!!!!');
        axios.get('/thunk-test.json')
        .then((result)=>{
            console.log(result.data);
            store.dispatch({
                type:'ADD',
                payload:result.data.data
            })
        })
    }
}

export let reduce=(count)=>{
    console.log('触发了reduce action');
    return {
        type:'REDUCE',
        payload:count
    }
}