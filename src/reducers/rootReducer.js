const initState={
    isLoginActive:true,
    curStatus:'home',
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    userRole:'',
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
    if(action.type==='USER')
    {
        
        
        
        return{
            ...state,
            first_name:action.first_name,
            last_name:action.last_name,
            email:action.email,
            password:action.password,
            userRole:action.userRole
            
        }
     
        
    }
    if(action.type==='logon')
    {
        
        
        return{
            ...state,
            emailLogin:action.email,
            passwordLogin:action.password
        }
        
        
    }
    

    console.log(state);
    return state;
}
export default rootReducer;