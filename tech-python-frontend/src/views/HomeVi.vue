<template>
  <div>
    <Header />
    <Banner />
    <Categories />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/HeaderCo.vue";
import Banner from "@/components/BannerCo.vue";
import Categories from "@/components/CategoriesCo.vue";
import Footer from "@/components/FooterCo.vue";

export default {
  components: {
    Header,
    Banner,
    Categories,
    Footer,
  },
};
</script>
