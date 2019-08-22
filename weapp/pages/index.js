"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _store = _interopRequireDefault(require('../store/index.js'));

var _http = _interopRequireDefault(require('../mixins/http.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _store["default"],
  mixins: [_http["default"]],
  data: {
    expressList: []
  },
  methods: {// this.$navigate({url:"content"})
  },
  computed: {},
  // 组件生命周期函数-在组件实例刚刚被创建时执行，注意此时不能调用 setData
  created: function created() {
    var _this = this;

    var $toast = this.$wxpage.selectComponent('.J_toast');
    $toast && $toast.show();
    wx.request({
      url: "http://localhost:8080/delivery/" + 'delivery',
      method: 'GET',
      success: function success(response) {
        if (response.statusCode === 200) {
          _this.expressList = response.data;
        }
      },
      fail: function fail(error) {}
    });
  },
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
}, {info: {"components":{"wxc-toast":{"path":"@minui/wxc-toast/dist/index"}},"on":{}}, handlers: {}, models: {} });