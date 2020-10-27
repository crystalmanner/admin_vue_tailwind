import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/layout/login'
import SampleProjects from '@/components/layout/sampleProjects'
import Tables from '@/components/layout/tables'
import Profile from '@/components/layout/editProfile'
import Administration from '@/components/layout/userAdministration'
import ConfirmEmail from '@/components/layout/confirmEmail'
import LayoutView from '@/layouts/layoutView'


Vue.use(Router)


const router = new Router({
    routes: [{
            path: '/login',
            name: 'Login',
            component: Login,
            props: true
        },
        {
            path: '/',
            component: LayoutView,
            children: [{
                    path: '/',
                    name: 'SampleProjects',
                    component: SampleProjects,
                    props: true
                },
                {
                    path: '/tables',
                    name: 'Tables',
                    component: Tables,
                    props: true
                },
                {
                    path: '/profile',
                    name: 'Profile',
                    component: Profile,
                    props: true
                },
                {
                    path: '/administration',
                    name: 'Administration',
                    component: Administration,
                    props: true
                },
                {
                    path: '/confirmEmail',
                    name: 'ConfirmEmail',
                    component: ConfirmEmail,
                    props: true
                },
                {
                    path: '/tables_dec_cporducts',
                    name: 'tab_dec_cproducts',
                    component: Tables,
                    props: true
                }
            ]
        }
    ]
})
/*
router.beforeEach((to, from, next) => {
    if (to.path != '/' && to.path != '/login' && to.path != '/register' && to.path != '/verification' && to.path != '/reset') {
        if (localStorage["jwt"]) {
            //console.log("Jwt exist!")
            next()
        } else {
            //console.log("Jwt not exist!")
            next('/')
        }
    } else {
        if (localStorage["jwt"]) {
            //console.log("Auth routes but jwt exist!")
            next('/pre_menu')
        } else {
            //console.log("Auth routes without jwt!");
            next()
        }
    }
});
*/

export default router;