const initState={
    isLoginActive:true,
    curStatus:false,
    carousalType:''
    
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
    if(action.type==='CAROUSAL')
    {
        
        return{
            ...state,
            carousalType:action.carousalType
        }
    }
    return state;
   
}

export default rootReducer;