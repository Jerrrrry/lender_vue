<template>
<div class="container">
<form class="form-horizontal">
  <div class="form-group">
    <label class="control-label col-sm-2" for="username">Username</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="text" placeholder="Enter User Name" v-model="information.username">
    </div>
    <div class="col-sm-4">
      <button type="button" class="btn btn-default" @click="login(information)">Login acc</button>
    </div>
  </div>
</form>
</div>
</template>

<script>
import axios from '../mixins/axios';

export default {
  name: 'Login',

  mixins: [axios],

  data () {
    return {
      information:{
          username:'',
      },
      page:'',
    }
  },

  created: function () {
      this.page=this.$route.name;
  },

  components:{

  },

  methods:{
    
      login: function (information) {
        return new Promise(async (resolve, reject) => {
          let response;
          try {
            response = await this.post(`login`,information);
          } catch (error) {
            console.log(error)
            return;
          }
          localStorage.setItem('user',response.data.user)
          localStorage.setItem('token',response.data.token)
          localStorage.setItem('authorized',true)

          console.log('login success')
         
          this.$router.push({name: 'home'});
          resolve(response.data.user);
        });
        
      },
      
  }

}

</script>