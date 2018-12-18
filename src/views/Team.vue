<template>
<div class="container">
  <h2>Team : {{team.name}}</h2>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Player ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Created at</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="player in players">
        <td>{{player.id}}</td>
        <td>{{player.first_name}}</td>
        <td>{{player.last_name}}</td>
        <td>{{player.created_at}}</td>
        <td>
          <router-link
            :to="{ name: 'player', params: { id: player.id } }">
            Edit
          </router-link>
        </td>
      </tr>
      
    </tbody>
  </table>
</div>
</template>

<script>
import axios from '../mixins/axios';
export default {
  name: 'Team',

  mixins: [axios],

  data () {
    return {
      team:[],
      players:[]
    }
  },

  created: async function () {
      this.players = await this.setPlayers();
      this.team = await this.setTeam();
     
  },

  components:{

  },

  methods:{
    setTeam: function () {
        return new Promise(async (resolve, reject) => {
          let response;
          try {
            response = await this.get(`team/${this.$route.params.id}`);
          } catch (error) {
            console.log(error)
            this.$router.push({name: 'four-o-four'});
            return;
          }
          resolve(response.data);
        });
      },
    setPlayers: function () {
        return new Promise(async (resolve, reject) => {
          let response;
          try {
            response = await this.get(`team/${this.$route.params.id}/players`);
          } catch (error) {
            console.log(error)
            this.$router.push({name: 'four-o-four'});
            return;
          }
          resolve(response.data);
        });
      },
  }

}

</script>

<style scoped lang="scss">

</style>