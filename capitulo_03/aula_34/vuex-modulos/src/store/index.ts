import { createStore } from 'vuex'
import counterModule from './counter/index'
import productsModule from './products/index'

export default createStore({
  modules: {
    counter: counterModule,
    product: productsModule
  }
})
