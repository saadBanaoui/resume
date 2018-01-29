<template>
  <div class="edit-image" :style="{ width: width + 'px', height: height + 'px'}">
    <img :src="imgSrc" alt="image" :class="{ circle: isCircle }">
    <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage">
  </div>
</template>
<script>
  export default {
    name : 'EditImage',
  }
</script>
