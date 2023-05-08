<template>

    <body>
      <nav>
        <ul>
          <li><button type="submit" class="CreatJob">Create Job</button></li>
          
          <li><button type="submit" class="CreatJob" v-on:click="Return">Return</button></li>
        </ul>
      </nav>
      
      <main>
        <section>
          <div class="AddJob">
          <form>
  <h2>Add Job </h2>

  <div class="AddJob">
    <label for="Title">Title:</label>
    <input type="text" v-model="Title" id="Title" name="Title" required>
  </div>

  <div class="AddJob">
    <label for="Deadline">Deadline:</label>
    <input type="date" v-model="Deadline" id="Deadline" name="Deadline" required>
  </div>

  <div class="AddJob">
    <label for="Documents">Documents:</label>
    <input type="text" v-model="Documents" id="Documents" name="Documents" required>
  </div>

  <div class="AddJob">
    <label for="Description">Description:</label>
    <input type="text" v-model="Description" id="Description" name="Description" required>
  </div>

  <div class="AddJob">
    <label for="Engineer">Engineer:</label>
    <input type="text" v-model="Engineer" id="Engineer" name="Engineer" >
  </div>

  <button v-on:click="AddJob" type="submit">Create Job</button>
</form>
</div>
        </section>
      </main>
    </body>
  </template>
  
  
  
  
  <script>
  import axios from 'axios';
  //import HeaderPage from './header.vue'
  export default{
      name : 'HomePage',
      data()
      {
        return{
          name:'',
          Client:[]
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
        let result = await axios.get("http://localhost:3000/Client");
        this.Client=result.data;
      },
      methods:{
        Return()
        {
            this.$router.push({name:'Client'})
        }
    }
  }
  </script>
  
  
  
  
  <style>
  .AddJob form {
  max-width: 700px;
  margin: 0 auto;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}
.AddJob label{
  text-align: left;
}



  /* Global styles */
  body {
    
    margin-top: Opx;
    margin-left: 0px;
    padding: 0;
    font-family: Arial, sans-serif;
  
  }
  
  
  /* Navigation styles */
  nav {
    background-color: #333;
    color: #fff;
    height: 100vh;
    width: 200px;
    position: fixed;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  nav ul li {
    padding-bottom: 5cm;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
  }
  
  /* Header styles */
  header {
    background-color: #eee;
    padding: 20px;
    text-align: center;
  }
  
  /* Main content styles */
  main {
    margin-left: 220px;
    padding: -20px;
  }
  
  section {
    margin-bottom: 30px;
  }
  
  h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 18px;
    line-height: 1.5;
  }
  td{
    width: 160px;
    height: 40px;
  }
  </style>