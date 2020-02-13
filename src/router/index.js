import VueRouter from 'vue-router'
import Vue from 'vue'
import heima_user from '../components/heima_user'
import heima_login from '../components/heima_login'
import heima_city from '../components/heima_city'
import heima_direction from '../components/heima_direction'
import heima_enterprise from '../components/heima_enterprise'
import heima_options from '../components/heima_options'
import heima_questions from '../components/heima_questions'
import heima_role from '../components/heima_role'
import heima_subject from '../components/heima_subject'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: heima_user
        },
        {
            path: "/heima_login",
            component: heima_login
        },

        {
            path: "/heima_city",
            component: heima_city
        },
        {
            path: "/heima_direction",
            component: heima_direction
        },
        {
            path: "/heima_enterprise",
            component: heima_enterprise
        },
        {
            path: "/heima_options",
            component: heima_options
        },
        {
            path: "/heima_questions",
            component: heima_questions
        },
        {
            path: "/heima_role",
            component: heima_role
        },
        {
            path: "/heima_subject",
            component: heima_subject
        },
    ]
})

export default router