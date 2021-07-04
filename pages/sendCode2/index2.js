// pages/sendCode2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'132****6678',
    amount:6,
    code:[],
    currentIndex:0,
    code2:'',
    isCan: false, //是否可以提交
  },

  
  onLoad: function (options) {
    this.createCode()
  },
  checkAnother(){
      this.createCode()
  },
  createCode() {
    var code2;
    //首先默认code为空字符串
    code2 = '';
    //设置长度，这里看需求，我这里设置了4
    var codeLength = 6;
    //设置随机字符
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    //循环codeLength 我设置的4就是循环4次
    for (var i = 0; i < codeLength; i++) {
        //设置随机数范围,这设置为0 ~ 3
        var index = Math.floor(Math.random() * 36);
        //字符串拼接 将每次随机的字符 进行拼
        code2 += random[index];
    }
    //将拼接好的字符串赋值给展示的code
    this.setData({
        code2: code2
    })
  },
  
  onShow: function () {
    var a=['1','2','a']
    console.log(a.toString())
    console.log(a.toLocaleString())
    console.log(a.join(''))
  },

  handleInput(e){
    // let value = this.validateNumber(e.detail.value);
    let value=e.detail.value;
    let index = e.currentTarget.dataset.index;
    const oldValue = this.data.code[index];
    if(value!==''){
      let code = this.data.code;
      code[index] = value;
      this.setData({
        code,
        currentIndex: ++index,
        isCan:code.length==6?true:false
      });
      if(!code.includes('')){
        this.triggerEvent('onCompleted',{code: code.join('')},{
          bubbles: true,
          composed: true
        })
      }
    }else{
      const isDeleted = oldValue !== ''; // 但是无法监听当value为''的情况，因为不会触发input事件-->
      let code = this.data.code;
      code.splice(index,1)
      // code[index] = '';
      this.setData({
        code,
        currentIndex: isDeleted?--index:index,
        isCan:code.length==6?true:false
      })
    }
  },
  //是否是数字
  // validateNumber(val) {
  //   return val.replace(/\D/g, '')
  // },


})