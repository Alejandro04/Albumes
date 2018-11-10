export const saveToken = (token)=>{
    return {
        type: 'SET_TOKEN',
        token
    }
}

export const clearToken = ()=>{
    return {
        type: 'CLEAR_TOKEN',
    }
}


export const setUser = (user)=>{
    return {
        type: 'SIGN_IN',
        user
    }
}

export const clearUser = (user)=>{
    return {
        type: 'SIGN_OUT'
    }
}