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
      <li><a href="#">Something Else</a></li>
    </ul>
  </div>
</nav>

</template>
