import Home from '../pages/Home.vue';
import Projects from '../pages/Projects.vue';
import SkillsTree from '../pages/Skills.vue';

/**
 * Routers
 */
const routes = [

    // Home path
    {
        path: '/',
        component: Home,
    },

    // Projects list path
    {
        path: '/projects',
        component: Projects,
    },

    // Skills tree
    {
        path: '/skills',
        component: SkillsTree
    }
];
export default routes;
