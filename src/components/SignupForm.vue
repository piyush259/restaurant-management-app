<template>
<h1>Sign Up</h1>
<img class="logo" alt="Vue logo" src="../assets/blogo.png" />
<div class="register-container">
    <div class="register">
        <input type="text" v-model="name" placeholder="Name" /><br /><br />
        <input type="email" v-model="email" placeholder="Email" /><br /><br />
        <input type="password" v-model="password" placeholder="Password" /><br /><br />
        <button v-on:click="signUp">Sign Up</button>
        <router-link to="/login">Already have an account?</router-link>
    </div>
</div>
</template>

  
<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
        };
    },
};
</script>

  
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    height: 100%;
    margin: 0;
}

.register-container {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Arial", sans-serif;
}

.register {
    background: #fff;
    padding: 30px;
    width: 30%;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-size: 2rem;
    color: #063822;
    margin-bottom: 20px;
    text-align: center;
}

.logo {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
}

input {
    width: 60%;
    padding: 12px 15px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 8px;
}

button {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 8px;
    background-color: #ff506d;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    margin: 10px 0;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #e44c61;
}

router-link {
    display: block;
    text-align: center;
    margin-top: 10px;
    color: #ff506d;
    text-decoration: none;
    font-size: 0.9rem;
}

router-link:hover {
    text-decoration: underline !important
}
</style>
