// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Row,
  Col,
  Input,
  Button,
  Carousel,
  CarouselItem,
  Checkbox,
  CheckboxButton,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Tag,
  Pagination,
  Collapse,
  CollapseItem,
  Dialog,
  Form,
  FormItem,
  Badge,
  Tabs,
  TabPane,
  Upload,
  Switch,
  DatePicker,
  Select,
  Option,
  Message
} from 'element-ui'

import VueCookies from 'vue-cookies'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tag)
Vue.use(Pagination)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Badge)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Upload)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
// Vue.use(Message)

Vue.use(VueCookies)
Vue.use(VueQuillEditor)

// 允许携带cookie信息
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
Vue.prototype.$message = Message

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
