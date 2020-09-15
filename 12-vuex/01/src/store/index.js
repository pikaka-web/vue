import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //状态  --就是所有组件都能够使用的数据
  state: {
    num: 100,
    pika: '皮卡',
    mint: {
      name: '薄荷',
      age: 20
    }
  },

  /*
  * getters 对于 state
  * 类似于
  * computed 对于 data
  * */
  getters: {
    mintInfo(state,getters) {
      return state.mint.name + '今年' + state.mint.age;
    },
    xx(state,getters) {
      return getters.mintInfo + 'xxxxx';
    }
  },

  //定义一些state数据的（同步）方式
  mutations: {
    addNum(state,n) {
      state.num += n;
    },
    reduceNum(state,n) {
      state.num -= n;
    }
  },
  /*
  * 定义一些二操作mutations的（异步）方式
  * */
  actions: {
    addNumAsync(context,n){
      new Promise((res)=>{
        setTimeout(res,1000);
      }).then(()=>{
        //异步完成之后，触发mutations
        context.commit("addNum" , n);
      });
    }

  },
  modules: {
  }
})
