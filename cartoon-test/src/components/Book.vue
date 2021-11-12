<template>
<div class="options">
   <div v-for="(item, index) in cartoons" :key="index" class="option" 
   :class="{'active': item.active}" @click="setActiveAll(index)"
   :style="{backgroundImage: `url(${item.img})`}">
      <div class="shadow"></div>
      <div class="label"> 
         <div class="info">
            <div class="main">{{ item.safe_title }}</div>
            <div class="sub">{{ item.year }}</div>
         </div>
      </div>
   </div> 
</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Book",
  computed: {
    ...mapState(["cartoons"]),
  },
  methods: {
    ...mapActions(["setActiveAll"])
  }
};
</script>
<style scoped>

</style>