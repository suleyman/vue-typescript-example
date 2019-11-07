<template>
  <div class="home">
    <UserList :userList="userList" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import User from "@/types/User"
import UserList from "@/components/UserList.vue";
import userService from "@/services/user.service.ts"

export default Vue.extend( {
  name: 'Home' as string,
  components: {
    UserList
  },
  data () {
    return {
      userList: [] as User[]
    }
  },
  mounted () {
    const vm = this;
    userService.fetchusers().then(response => {
      vm.userList = response
    })
  }
});
</script>
