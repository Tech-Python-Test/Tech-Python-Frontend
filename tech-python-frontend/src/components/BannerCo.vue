<template>
  <section class="banner">
    <img
      src="@/assets/presenter.png"
      alt="Presenter Image"
      class="side-image"
    />
    <div class="image-container">
      <img
        src="@/assets/banner-image.png"
        alt="Banner Image"
        class="banner-image"
      />
      <div class="text-overlay">
        <h2>Eventos tecnológicos y networking</h2>
        <p>Encuentra tu próximo evento</p>
        <button>Explorar Eventos</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner {
  display: flex;
  align-items: center;
  padding: 40px;
  background-color: #e0f2f1;
  position: relative;
}

.side-image {
  width: 35%; /* Imagen secundaria ocupa el 35% del ancho */
  border-radius: 10px;
  margin-right: 60px; /* Separación entre la imagen secundaria y la de fondo */
  margin-left: 60px;
}

.image-container {
  position: relative;
  width: 60%; /* Imagen de fondo ocupa el 60% del ancho */
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-overlay {
  position: absolute;
  top: 40%; /* Ajusta para posicionar el texto en la imagen */
  left: 16%;
  color: #000000;
  max-width: 100%;
  z-index: 2;
}

.text-overlay h2 {
  font-size: 42px;
  color: #000000;
  margin-bottom: 20px;
}

.text-overlay p {
  font-size: 30px;
}

.text-overlay button {
  padding: 12px 24px;
  font-size: 26px;
  color: #000000;
  background-color: #42b983;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.text-overlay button:hover {
  background-color: #369f73;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
</style>
