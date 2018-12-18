<template>
<div class="container">
  <h2>Hover Rows</h2>
  <p>The .table-hover class enables a hover state on table rows:</p>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Team Name</th>
        <th>Created at</th>
        <th>Players</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="team in teams">
        <td>{{team.name}}</td>
        <td>{{team.created_at}}</td>
        <td>{{team.id}}</td>
      </tr>
      
    </tbody>
  </table>
</div>
</template>

<script>
import axios from '../mixins/axios';
export default {
  name: 'Home',

  mixins: [axios],

  data () {
    return {
      teams:[]
    }
  },

  created: async function () {
      this.teams = await this.setTeams();
     
  },

  components:{

  },

  methods:{
    setTeams: function () {
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
  }

}

</script>

<style scoped lang="scss">

</style>
