<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense color="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pd-2">
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
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn
            color="cyan"
            @click="register">
            Register
        </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  watch: {
    email (value) {
      console.log('emai has changed', value)
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.email ='hello world'
    }, 2000)
  }
}
</script>

<style scoped>
.error {
    color: red;
}
</style>