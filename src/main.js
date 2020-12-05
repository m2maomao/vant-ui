import Vue from "vue";
import App from "./App.vue";
import "vant/lib/index.css";
import "lib-flexible";
import {
  Lazyload,
  Button,
  Calendar,
  Checkbox,
  CheckboxGroup,
  DropdownMenu,
  DropdownItem,
  Popup,
  Icon,
  DatetimePicker,
  Tab,
  Tabs,
  Collapse,
  CollapseItem,
  Dialog,
  Cell,
  CellGroup,
  Radio,
  RadioGroup,
  Field,
  Picker,
  Tag,
  Image,
  Loading,
  Row,
  Col,
  Toast,
  Form,
  Switch,
  Stepper,
  Rate,
  Slider,
  Uploader,
  Area,
  NumberKeyboard,
  PasswordInput,
  Search,
  ActionSheet,
  Notify,
  Overlay,
  PullRefresh,
  ShareSheet,
  SwipeCell,
  Card,
  Badge,
  Circle,
} from "vant";

import "vant/lib/index.css";
Vue.use(Lazyload, {
  lazyComponent: true
})
  .use(Button)
  .use(Cell)
  .use(CellGroup)
  .use(Collapse)
  .use(CollapseItem)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(DatetimePicker)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Field)
  .use(Icon)
  .use(Popup)
  .use(Picker)
  .use(Tab)
  .use(Tabs)
  .use(Radio)
  .use(RadioGroup)
  .use(Calendar)
  .use(Tag)
  .use(Image)
  .use(Loading)
  .use(Row)
  .use(Col)
  .use(Toast)
  .use(Form)
  .use(Switch)
  .use(Stepper)
  .use(Rate)
  .use(Slider)
  .use(Uploader)
  .use(Area)
  .use(NumberKeyboard)
  .use(PasswordInput)
  .use(Search)
  .use(ActionSheet)
  .use(Notify)
  .use(Overlay)
  .use(PullRefresh)
  .use(ShareSheet)
  .use(SwipeCell)
  .use(Card)
  .use(Badge)
  .use(Circle)

  .use(Dialog);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
