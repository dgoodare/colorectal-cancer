import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '../views/HomeView'
import ColorectalCancer from '../views/ColorectalCancer'
import ColonAnatomy from '../views/ColonAnatomy'
import StagesOfCRC from '../views/StagesOfCRC'
import CaseStudies from '../views/CaseStudies'
import HowToUse from '../views/HowToUse'
import ReferencesView from '../views/ReferencesView'
import CaseOneView from '../views/CaseOneView'
import CaseTwoView from '../views/CaseTwoView'
import CaseThreeView from '../views/CaseThreeView'

const routes = [
    {
        path: '',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/colorectal-cancer',
        name: 'ColorectalCancer',
        component: ColorectalCancer
    },
    {
        path: '/colon-anatomy',
        name: 'ColonAnatomy',
        component: ColonAnatomy
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
    {
        path: '/CaseStudyOne',
        name: 'CaseOne',
        component: CaseOneView
    },
    {
        path: '/CaseStudyTwo',
        name: 'CaseTwo',
        component: CaseTwoView
    },
    {
        path: '/CaseStudyThree',
        name: 'CaseThree',
        component: CaseThreeView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router