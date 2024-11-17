<template>
  <div class="register-form">
    <h2>Crear una cuenta</h2>
    <form @submit.prevent="registerUser">
      <input v-model="formData.firstName" type="text" placeholder="Nombres" />
      <input v-model="formData.lastName" type="text" placeholder="Apellidos" />
      <input
        v-model="formData.phone"
        type="text"
        placeholder="Número de teléfono"
      />
      <input v-model="formData.location" type="text" placeholder="Ubicación" />
      <input
        v-model="formData.email"
        type="email"
        placeholder="Correo electrónico"
      />
      <textarea v-model="formData.about" placeholder="Acerca de mí"></textarea>

      <div class="terms">
        <input v-model="formData.acceptedTerms" type="checkbox" id="terms" />
        <label for="terms">
          Aceptas las condiciones del servicio, la política de privacidad y la
          política de cookies
        </label>
      </div>

      <button type="submit">Registrarse</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import api from "@/services/api"; // Importa la instancia de Axios

export default {
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        phone: "",
        location: "",
        email: "",
        about: "",
        acceptedTerms: false,
      },
      errorMessage: "",
    };
  },
  methods: {
    async registerUser() {
      if (!this.formData.acceptedTerms) {
        this.errorMessage = "Debes aceptar los términos para registrarte.";
        return;
      }

      try {
        const response = await api.post("/users/register", {
          name: `${this.formData.firstName} ${this.formData.lastName}`,
          email: this.formData.email,
          phone: this.formData.phone,
          location: this.formData.location,
          about: this.formData.about,
          // Asegúrate de usar los nombres de campo que espera tu backend
        });
        console.log("Registro exitoso:", response.data);
        // Redirige al usuario o muestra un mensaje de éxito aquí
      } catch (error) {
        console.error("Error al registrarse:", error.response.data);
        this.errorMessage = "Hubo un error al registrar el usuario.";
      }
    },
  },
};
</script>

<style scoped>
.register-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.register-form h2 {
  text-align: center;
  color: #333;
}

.register-form form {
  display: flex;
  flex-direction: column;
}

.register-form input,
.register-form textarea {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.register-form button {
  padding: 10px;
  color: #fff;
  background-color: #42b983;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.terms {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 14px;
  color: #333;
}

.terms input[type="checkbox"] {
  margin-right: 8px;
  transform: scale(
    1.2
  ); /* Aumenta el tamaño del checkbox para mejor visibilidad */
}

.terms label {
  line-height: 1.2;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
