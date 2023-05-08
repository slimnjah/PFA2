<template>

    <body>
      <nav>
        <ul>
          <li><table>
            <tr>
                New Jobs
            </tr>
            <tr>
                <td>
                    new Job 
                </td>
                <td>
                    Accept
                </td>
                <td>
                    Reject
                </td>
            </tr>
          </table></li>
          
          <li><button type="submit" class="CreatJob" v-on:click="Return">Return</button></li>

        </ul>
      </nav>
      
      <main>
        <div class="AddJob">
          <form>
  <h2>Edit Profile</h2>

  <div class="AddJob">
    <label for="Title">Name:</label>
    <input type="text" v-model="Title" id="Title" name="Title" required>
  </div>

  <div class="AddJob">
    <label for="Mail">Mail:</label>
    <input type="email" v-model="Mail" id="Mail" name="Mail" required>
  </div>

  <div class="AddJob">
    <label for="New Password">New Password:</label>
    <input type="password" v-model="NewPassword" id="New Password" name="New Password" required>
  </div>

  <div class="AddJob">
    <label for="Old Password">Old Password:</label>
    <input type="password" v-model="OldPassword" id="Old Password" name="Old Password" required>
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
      name : 'EditPage',
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
        Edit()
        {
            this.$router.push({name:'Login'})
        },
        CreateJob()
        {
            this.$router.push({name:'CreateJob'})
        },
        Return()
        {
            this.$router.push({name:'Engineer'})
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