import Api from './Api'

export default {
    loginUser(data) {
        return Api().post('/api/v1/auth/login', data)
    }
}