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
  CountDown,
  Grid,
  GridItem,
  Divider,
  Empty,
  ImagePreview,
  List,
  NoticeBar,
  Swipe,
  SwipeItem,
  Popover,
  Progress,
  Skeleton,
  Step,
  Steps,
  Sticky,
  IndexBar,
  IndexAnchor,
  NavBar,
  Pagination,
  Sidebar,
  SidebarItem,
  Tabbar,
  TabbarItem,
  TreeSelect,
  AddressEdit,
  AddressList
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
  .use(CountDown)
  .use(Grid)
  .use(GridItem)
  .use(Divider)
  .use(Empty)
  .use(ImagePreview)
  .use(List)
  .use(NoticeBar)
  .use(Swipe)
  .use(SwipeItem)
  .use(Popover)
  .use(Progress)
  .use(Skeleton)
  .use(Steps)
  .use(Step)
  .use(Sticky)
  .use(IndexBar)
  .use(IndexAnchor)
  .use(NavBar)
  .use(Pagination)
  .use(Sidebar)
  .use(SidebarItem)
  .use(Tabbar)
  .use(TabbarItem)
  .use(TreeSelect)
  .use(AddressEdit)
  .use(AddressList)
  .use(Dialog);

Vue.config.productionTip = false;
import router from './router'

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
