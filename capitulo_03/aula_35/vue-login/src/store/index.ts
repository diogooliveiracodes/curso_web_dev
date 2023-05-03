import { createStore } from 'vuex'
import AuthModule from './auth/index'
import productsModule from './products/index'

export default createStore({
  modules: {
    auth: AuthModule,
    products: productsModule
  }
})
