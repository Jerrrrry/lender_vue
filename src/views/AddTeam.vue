<template>
<div class="container">
  
  <form class="form-horizontal">
    
   
    <div class="form-group">
        <h2>Add Team</h2> 
    </div>
    <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" id="name" v-model="information.name">
    </div>
    
    <button v-show="information.name!==''" 
            type="button" class="btn btn-default" 
            @click="addTeam(information)">
            Add
    </button>    
        
  </form>
</div>
</template>

<script>
import axios from '../mixins/axios';

export default {
  name: 'AddTeam',

  mixins: [axios],

  data () {
    return {
      information:{
          name:'',
          token:localStorage.getItem('token')
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
    
      addTeam: function (information) {
        return new Promise(async (resolve, reject) => {
          let response;
          try {
            response = await this.post(`team`,information);
          } catch (error) {
            console.log(error)
            return;
          }
          this.player=response.data.player;
          this.$router.push({name: 'team',params:{id:response.data.team.id}});
          resolve(response.data.player);
        });
        
      },
      
  }

}

</script>