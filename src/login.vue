<template>

    <div class="form-group">
        <form>
  <h2>Login</h2>

  <div class="form-group">
    <label for="email">Email:</label>
    <input type="text" v-model="email" id="email" name="email" required>
  </div>

  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" v-model="password" id="password" name="password" required>
  </div>

  <button v-on:click="login" type="submit">Login</button>
</form>
    </div>
  <p><router-link to="/SignUp">Sign Up</router-link></p>
</template>


<script>
import axios from 'axios';
export default {
    name:'loginPage',
    data()
    {
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login()
        {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                
            );
            if(result.status==200 && result.data.length>0)
                {

                    localStorage.setItem("user-info",JSON.stringify(result.data[0]));
                    this.$router.push({name:'Home'});
                }
            /*axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
                .then(response => {
                alert(response.status);
                if(response.status==200 )
                {
                    alert(response.data[0]);
                    localStorage.setItem("user-info",JSON.stringify(response.data[0]));
                    this.$router.push({name:'Home'});
                }
                // handle successful response here
                })*/
            
        }
    },
    mounted() 
    {
      const user = localStorage.getItem('user-info');
      if (user) 
      {
        this.$router.push({ name: 'Client' });
      }
    }

}
</script>