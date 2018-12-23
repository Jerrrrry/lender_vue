<template>
<div class="container">
<form class="form-horizontal">
  <div class="form-group">
    <h3>Username : {{username()}}</h3>
  </div>
  <div class="form-group">
    <h3>User Token : {{token()}}</h3>
  </div>
  <div class="form-group">
    <div class="col-sm-4">
      <button type="submit" class="btn btn-default" @click="login(information)">Logout</button>
    </div>
  </div>
</form>
</div>
</template>

<script>
import axios from '../mixins/axios';

import utl from '../tools/utl'

export default {
  name: 'profile',

  mixins: [axios],

  data () {
    return {
      information:{
          username:'',
      },
      page:'',
      utl:utl
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
          resolve(response.data.player);
        });
        
      },

      username(){
          return this.utl.getUser()
      },

      token(){
          return this.utl.getToken()
      }
      
  }

}

</script>