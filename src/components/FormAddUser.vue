<template>
  <div class="grid">
    <div class="cell-12">
      <p class="text-center size-big">Let's create a new profil !</p>
      <form class="form template required width-50 margin-auto">
        <div class="layout-group">
          <label for="name">Name</label>
          <input id="name" v-model="userName" type="text" name="name" required="required">
          <label for="lastName">Last name</label>
          <input id="lastName" v-model="userLastName" type="text" name="lastName" required="required">
        </div>
        <div class="layout-actions">
          <input type="submit" @click.prevent="addUser()"/>
          <input type="reset"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'FormAddUser',
    data () {
      return {
        userName: '',
        userLastName: ''
      }
    },
    methods: {
      addUser () {
        /* if(){

         }*/
      }
    }
  }
</script>
