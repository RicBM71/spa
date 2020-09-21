import Home from './components/Home.vue';
import Dash from './components/Dash.vue';

export default [
	{
		path: '/',
		name: 'index',
		component: Dash
    },
	// {
    //     path: '/home',
    //     component: Home,
    //     children: [
    //         {
	// 			path: '',
	// 			name: 'dash',
    //             component: Main,
    //         },
    //     ]
    // },
    // {
    //     path: '*',
    //     name: '404',
    //     component: st404,
    // }
];
