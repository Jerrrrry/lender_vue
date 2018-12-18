<template>
<div class="container">
  
  <form class="form-horizontal">
    
   
    <div class="form-group">
        <h2>Player Profile</h2>   
    </div>
    <div class="form-group">
        <label for="email">First Name:</label>
        <input type="text" class="form-control" id="firstname" v-model="information.first_name">
    </div>
    <div class="form-group">
        <label for="pwd">Last Name:</label>
        <input type="text" class="form-control" id="lastname" v-model="information.last_name">
    </div>

     <div class="form-group">
      <label for="sel1">Select list:</label>

      <select class="form-control" id="sel1" v-model="information.team_id">
            
            <option v-for="option in options" v-bind:value="option.id">
                {{ option.name }}
            </option>
      </select>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
        
  </form>
</div>
</template>

<script>
import axios from '../mixins/axios';
export default {
  name: 'Player',

  mixins: [axios],

  data () {
    return {
      team:[],
      player:[],
      options:[],
      information:{
          id:'',
          last_name:'',
          first_name:'',
          team_id:'',
      }
    }
  },

  created: async function () {
      this.options = await this.setOptions();
      this.player = await this.setPlayer();
      this.information.last_name=this.player.last_name;
      this.information.first_name=this.player.first_name;
      this.information.team_id=this.player.team.id;
      this.information.id=this.player.id;
  },

  components:{

  },

  methods:{
    setOptions: function () {
        return new Promise(async (resolve, reject) => {
          let response;
          try {
            response = await this.get(`teams`);
          } catch (error) {
            console.log(error)
            this.$router.push({name: 'four-o-four'});
            return;
          }
          resolve(response.data);
        });
      },
    setPlayer: function () {
        return new Promise(async (resolve, reject) => {
          let response;
          try {
            response = await this.get(`player/${this.$route.params.id}`);
          } catch (error) {
            console.log(error)
            this.$router.push({name: 'four-o-four'});
            return;
          }
          resolve(response.data.player);
        });
      },
  }

}

</script>

