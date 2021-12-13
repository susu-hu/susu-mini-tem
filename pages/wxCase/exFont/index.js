// pages/wxCase/exFont/index.js
Page({


  data: {
    a: "<ol style='width:500px'><li>你好是否是大法官是的克己奉公的健身房给的数据分公司的痕迹方式的看见粉红色的就风扇电机发</li><li>23123123621721221272213213123213612321837128712983219832190831-02931-209321-312321</li></ol>"
  },

  onLoad: function (options) {
    let content = this.data.a; //富文本
    content = content.replace(/<[^>]+>/, '<ol class="s2"')
    // let reg = getRegExp("<[^>]+>", "g");
    // content = content.replace(/<[^>]+>/gi, '< class="s2"')
    this.setData({
      a: content
    })
  },

  
})