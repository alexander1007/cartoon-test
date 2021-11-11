<template>
  <div class="home">
    <Book/>
  </div>
</template>

<script>
// @ is an alias to /src
import Book from "@/components/Book.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Book,
  },
  mounted() {
    this.random();
  },
  computed: {
    ...mapState(['max']),
  },
  methods: {
    ...mapActions(['getCartoon']),
    random() {
      const numCartoon = Math.floor(Math.random()*(this.max - 1) +1);
      this.getCartoon(numCartoon);
    },
  },
};
</script>
