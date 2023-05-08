<template>

  <body>
    <div class="admin">
      <nav>
      
      <ul>
          <li><h1>Admin Page</h1></li>
        <li><button type="submit" class="CreatJob" v-on:click="Clients" >Clients</button></li>
        
        <li><button type="submit" class="CreatJob" v-on:click="Engineers">Engineers</button></li>

        <li><button type="submit" class="CreatJob" v-on:click="Jobs">Jobs</button></li>

        <li><button type="submit" class="CreatJob" v-on:click="logout">Logout</button></li>
      </ul>
    </nav>
    </div>
    
    <main>
      <header>
          <div class="container">
              
                  <input type="text" placeholder="Search...">
                  <button type="submit" class="search">Search</button>
                  
              
          </div>
      </header>
      <div class="table-container">
      <table border="0">
        <tr>
          <td>Action</td>
          <td>Name</td>
          <td>Password</td>
          <td>Email</td>
          <td>Action</td>
          
        </tr>
        <tr v-for="item in users" :key="item.id">
          <td><Router-link :to="{name: 'adminEditClients', 
                                 params: { id: item.id }}" activeClass="active-link" 
          class="band-link">Edit</Router-link></td>
          <td>{{ item.name }}</td>
          <td>{{ item.password }}</td>
          <td>{{ item.email }}</td>
          <td ><a href="#" @click="Delete">Delete</a></td>
          
          

        </tr>
      </table>
    </div>
     </main>
     
  </body>
</template>




<script>
import axios from 'axios';
//import HeaderPage from './header.vue'
export default{
    name : 'adminPage',
    data()
    {
      return{
        id:'',
        name:'',
        users:[]
      }
    },
    /*components:{
      HeaderPage
    },*/
    async mounted() 
    {
      let result = await axios.get("http://localhost:3000/users");
      this.users=result.data;
    },
    methods:{
      Delete()
      {
        axios.delete(`http://localhost:3000/Jobs/${this.id}`/*, { headers: { Authorization: 'Bearer ' + token }}*/)
          .then(response => {
              console.log(response.data);
          })
          .catch(error => {
              console.error(error);
          });
      },
      logout()
      {
          localStorage.clear();
          this.$router.push({name:'Login'})
      },
      Clients()
      {
          this.$router.push({name:'adminClients'})
      },
      Engineers()
      {
          this.$router.push({name:'adminEngineers'})
      },
      Jobs()
      {
          this.$router.push({name:'adminJobs'})
      },
      
  }
}
</script>


<style>
.admin h1{
  color: #FFF;
}
.admin nav li{
  padding-bottom: 30px;
}

</style>

