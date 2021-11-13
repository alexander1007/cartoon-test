<template>
  <div class="options">
    <div
      v-for="(item, index) in cartoons"
      :key="index"
      class="option"
      :class="{ active: item.active }"
      @click="setActive(index, item)"
      :style="{ backgroundImage: `url(${item.img})` }"
    >
      <div class="box__hover">
        <div class="shadow"></div>
        <div class="label book__rating box__hover">
          <div v-if="item.active" class="stars">
            <star-rating
              v-model="rate"
              :increment="1"
              :max-rating="5"
              inactive-color="#ffffff"
              active-color="#ffd700"
              :star-size="35"
              :rounded-corners="true"
              :show-rating="false"
              @rating-selected="setRating(index)"            
            >
            </star-rating>
            <div class="info">
              <div class="main">{{ item.safe_title }}</div>
              <div class="sub">{{ item.year }}</div>
            </div>
          </div>
          <div v-else class="icon rate">
            <i class="fas fa-star">{{ item.rate }}</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import StarRating from "vue-star-rating";

export default {
  name: "Book",
  components: {
    StarRating,
  },
  mounted() {
    this.rating = 0;
  },
  data() {
    return {
    
    };
  },
  computed: {
    ...mapState(["cartoons", "rating"]),
    rate: {
      get() {
        return this.rating;
      },
      set(val) {
        this.setRate(val);
      }
    }
  },
  methods: {
    ...mapActions(["setActiveAll", "setRatingCartoon","setRate"]),
    setRating(index) {
      this.setRatingCartoon({ index, chooseRate: this.rating });
    },
    setActive(index, item) {
      this.rate = item.rate;
      this.setActiveAll(index);
    },
  },
};
</script>
<style scoped>
</style>