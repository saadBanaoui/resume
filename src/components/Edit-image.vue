<template>
  <div class="edit-image" :style="{ width: width + 'px', height: height + 'px'}">
    <img :src="imgSrc" alt="image" :class="{ circle: isCircle }">
    <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage">
  </div>
</template>
<script>
export default {
  name: 'EditImage',
  props: {
    width: {
      type: String,
      default: '36'
    },
    height: {
      type: String,
      default: '36'
    },
    src: {
      type: String,
      default: require('@/assets/logo.png')
    },
    isCircle: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      imgSrc: this.src
    }
  },
  methods: {
    changeImage: function (evt) {
      let _this = this
      let reader = new FileReader()
      let file = evt.target.files[0]
      reader.readAsDataURL(file)
      reader.onload = function (evt) {
        _this.imgSrc = evt.target.result
      }
    }
  }
}
</script>
<style lang="css" scoped>
  .edit-image{
    position: relative;
    display: inline-block;
    z-index: 999;
  }
  .edit-image img{
    width: 100%;
    height: auto;
  }
  input{
    display: inline-block;
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
  }
  .circle{
    border-radius: 106px;
  }

</style>
