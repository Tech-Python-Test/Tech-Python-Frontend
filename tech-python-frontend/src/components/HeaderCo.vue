<template>
  <header class="header">
    <img src="@/assets/logo.png" alt="Logo" class="logo" />
    <input type="text" placeholder="Buscar..." class="search-bar" />
    <nav>
      <router-link to="/about">Conocenos</router-link>
      <router-link to="/features">Funcionalidades</router-link>
      <router-link to="/register">Registrarse</router-link>
      <router-link to="/login">Iniciar Sesión</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderCo",
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background-color: white;
}
.logo {
  width: 200px;
  margin-right: 20px;
}
.search-bar {
  flex-grow: 1;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 20px;
}
nav a {
  margin-left: 50px;
  font-weight: bold;
  font-size: 20px;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
