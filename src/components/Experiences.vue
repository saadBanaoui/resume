<template>
  <ListItem class="experiences">
    <div>
      <div class="company" contenteditable="true">{{ company }}</div>
      <div class="date" contenteditable="true">{{ date }}</div>
      <div class="job" contenteditable="true">{{ job }}</div>
    </div>
    <p contenteditable="true">lorem</p>
  </ListItem>
</template>
<script>
import ListItem from '@/components/List-item'
export default {
  name: 'Experiences',
  components: {
    ListItem
  },
  props: {
    company: {
      type: String,
      default: 'Kapt'
    },
    date: {
      type: String,
      default: '2014.10 - 2018'
    },
    job: {
      type: String,
      default: 'UI / UX Designer'
    }
  }
}
</script>

<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
.experiences{
  padding: 10px;
  background: darken(white, 7);
  text-align: left;
  .company{
    font-weight: bold;
    font-size: 20px;
  }
}
</style>
