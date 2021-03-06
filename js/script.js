let app = new Vue({
  el: '#container',
  data: {
    /* contatore della posizione delle img */
    imgIndex: 0,
    /* / */
    imgSrc: [
      'https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/02/25/17/38/george-washington-bridge-2098351_1280.jpg',
      'https://cdn.pixabay.com/photo/2020/05/24/06/54/dumbo-5212670_1280.jpg',
      'https://cdn.pixabay.com/photo/2014/05/03/01/05/manhattan-336712_1280.jpg',
    ],
    imgAlt: [
      'manhattan',
      'george-washington-bridge',
      'george-washington-bridge',
      'manhattan-skyline'
    ],
    imgInterval: '',
  },
  methods: {
    nextImg: function(){
      (this.imgIndex >= this.imgSrc.length - 1) ? this.imgIndex = 0 : this.imgIndex++;
      console.log(this.imgIndex);
    },
    prevImg: function(){
      (this.imgIndex <= 0) ? this.imgIndex = this.imgSrc.length - 1 : this.imgIndex--;
      console.log(this.imgIndex);
    },
    selectImg: function(index){
      clearInterval(this.imgInterval);
      return this.imgIndex = index;
    },
    /* rotazione immagini con right/left */
    changeImg: function(e){
      if (e.keyCode == 39) {
        this.nextImg();
      } else if (e.keyCode == 37) {
        this.prevImg();
      }
    },
    /* / */
  },
  created: function(){
    this.imgInterval = setInterval(this.nextImg, 2000);
  },
  mounted: function(){
    document.addEventListener('keyup', this.changeImg);
  }
});