<template>
  <div class="home">
    <button @click="login">Login</button>
    <p>
      isLogged: {{$store.getters.isAuthenticated}}
    </p>
    <UserList :userList="userList" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import User from "@/types/User"
import UserList from "@/components/UserList.vue";
import userService from "@/services/user.service.ts"
import Post from "@/types/Post"
import postService from "@/services/post.service"
import { mapActions } from "vuex"

export default Vue.extend( {
  name: 'Home' as string,
  components: {
    UserList
  },
  data () {
    return {
      userList: [] as User[],
      postList: [] as Post[]
    }
  },
  mounted () {
    const vm = this;
    userService.fetchusers().then(response => {
      vm.userList = response
    })
    postService.fetchPosts().then(response => {
      vm.postList = response
    })
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        token: "123456789"
      })
    }
  }
});
</script>
