import TouchEvent from "./utils/touchEvent";

Component({
  properties: {
    data: Array,
    back: {
      type: String,
      value: '#fff'
    }
  },

  options: {
    multipleSlots: true
  },

  data: {
    isLoading: false,
    swiperData: [],
    swiperCurIndex: 0,
    slideClass: "",
    lockSwipe: false
  },

  lifetimes: {
    created() {
      this.data.swiperData = this.data.swiperData.concat(this.data.data);
      new TouchEvent(this, "touchCard", {
        swipe: evt => {
          //在touch结束触发，evt.direction代表滑动的方向 ['Up','Right','Down','Left']
          if (evt.direction === "Up") this.next(evt);
          if (evt.direction === "Down") this.prev(evt);
        }
      });
    },
    attached() {
      this.setData({
        swiperData: this.data.data
      })
    }
  },

  methods: {
    next(e) {
      if (this.data.lockSwipe) return;
      this.data.lockSwipe = true;
      if (-this.data.swiperCurIndex >= this.data.swiperData.length - 1)
        return (this.data.lockSwipe = false);

      if (-this.data.swiperCurIndex >= this.data.swiperData.length - 3) {
        this.loadMore();
      }

      const index = e.currentTarget.dataset["index"];
      this.setData({ ["swiperData[" + index + "].slideClass"]: " ani-slide-up" }, () => {
        this.setData({
          swiperCurIndex: --this.data.swiperCurIndex
        });
      })

      setTimeout(() => {
        this.data.lockSwipe = false;
        this.setData({
          ["swiperData[" + index + "].slideClass"]: ""
        });
      }, 590);
    },

    prev(e) {
      const index = e.currentTarget.dataset["index"] - 1;
      if (this.data.lockSwipe || index < 0) return;
      this.data.lockSwipe = true;
      this.setData({
        ["swiperData[" + index + "].slideClass"]: " ani-slide-down",
        swiperCurIndex: ++this.data.swiperCurIndex
      });

      setTimeout(() => {
        this.data.lockSwipe = false;
        this.setData({
          ["swiperData[" + index + "].slideClass"]: ""
        });
      }, 590);
    },

    loadMore() {
      this.isLoading = true;
      this.triggerEvent("loadmore", { addToList: this.addToList.bind(this) });
    },

    addToList(list) {
      this.isLoading = false;
      this.setData({
        swiperData: this.data.swiperData.concat(list)
      });
    }
  }
});
