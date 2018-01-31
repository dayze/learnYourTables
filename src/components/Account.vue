<template>
  <div class="overlay anim-backward very-fast">


    <!-- title -->
    <div class="grid">
      <div class="cell-12">
        <h1 class="margin-0 size-big margin-0-top borders-bottom borders-silver">
          <span>Account management</span>
        </h1>
      </div>
    </div>

    <div v-if="!displayForm" class="grid">

      <!-- current user -->
      <div class="cell-12">
        <div class="grid">
          <div class="cell-12 text-center">
            <div class="font-size-big margin-bottom text-capitalize">
              <span>{{currentUser.name}}</span>
              <span>{{currentUser.lastName}}</span>
            </div>
            <router-link :to="{ name: 'Dashboard'}" title="See statistics"
                         class="bg-emerald hover-bg-nephritis button margin-bottom-m">
              <img class="responsive margin-5-right" src="../../src/assets/img/stats.png" alt=""/>
              <span class="align-middle color-yang">Statistics</span>
            </router-link>
          </div>
        </div>
      </div>

      <!-- change an other one account -->
      <div class="cell-12">
        <h2>Choose an other one user</h2>
        <div class="grid-column-xs margin-50-top">
          <!-- add button -->
          <div @click="displayForm = true"
               class="cell-3 cell-4-m cell-6-s borders-dashed color-silver borders-silver rounded hover-shaded-box cursor-pointer text-center padding size-big align-middle capitalize APP_font_ananda">
            <div>New user</div>
            <div>+</div>
          </div>
          <div @click="changeCurrentUser(user)" v-if="user.date !== currentUser.date"
               class="cell-3 cell-4-m cell-6-s rounded bg-clouds hover-shaded-box cursor-pointer text-center padding size-big capitalize APP_font_ananda"
               v-for="user in UserManager.getAllUsers()">
            <div>{{user.name}}</div>
            <div>{{user.lastName}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid" v-else>
      <div class="cell-12">
        <div @click="displayForm = false"
             class="absolute-top-right font-size-medium cursor-pointer color-alizarin margin-10-right">X
        </div>
        <form-add-user></form-add-user>
      </div>
    </div>

  </div>


</template>

<script>

  import UserManager from '../model/UserManager'
  import FormAddUser from '../components/FormAddUser.vue'

  export default {
    name: 'Account',
    components: {
      FormAddUser
    },
    data () {
      return {
        UserManager: new UserManager(),
        displayForm: false,
        currentUser: new UserManager().getCurrentUser()
      }
    },
    methods: {
      changeCurrentUser (user) {
        this.UserManager.changeCurrentUser(user)
        location.reload()
      }
    }
  }
</script>

