import Api from './Api'

export default {
    getUsers(data) {
        return Api().get('/api/v1/admin/users')
    },
    createUser(data) {
        return Api().post('/api/v1/admin/user/create', data)
    },
    updateUser(data) {
        return Api().put('/api/v1/admin/user/' + data.userID, data)
    },
    deleteUser(data) {
        return Api().delete('/api/v1/admin/user/' + data.userID)
    },
}