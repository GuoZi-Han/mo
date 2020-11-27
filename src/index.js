import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import store from './store'
import Route from '@/router'
import '@/styles/index.less'


    class P1 {
      constructor (n) {
        // this === P2 的 this
        this.x1 = n
      }
    }
    
    class P2 extends P1 {
      // 子类没有自己的 this
      constructor (age) {
        super(27) // 调用父类的 constructor
        this.age = age
      }
    }

    const p1 = new P2(25)

    console.log(p1)
    
		




ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <Route />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
