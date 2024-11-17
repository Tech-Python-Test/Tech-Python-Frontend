<template>
  <footer class="footer">
    <div class="footer-links">
      <div>
        <h4>Use cases</h4>
        <p>UI design</p>
        <p>UX design</p>
        <p>Wireframing</p>
      </div>
      <div>
        <h4>Explore</h4>
        <p>Design</p>
        <p>Prototyping</p>
        <p>Development features</p>
      </div>
      <div>
        <h4>Resources</h4>
        <p>Blog</p>
        <p>Best practices</p>
        <p>Colors</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-color: #e0f2f1;
}
.social-media img {
  width: 100px;
}
.footer-links div {
  margin-right: 20px;
}
h4 {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}
p {
  color: #555;
  margin: 5px 0;
}
</style>
