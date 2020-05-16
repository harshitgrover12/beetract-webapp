const initState={
    isLoginActive:true,
    curStatus:'home',
}
const rootReducer=(state=initState,action)=>{
    if(action.type==='LOGIN')
    {
        return {
            ...state,
            isLoginActive:action.isLoginActive
        }
    }
    if(action.type==='STATUS')
    {
        console.log(action.curStatus);
        return{
            ...state,
            curStatus:action.curStatus
        }
    }
    return state;
}
export default rootReducer;