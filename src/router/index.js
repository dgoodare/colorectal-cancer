import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '../views/HomeView'
import WhatIsCRC from '../views/WhatIsCRC'
import StagesOfCRC from '../views/StagesOfCRC'
import CaseStudies from '../views/CaseStudies'
import HowToUse from '../views/HowToUse'
import ReferencesView from '../views/ReferencesView'

const routes = [
    {
        path: '',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/what-is-crc',
        name: 'WhatIsCRC',
        component: WhatIsCRC
    },
    {
        path: '/stages-of-crc',
        name: 'StagesOfCRC',
        component: StagesOfCRC
    },
    {
        path: '/case-studies',
        name: 'CaseStudies',
        component: CaseStudies
    },
    {
        path: '/how-to-use',
        name: 'HowToUse',
        component: HowToUse
    },
    {
        path: '/references',
        name: 'ReferencesView',
        component: ReferencesView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router