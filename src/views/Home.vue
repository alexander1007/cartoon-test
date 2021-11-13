<template>
  <div>
    <div>
      <h1 class="home__title">Masiv´s Newspaper</h1>
      <p class="home__subtitle">{{currentDate()}}</p>
    </div>
    <div class="columns is-desktop">
      <div class="column is-8 home__column-cartoons">
        <p class="title">Masiv Cartoons</p>
        <p class="content">
          Here you can read famous cartoons and rate them. Enjoy!
        </p>
        <Book />
        <div class="home__button-more">
          <button class="button is-outlined" @click="random()">
            Load More
          </button>
        </div>
      </div>
      <div class="column home__column-news">
        <p class="title">Masiv is now part of Route Mobile</p>
        <p>
          As part of our vision of global growth, today we are closing the
          acquisition transaction of Masivian SAS and all its subsidiaries in
          Colombia and Peru by Route Mobile UK Limited, a subsidiary of Route
          Mobile Ltd (NSE: ROUTE). <br /><br />
          Route Mobile is one of the main providers of platform services for
          cloud communications at a global level with a direct presence in
          multiple countries, connected to more than 300 international
          operators, to the main OTT ecosystems and with a portfolio of products
          of great extension.
        </p>
        <div>
          <p class="title">Chatbot for technical support.</p>
          <p>
            This service allows all types of companies to obtain the benefits of
            using artificial intelligence to optimize customer service and
            provide a better experience. In addition, the implementation of a
            Chatbot extends the range of availability to 24 hours a day, 7 days
            a week.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Book from "@/components/Book.vue";
import { mapActions, mapState } from "vuex";
import dayjs from 'dayjs'

export default {
  name: "Home",
  components: {
    Book,    
  },
  mounted() {
    this.random();
  },
  computed: {
    ...mapState(["maxLimitNumberCartoon", "quantityCartoonsLoad"]),
  },
  methods: {
    ...mapActions(["getCartoon", "setActive", "resetAllCartoons"]),
    random() {
      this.resetAllCartoons();
      for (let i = 0; i < this.quantityCartoonsLoad; i++) {
        const numCartoon = Math.floor(
          Math.random() * (this.maxLimitNumberCartoon - 1) + 1
        );
        this.getCartoon(numCartoon).then((result) => {
          if (i === 0) this.setActive(0, result);
        });
      }
    },
    currentDate(){
      const current = new Date();
      const date = dayjs(current).format('dddd, MMM. D, YYYY');      
      return date;
    }
  },
};
</script>
