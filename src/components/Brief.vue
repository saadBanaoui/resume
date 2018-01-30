<template>
  <div class="brief">
    <div class="avatar">
      <EditImage :src="require('@/assets/logo.png')" width="212" height="212" :isCircle="true" class="img"></EditImage>
      <div class="name">El banaoui Saad</div>
      <div class="job">Webdesigner</div>
    </div>
  </div>
</template>
<script>
import EditImage from '@/components/Edit-image.vue'
export default {
  name: 'Brief',
  components: {
    EditImage
  }
}
</script>
