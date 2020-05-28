const initState={
    isloginactive:true,
    curstatus:false,
    carousaltype:'',
    thingtype:'',
    
}
const rootReducer=(state=initState,action)=>{
    if(action.type==='LOGIN')
    {
        return {
            ...state,
            isloginactive:action.isloginactive
        }
    }
    if(action.type==='STATUS')
    {
        
        return{
            ...state,
            curstatus:action.curstatus
        }
    }
    if(action.type==='CAROUSAL')
    {
        
        return{
            ...state,
            carousaltype:action.carousaltype
        }
    }
    if(action.type==='THING'){
        return{
            ...state,
            thingtype:action.thingtype
        }

    }
    return state;
   
}

export default rootReducer;