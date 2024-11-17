<template>
  <section class="categories">
    <h2>EXPLORAR CATEGORÍAS PRINCIPALES</h2>
    <div class="category-grid">
      <div class="category" v-for="category in categories" :key="category.name">
        <img :src="getImage(category.image)" :alt="category.name" />
        <p>{{ category.name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { name: "New Technology", image: "new-tech.png" },
        { name: "Software Development", image: "software-dev.png" },
        { name: "Business Strategy", image: "business-strategy.png" },
        { name: "Computer Programming", image: "computer-programming.png" },
        { name: "Big Data", image: "big-data.png" },
        { name: "Web Technology", image: "web-technology.png" },
      ],
    };
  },
  methods: {
    getImage(image) {
      return require(`@/assets/${image}`);
    },
  },
};
</script>

<style scoped>
.categories {
  padding: 50px;
  text-align: center;
}
h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}
.category-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
}
.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
}
.category img {
  width: 70%;
  border-radius: 5px;
  margin-bottom: 10px;
}
.category p {
  font-weight: bold;
  color: #333;
}
</style>
