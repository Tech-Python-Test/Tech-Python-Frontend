<template>
  <div>
    <h2>Prueba de API</h2>
    <button @click="fetchData">Obtener Datos</button>
    <p v-if="data">Respuesta del servidor: {{ data }}</p>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await api.get("/users");
        this.data = response.data;
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    },
  },
};
</script>

<style scoped>
button {
  padding: 8px 12px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #38a169;
}
</style>
