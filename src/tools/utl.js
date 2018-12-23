export default {
    checkLogin(){
        if(localStorage.getItem('toekn'))
        {
            return true
        }else{
            return false
        }
    },

    getUser()
    {
        return localStorage.getItem('user')
    },
    getToken()
    {
        return localStorage.getItem('token')
    }

}