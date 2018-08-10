import Vue from 'vue';
import Router from 'vue-router';

const _import = require('./_import_' + process.env.NODE_ENV);
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout';

/* login */
const Login = _import('login/index');
const authRedirect = _import('login/authredirect');

const dataCenter = _import('list/index');
const detail = _import('echarts/echarts');

Vue.use(Router);

export const constantRouterMap = [
  {path: '/login', component: Login, hidden: true},
  {path: '/authredirect', component: authRedirect, hidden: true},
  {path: '/dataCenter', component: dataCenter, hidden: true},
  {
    path: '/dataCenter',
    component: Layout,
    redirect: '/',
    name: '首页',
    hidden: true,
    children: [
      {path: 'list', component: dataCenter},
      {path: 'detail', component: detail},
    ]
  },
  // {
  //   path: '/components',
  //   component: Layout,
  //   redirect: '/',
  //   name: '系统管理',
  //   icon: 'zujian',
  //   children: [
  //     {path: 'role', component: role, name: '角色管理', meta: {requireAuth: 'rolePageMain'}},
  //     {path: 'roleListUpdate', component: roleListUpdate, name: '角色编辑试试', meta: {requireAuth: 'rolePageEditor'}},
  //     {path: 'roleListInsert', component: roleListInsert, name: '角色添加', meta: {requireAuth: 'rolePageAdd'}},
  //     {path: 'allocatingMenu', component: allocatingMenu, name: '角色分配权限', meta: {requireAuth: 'rolePageAllauth'}},
  //     {path: 'userList', component: userList, meta: {requireAuth: 'userPageMain'}, name: '用户管理'},
  //     {path: 'userListInsert', component: userListInsert, name: '用户添加', meta: {requireAuth: 'userPageAdd'}},
  //     {path: 'userListUpdate', component: userListUpdate, name: '用户编辑', meta: {requireAuth: 'userPageEditor'}},
  //     {path: 'allocatingRole', component: allocatingRole, name: '分配菜单权限', meta: {requireAuth: 'userPageAllrole'}}
  //   ]
  // },
]
export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
});

