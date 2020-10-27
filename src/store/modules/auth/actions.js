import * as types from './mutation-types'
import stitchClient from '../../../lib/stitch';

const {
    UserPasswordCredential,
    UserPasswordAuthProviderClient,
} = require('mongodb-stitch-browser-sdk');

export const login = ({ commit }, data) => {
    const credential = new UserPasswordCredential(data.email, data.password);
    return new Promise((resolve, reject) => {
        stitchClient.auth.loginWithCredential(credential)
        .then(user => {
            localStorage.setItem("user", data.email)
            localStorage.setItem("accesstoken", user.auth.authInfo.accessToken)
            localStorage.setItem("currentUser", user.id)
            commit(types.AUTH_SUCCESS, user)
            resolve(user)
        })
        .catch(err => {
            console.log("login error:", err);
            commit(types.AUTH_ERROR, err)
            reject(err)
        });
    })
}

export const signUp = ({ commit }, data) => {
    const emailPassClient = stitchClient.auth.getProviderClient(UserPasswordAuthProviderClient.factory, "local-userpass");
    return new Promise((resolve, reject) => {
        emailPassClient.registerWithEmail(data.email, data.password)
        .then(() => {
            commit(types.SIGNUP_SUCCESS)
            resolve()
        })
        .catch(err => {
            commit(types.SIGNUP_ERROR, err)
            console.log("login error:", err);
            reject(err)
        });
    })

}

export const confirmEamil = ({ commit }, data) => {
    const emailPassClient = stitchClient.auth.getProviderClient(UserPasswordAuthProviderClient.factory, "local-userpass");
    return new Promise((resolve, reject) => {
        emailPassClient.confirmUser(data.token, data.tokenId)
        .then(() => {
            console.log("success")
            resolve()
            commit(types.CONFIRM_EMAIL_SUCCESS)
        })
        .catch(err => {
            commit(types.CONFIRM_EMAIL_ERROR, err)
            console.log("login error:", err);
            reject(err)
        });
    })
}

export const handleResendConfirmEmail = ({ commit }, email) => {
    const emailPassClient = stitchClient.auth.getProviderClient(UserPasswordAuthProviderClient.factory, "local-userpass");
    return new Promise((resolve, reject) => {
        emailPassClient.resendConfirmationEmail(email)
        .then((res) => {
            commit(types.RESEND_CONFIRM_EMAIL_SUCCESS)
            resolve()

        })
        .catch(err => {
            commit(types.RESEND_CONFIRM_EMAIL_ERROR, err)
            reject(err)
        });
    })
}


export const handleResetPasswordReqest = ({ commit }, email) => {
    const emailPassClient = stitchClient.auth.getProviderClient(UserPasswordAuthProviderClient.factory, "local-userpass");
    return new Promise((resolve, reject) => {
        emailPassClient.sendResetPasswordEmail(email)
        .then(() => {
            console.log("success")
            commit(types.RESET_PASSWORD_REQUEST_SUCCESS)
            resolve()
        })
        .catch(err => {
            commit(types.RESET_PASSWORD_REQUEST_ERROR, err)
            console.log("login error:", err);
            reject(err)
        });
    })
}

export const handleResetPassword = ({ commit }, data) => {
    const emailPassClient = stitchClient.auth.getProviderClient(UserPasswordAuthProviderClient.factory, "local-userpass");
    return new Promise((resolve, reject) => {
        emailPassClient.resetPassword(data.token, data.tokenId, data.password)
        .then(() => {
            console.log("success")
            resolve()
            commit(types.RESET_PASSWORD_SUCCESS)
        })
        .catch(err => {
            commit(types.RESET_PASSWORD_ERROR, err)
            console.log("login error:", err);
            reject(err)
        });
    })
}