<template>
  <div class="Register">
  <h1>Register</h1>

  <input 
    type="email"
    name="email"
    v-model="email"
    placeholder="email" />
  <br>
    <input 
    type="password"
    name="password"
    v-model="password"
    placeholder="password" />
  </div>
  <br>
  <button
    @click="register">
    Register</button>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    email (value) {
      console.log('emai has changed', value)
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email ='hello world'
    }, 2000)
  }
}
</script>
