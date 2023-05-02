<template>
  <div class="container">
    <div
      class="row justify-content-center align-items-center"
      style="height: 60vh"
    >
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <input type="text" class="form-control" name="username" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" name="password" />
              </div>
              <div class="form-group">
                <input v-model="saveLocal" 
                  type="checkbox" name="saveLocal" />
                 Lembrar meu login.
              </div>

              <button type="submit" id="sendlogin" class="btn btn-primary">
                login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, useStore } from "vuex";

export default defineComponent({
  name: "LoginView",
  data(){
    return {
      store: useStore(),
      saveLocal: false
    }
  },
  methods: {
    login() {
      this.store.dispatch("login", this.saveLocal);
    }
  }
});
</script>
