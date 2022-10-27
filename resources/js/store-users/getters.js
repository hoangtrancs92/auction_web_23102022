import {default} from './modules/login'
export default {
    test1: state => state.test1,
    test2: state => state.state.test2,
    test3: state => state.state.test3,
}
