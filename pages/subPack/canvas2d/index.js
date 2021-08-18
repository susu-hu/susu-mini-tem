// pages/canvas/index.js
Page({

  data: {
    canvasW:220,
    canvasH:220,
    data_list:[
      {
        value:0
      },
      {
        value:10
      },
      {
        value:20
      },
      {
        value:30
      },
      {
        value:40
      },
      {
        value:50
      },
      {
        value:60
      },
      {
        value:70
      },
      {
        value:80
      },
      {
        value:90
      },
      {
        value:100
      },
      {
        value:101
      },
    ],//数据列表
  },
  getRings(){
    this.data.data_list.forEach((item,index)=>{
      this.canvasRing = this.selectComponent("#can"+index);
      this.canvasRing.showCanvasRing()
    })

  },

 
  onShow: function () {
    this.drawNew();
    this.getRings()
   
  },
  drawNew(step){
    const query = wx.createSelectorQuery().in(this);
    query.select('#myCanvas')
      .fields({ node: true , size: true})
      .exec(this.init.bind(this))
  },
  init(res){
    const canvas = res[0].node
    const ctx = canvas.getContext('2d');
    const dpr = wx.getSystemInfoSync().pixelRatio
    canvas.width = res[0].width * dpr
    canvas.height = res[0].height * dpr
    ctx.scale(dpr, dpr)
    var gradient = ctx.createLinearGradient(200, 100, 100, 200);
    gradient.addColorStop("0", "#a57b5f");
    gradient.addColorStop("0.5", "#cc9ad1");
    gradient.addColorStop("1.0", "#b84e88");
    ctx.strokeStyle=gradient;
    ctx.lineWidth=10;
    ctx.lineCap='round';
    ctx.beginPath(); 
    ctx.arc(110, 110, 100, 0, 2 * Math.PI, false);
    ctx.stroke(); 
  }
  
})