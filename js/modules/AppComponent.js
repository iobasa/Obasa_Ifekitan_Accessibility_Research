export default {
    template: `
    <section>
    <h1>This is my app Page!</h1>
    
    <form id="my-form">
        <label for="name">Enter your name:</label>
        <input v-model="user" type="text" name="username" required placeholder="username">

        <label for="password">Enter your password:</label>
        <input v-model="password" type="password" name="password" required placeholder="password">

        <input @click.prevent="submitUserData" type="submit" value="Sign Up / Log In">
    </form>
    </section>
    
    `,

    data: function() {
        return {
            user: "",
            password: ""
        }
   },

   methods: {
       submitUserData() {
           //do a fetch here using the POST method
           // refer to the Node mailer example from last sememster to
           // know how to get datafro a form into a fetch dall using POST
           console.log('hit the API Pan is asking for, which could be in the root Vue instance');

           //reset the form on the page
           document.querySelector('form').reset();

           // reset the username and password data in our app
           this.user = "";
           this.password = "";
       }
   },

    created: function() {
        console.log('our splash component rendered');
    }
        
}