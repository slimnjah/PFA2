<template>

    <body>
      <nav>
        <ul>
          <li><button type="submit" class="CreatJob" v-on:click="CreateJob" >Create Job</button></li>
          
          <li><button type="submit" class="CreatJob" v-on:click="logout">Logout</button></li>
        </ul>
      </nav>
      
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
            <td>Id</td>
            <td>Title</td>
            <td>Deadline</td>
            <td>Engineer</td>
            
          </tr>
          <tr v-for="item in Jobs" :key="item.id">
            <td><Router-link :to="{name: 'JobDetails', 
                                   params: { id: item.id }}" activeClass="active-link" 
            class="band-link">{{item.id}}</Router-link></td>
            <td>{{ item.Title }}</td>
            <td>{{ item.Deadline }}</td>
            <td>{{ item.Engineer }}</td>
            
            

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
      name : 'HomePage',
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
        CreateJob()
        {
            this.$router.push({name:'CreateJob'})
        }
    }
  }
  </script>
  
  
  
  
  <style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search {
    width: 30%;
  display: flex;
  align-items: center;
}
  /* Global styles */
  body {
    
    margin-top: 0px;
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
    margin-top: 0;
    font-size: 36px;
    margin-bottom: 0px;
  }
  
  p {
    font-size: 18px;
    line-height: 1.5;
  }
  td{
    width: 160px;
    height: 40px;
  }
  table {
  border-collapse: collapse;
  width: 100%;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.table-container {
  overflow: auto;
}
  </style>