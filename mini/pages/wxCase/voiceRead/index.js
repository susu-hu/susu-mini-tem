// pages/wxCase/voiceRead/index.js
//引入插件：微信同声传译
const plugin = requirePlugin('WechatSI')
Page({
  data: {
    content: '此开卷第一回也。作者自云：因曾历过一番梦幻之后，故将真事隐去，而借“通灵”之说，撰此《石头记》一书也。故曰“甄士隐”云云。但书中所记何事何人？自又云：“今风尘碌碌，一事无成，忽念及当日所有之女子，一一细考较去，觉其行止见识，皆出于我之上。何我堂堂须眉，诚不若彼裙钗哉？',
    // 实愧则有馀，悔又无益之大无可如何之日也！当此，则自欲将以往所赖天恩祖德，锦衣纨绔之时，饫甘餍肥之日，背父兄教育之恩，负师友规谈之德，以至今日一技无成，半生潦倒之罪，编述一集，以告天下人：我之罪固不免，然闺阁中本自历历有人，万不可因我之不肖，自护己短，一并使其泯灭也。虽今日之茅椽蓬牖，瓦灶绳床，其晨夕风露，阶柳庭花，亦未有妨我之襟怀笔墨者。虽我未学，下笔无文，又何妨用假语村言，敷演 出一段故事来，亦可使闺阁昭传，复可悦世之目，破人愁闷，不亦宜乎？”故曰“贾雨村”云云。
  },
  onReady() {
    //创建内部 audio 上下文 InnerAudioContext 对象。
    this.innerAudioContext = wx.createInnerAudioContext();
    wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
      obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
      success: function (e) { },
      fail: function (e) { }
    })
  },

  // 文字转语音
  read: function (e) {
    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: this.data.content,
      success: (res) => {
        console.log('succ', res);
        this.play(res.filename);
      },
      fail: (res) => {
        console.log("fail", res)
      }
    })
  },

  //播放语音
  play: function (e) {
    console.log(e)
    if (!e) return;
    this.innerAudioContext.src = e; //设置音频地址
    this.innerAudioContext.play(); //播放音频
    console.log(this.innerAudioContext)
  },
})
// TODO --超出1000字节分段朗读
// TODO --关闭暂停播放