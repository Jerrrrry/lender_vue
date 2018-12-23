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
      <button type="button" class="btn btn-default" @click="logout(information)">Logout</button>
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
          token:localStorage.setItem('token')
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
    
      logout: function (information) {
        return new Promise(async (resolve, reject) => {
          let response;
          try {
            response = await this.post(`logout`,information);
          } catch (error) {
            console.log(error)
            return;
          }
          localStorage.removeItem('user')
          localStorage.removeItem('token')
          localStorage.setItem('authorized',false)

          console.log('logout success')
         
          this.$router.push({name: 'login'});
          resolve(response.data);
        });
        
      },

      username(){
          return utl.getUser()
      },

      token(){
          return utl.getToken()
      }
      
  }

}

</script>