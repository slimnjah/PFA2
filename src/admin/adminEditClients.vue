<template>

    <body>
      <div class="admin">
        <nav>
        
        <ul>
            <li><h1>Admin Page</h1></li>
          <li><button type="submit" class="CreatJob" v-on:click="Clients" >Return</button></li>
          
        </ul>
      </nav>
      </div>
      
      <main>
        <div class="AddJob">
          <form>
  <h2>Edit Profile</h2>

  <div class="AddJob">
    <label for="id">Id:</label>
    <input type="text" v-model="id" id="id" name="id" required>
  </div>

  <div class="AddJob">
    <label for="name">Name:</label>
    <input type="text" v-model="OldPassword" id="name" name="name" required>
  </div>

  <div class="AddJob">
    <label for="email">Email:</label>
    <input type="email" v-model="NewPassword" id="email" name="email" required>
  </div>

  <div class="AddJob">
    <label for="password">password:</label>
    <input type="password" v-model="password" id="password" name="password" required>
  </div>

  

  


  <button v-on:click="AddJob" type="submit">Save Edit</button>
</form>
</div>
       </main>
       
    </body>
  </template>
  
  
  
  
  <script>
  import axios from 'axios';
  //import HeaderPage from './header.vue'
  export default{
      name : 'adminEditClient',
      data()
      {
        return{
          name:'',
          Jobs:[]
        }
      },
      /*components:{
        HeaderPage
      },*/
      async mounted() 
      {
        const user = localStorage.getItem('user-info');
        
        if (!user) 
        {
          this.$router.push({ name: 'SignUp' });
        }
        this.name=JSON.parse(user).name;
        let result = await axios.get("http://localhost:3000/Jobs");
        this.Jobs=result.data;
      },
      
      
      methods:{
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
  
  