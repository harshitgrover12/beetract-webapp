const initState={
    isLoginActive:true,
    curStatus:false,
    
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
        
        return{
            ...state,
            curStatus:action.curStatus
        }
    }
    return state;
   
}

export default rootReducer;