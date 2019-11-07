<template>
    <div class="user-list">
        <ul>
            <li v-for="(user, index) in userList" :key="index" class="user">
                <img :src="'https://api.adorable.io/avatars/285/' + index" :alt="user.name" class="user-image">
                <h4>
                    {{ user.name }}
                </h4>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'UserList' as string,
    props: {
        userList: {
            type: Array,
            required: true
        }
    }
})
</script>

<style lang="scss" scoped>

.user-list {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        .user {
            display: flex;
            align-items: center;            
            padding: 5px 15px;
            &:hover {
                color: #333;
                cursor: pointer;
            }
            &:nth-child(even) {
                background: #fafafa;
            }
            .user-image {
                width: 50px;
                border-radius: 50%;
                margin-right: 15px;
            }
        }
    }
}

</style>