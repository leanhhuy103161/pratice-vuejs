import Error404 from './components/user/Error404.vue'
import Home from './components/Home.vue'

// import User from './components/user/User.vue' 
const User = resolve => {
    require.ensure(['./components/user/User.vue' ], () => {
        resolve(require('./components/user/User.vue' ))
    }, 'user')
}

// import UserDetail from './components/user/UserDetail.vue'
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'))
    }, 'user')
}

// import UserEdit from './components/user/UserEdit.vue'
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'))
    }, 'user')
}

// import UserStart from './components/user/Index.vue'
const UserStart = resolve => {
    require.ensure(['./components/user/Index.vue'], () => {
        resolve(require('./components/user/Index.vue'))
    }), 'user'
}



import Header from './components/layouts/Header.vue'


// define routes to component
export const routes = [
    { path: '/', name: 'homepage', components: {
        default: Home,
        'page-header': Header
    }},
    { path: '/user', /* name: 'user',*/ component: User, children: [
        {path: '', name: 'index', component: UserStart},
        {path: ':id', name: 'userdetail', component: UserDetail, beforeEnter: (to, from, next) => {
            console.log('Private guard for userdetail path');
            next()
        }},
        {path: ':id/edit', name: 'useredit', component: UserEdit},
    ]},
    { path: '/auth-redirect', name: 'authredirect', redirect: {name: 'homepage'}},
    { path: '/404', name: 'error404', component: Error404},
    { path: '*', redirect: '/404'}
]