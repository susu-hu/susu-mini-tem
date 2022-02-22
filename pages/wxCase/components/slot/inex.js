// pages/wxCase/components/slot/inex.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['my-class'],
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    styleIsolation: 'isolated'//指定特殊的样式隔离选项
  },
  properties: {
    propA: {
      type: String,
    },
    propB: {
      type: String,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
