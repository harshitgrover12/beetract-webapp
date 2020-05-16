const initState={
    isLoginActive:true,
    curStatus:'home',
    name:'',
    email:'',
    password:'',
   
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
    if(action.type==='USER')
    {
        console.log(action.name);
        console.log(action.email);
        console.log(action.password);
        return{
            ...state,
            name:action.name,
            email:action.email,
            password:action.password
        }
        
    }
    if(action.type==='logon')
    {
        
        console.log(action.email)
        return{
            ...state,
            emailLogin:action.email,
            passwordLogin:action.password
        }
        
    }
    

    
    return state;
}
export default rootReducer;