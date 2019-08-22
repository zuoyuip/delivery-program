"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _store = _interopRequireDefault(require('../store/index.js'));

var _http = _interopRequireDefault(require('../mixins/http.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _store["default"],
  mixins: [_http["default"]],
  data: {},
  methods: {},
  computed: {},
  // 组件生命周期函数-在组件实例刚刚被创建时执行，注意此时不能调用 setData
  created: function created() {},
  // 组件生命周期函数-在组件实例进入页面节点树时执行
  attached: function attached() {},
  // 组件生命周期函数-在组件布局完成后执行
  ready: function ready() {},
  // 生命周期回调—监听页面加载
  onLoad: function onLoad(query) {},
  // 生命周期回调—监听页面显示
  onShow: function onShow() {},
  // 生命周期回调—监听页面初次渲染完成
  onReady: function onReady() {},
  // 生命周期回调—监听页面隐藏
  onHide: function onHide() {},
  // 生命周期回调—监听页面卸载
  onUnload: function onUnload() {},
  // 监听用户下拉动作
  onPullDownRefresh: function onPullDownRefresh() {},
  // 页面上拉触底事件的处理函数
  onReachBottom: function onReachBottom() {},
  // 用户点击右上角转发
  onShareAppMessage: function onShareAppMessage(options) {},
  // 页面滚动触发事件的处理函数
  onPageScroll: function onPageScroll(options) {},
  // 当前是 tab 页时，点击 tab 时触发
  onTabItemTap: function onTabItemTap(options) {}
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} });