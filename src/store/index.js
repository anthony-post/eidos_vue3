import { createStore } from 'vuex'

import session from '../store/modules/session'

const store = createStore({
    modules: {
        session,
    }
})

export default store