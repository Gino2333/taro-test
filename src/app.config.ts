export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/test/index'
  ],
  tabBar: {
    color: '#999999',
    selectedColor: '#ff5869',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/test/index',
        text: '测试',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
