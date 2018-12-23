<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">Lender UI</a>
    </div>
    <ul class="nav navbar-nav">
      <li>
        <router-link
            :to="{ name: 'addteam' }">
            Add Team
        </router-link>
      </li>
      <li>
        <router-link
            :to="{ name: 'addplayer' }">
            Add Player
        </router-link>
      </li>
      <li>
        <router-link
            :to="{ name: 'profile' }">
            Account Manage
        </router-link>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li v-show="utl.checkLogin==false">
        <router-link
            :to="{ name: 'login' }">
            <span class="glyphicon glyphicon-log-in"></span> Login
        </router-link>
      </li>
    </ul>
  </div>
</nav>

</template>


<script>
import utl from '../tools/utl';

export default {
  name: 'Nav',


  data () {
    return {
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
    username(){
      return this.utl.getUser()
    }
      
  }

}

</script>