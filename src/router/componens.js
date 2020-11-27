import Loadable from '@@/Loadable'

const Home = Loadable(() => import('@/pages/home'))
const Login = Loadable(() => import('@/pages/login'))
const Forms = Loadable(() => import('@/pages/forms'))

export {
  Home,
  Login,
  Forms,
}
