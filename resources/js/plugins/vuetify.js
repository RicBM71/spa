import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
import es from 'vuetify/src/locale/es.ts'

const opts = {
    lang: {
        locales: { es },
        current: 'es',
      },
      icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
}

export default new Vuetify(opts)



// import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

// import Vue from 'vue'
// import Vuetify from 'vuetify/lib'

// Vue.use(Vuetify)

// const opts = {}

// export default new Vuetify({
//   icons: {
//     iconfont: 'mdi', // default - only for display purposes
//   },
// })
