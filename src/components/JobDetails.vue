<template>

  <body>
    <nav>
      <ul>
        
      </ul>
    </nav>
    
    <main>
      <table class="table">
        <th style="width: 13%;"><RouterLink to="/" activeClass="active-link" class="band-link">Return</RouterLink></th>
        <th>Job Details</th>
        <tr>
          <td>Id:</td>
          <td>{{ Jobs.id }}</td>
        </tr>
        <tr>
          <td>Title:</td>
          <td>{{ Jobs.Title }}</td>
        </tr>
        <tr>
          <td>Deadline:</td>
          <td>{{ Jobs.Deadline }}</td>
        </tr>
        <tr>
          <td>Documents:</td>
          <td>{{ Jobs.Documents }}</td>
        </tr>
        <tr>
          <td>Description:</td>
          <td>{{ Jobs.Description }}</td>
        </tr>
        <tr>
          <td>Engineer:</td>
          <td>{{ Jobs.Engineer }}</td>
        </tr>
        

      </table>
     </main>
     
  </body>
</template>





<script>
import axios from 'axios';
export default {
  name: 'JobDetails',
  data() {
    return {
      Jobs: {},
    };
  },
  async mounted() 
    {
      const JobId = this.$route.params.id;
      console.warn(JobId)
      let result = await axios.get(`http://localhost:3000/Jobs?id=${JobId}`);
      this.Jobs=result.data[0];
      console.warn(result.data)
    },

  
};
</script>


<style src="../styles/styles.css"></style>