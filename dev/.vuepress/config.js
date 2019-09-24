// .vuepress/config.js
module.exports = {
  /* 使用插件 */
  plugins: [
    /* 两个插件只能选一个 */
    ['@vuepress/plugin-back-to-top', false],
    [
      require('../../vuepress-plugin-gotop-plus/index'), {
        // 是否在移动设备上显示(default: true)
        mobileShow: false,
        // // 回到页首元素显示触发的高度阈值(default: 50)
        threshold: 50
      }
    ],
  ],
  themeConfig: {
    nav: [{
      text: 'Home',
      link: '/'
    }],
  },
}
