//import Home from './components/home.vue'
import SignUp from './SignUp.vue'
import {createRouter,createWebHistory} from 'vue-router'
import Login from './login.vue'
import Client from './components/Client.vue'
import CreateJob from './components/CreateJob.vue'
import JobDetails from './components/JobDetails.vue'
import Engineer from './components/Engineer.vue'
import Edit from './components/Edit.vue'
import adminClients from './admin/adminClients.vue'
import adminEngineers from './admin/adminEngineers.vue'
import adminEditClients from './admin/adminEditClients.vue'
import adminJobs from './admin/adminJobs.vue'
//import engineer from './components/engineer.vue'


const routes=[
    /*{
        name:'Home',
        component:Home,
        path:'/'  
    },*/
    {
        name:'adminEditClients',
        component:adminEditClients,
        path:'/adminEditClients'  
    },
    {
        name:'adminJobs',
        component:adminJobs,
        path:'/adminJobs'  
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/SignUp'  
    },
    {
        name:'adminClients',
        component:adminClients,
        path:'/adminClients'  
    },
    {
        name:'adminEngineers',
        component:adminEngineers,
        path:'/adminEngineers'  
    },
    {
        name:'Edit',
        component:Edit,
        path:'/Edit'  
    },
    {
        name:'Engineer',
        component:Engineer,
        path:'/Engineer'  
    },
    {
        name:'JobDetails',
        component:JobDetails,
        path:'/JobDetails/:id',
        props: true
    },
    {
        name:'CreateJob',
        component:CreateJob,
        path:'/CreateJob'  
    },
    {
        name:'Login',
        component:Login,
        path:'/login'  
    },
    {
        name:'Client',
        component:Client,
        path:'/'  
    },
    /*{
        name:'engineer',
        component:engineer,
        path:'/engineer'  
    }*/
];

const router =createRouter({
    history:createWebHistory(),
    routes

})

export default router;