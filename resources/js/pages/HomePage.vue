<template>
  <div class="home-page">
    <header class="header">
      <nav>
        <div class="logo">MyLaravelApp</div>
        <ul class="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
          <li v-if="!isAuthenticated"><router-link to="/login">Login</router-link></li>
          <li v-if="!isAuthenticated"><router-link to="/register">Register</router-link></li>
          <li v-else>
            <button @click="logout" class="logout-button">Logout</button>
          </li>
        </ul>
      </nav>
    </header>

    <section class="hero">
      <div class="content">
        <h1 v-if="isAuthenticated">Welcome, {{ userName }} to My Laravel Application</h1>
        <h1 v-else>Welcome to My Laravel Application</h1>
        <p>Building modern web apps with Laravel and Vue.js.</p>
        <button class="cta-button" @click="redirectToLogin">Get Started</button>
      </div>
    </section>

    <section class="features" id="features">
      <h2>Features</h2>
      <div class="features-grid">
        <div class="feature-card">
          <h3>Fast & Secure</h3>
          <p>Experience blazing-fast performance and top-level security.</p>
        </div>
        <div class="feature-card">
          <h3>Modern Design</h3>
          <p>Clean, professional design that adapts to any device.</p>
        </div>
        <div class="feature-card">
          <h3>Easy to Customize</h3>
          <p>Flexible code that makes customization a breeze.</p>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>&copy; 2024 MyLaravelApp. All rights reserved.</p>
    </footer>

    <v-snackbar v-model="snackbarVisible" :timeout="3000" color="success">
      {{ snackbarMessage }}
    </v-snackbar>
  </div>
</template>

<script>
import { getToken, removeToken } from '@/auth';
export default {
  data() {
    return {
      isAuthenticated: !!getToken(), // Initialize with the current token state
      userName: '',
      snackbarVisible: false,
      snackbarMessage: '',
    };
  },
  mounted() {
    this.setUserName();
    this.checkLoginMessage();
  },
  methods: {
    setUserName() {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        this.userName = user.name; // Assuming user object has a 'name' property
      }
    },
    redirectToLogin() {
      window.location.href = '/login';
    },
    logout() {
      removeToken(); // Clear the token
      localStorage.removeItem('user');
      this.isAuthenticated = false;
      this.userName = '';
      this.$router.push('/'); // Redirect to homepage after logout

      // Set and display the logout snackbar message
      this.snackbarMessage = 'Logged out successfully!';
      this.snackbarVisible = true;
    },
    checkLoginMessage() {
      if (this.$route.query.login === 'success') {
        this.snackbarMessage = 'You have successfully logged in as ' + this.userName;
        this.snackbarVisible = true;
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', sans-serif;
  color: #333;
}

.home-page {
  text-align: center;
}

.header {
  background-color: #34495e;
  padding: 20px;
}

.logo {
  font-size: 1.5em;
  color: #ecf0f1;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-links li a {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1.1em;
}

.hero {
  background: linear-gradient(to bottom right, #2980b9, #2ecc71);
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.content h1 {
  font-size: 3em;
  margin-bottom: 20px;
}

.content p {
  font-size: 1.5em;
  margin-bottom: 40px;
}

.cta-button {
  padding: 15px 30px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #c0392b;
}

.features {
  padding: 50px 0;
}

.features h2 {
  font-size: 2.5em;
  margin-bottom: 40px;
}

.features-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.feature-card {
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: left;
}

.feature-card h3 {
  font-size: 1.4em;
  margin-bottom: 10px;
}

.footer {
  background-color: #34495e;
  color: white;
  padding: 20px;
  margin-top: 40px;
}

.logout-button {
  background: none;
  border: none;
  color: #ecf0f1;
  font-size: 1.1em;
  cursor: pointer;
}

.logout-button:hover {
  text-decoration: underline;
}
</style>
