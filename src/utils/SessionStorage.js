export const loginUser=(foundUser)=>{
    sessionStorage.setItem("loginUser",JSON.stringify(foundUser))
}

export const removeLoginUser=(loginUser)=>{
    sessionStorage.removeItem(loginUser)
}