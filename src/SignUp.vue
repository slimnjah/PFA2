<template>
    <div class="form-group">
        <form >
  <h2>Sign Up</h2>

  <div class="form-group">
    <label for="name">Username:</label>
    <input type="text" v-model="name" id="name" name="name" required>
  </div>

  <div class="form-group">
    <label for="email">Email:</label>
    <input type="text" v-model="email" id="email" name="email" required>
  </div>

  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" v-model="password" id="password" name="password" required>
  </div>

  <div class="form-group">
    <label for="Role">Role:</label>
    <select id="Role" v-model="Role" name="Role" class="form-group">
    <option value="Client">Client</option>
    <option value="Engineer">Engineer</option>
  </select>
  </div>

  <button v-on:click="signUp" type="submit">Sign Up</button>
</form>
    </div>
  <p><router-link to="/login">Login</router-link></p>
</template>
<script>
import axios from 'axios'
export default{
    name : 'SignUp',
    data()
    {
        return{
            name:'',
            email:'',
            password:'',
            Role:'',
        }
    },
    methods:{
        async signUp()
        {
            
            /*let result= await axios.post("http://localhost:3000/users", 
            { 
                email:this.email,
                name:this.name,
                password:this.password 
            }).then(response => {
                  console.log(result.data);
                  localStorage.setItem("user-info",JSON.stringify(response.data));
                  this.$router.push({name:'Home'});
                  // handle successful response here
            }).catch(error => {
              console.log(error.response.data);
                // handle error response here
            });*/
            let result= await axios.post("http://localhost:3000/users", 
            { 
                email:this.email,
                name:this.name,
                password:this.password ,
                Role:this.Role
            });
            
            if(result.status==201 && result.data.Role=="Client")
                {
                  console.warn(result.data);
                  localStorage.setItem("user-info",JSON.stringify(result.data));
                  this.$router.push({name:'Client'});
                }else{
                  if(result.status==201 && result.data.Role=="Engineer"){
                    console.warn(result.data);
                    localStorage.setItem("user-info",JSON.stringify(result.data));
                    this.$router.push({name:'Engineer'});
                  }
                }

            
        }
    },
    mounted() 
    {
      const user = localStorage.getItem('user-info');
      if (user) 
      {
        this.$router.push({ name: 'Home' });
      }
    }
}
</script>
<style>
.form-group form {
  max-width: 400px;
  margin: 0 auto;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="date"],
select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

button[type="submit"] {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 18px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #3e8e41;
}
</style>