<template>
    <div class="nept-login-page">
        <div class="nept-login-container">
            <section class="nept-login" id="nept-login">
                <header>
                    <h2>Senior Reconnection</h2>
                </header>
                <form class="nept-login-form" action="#">
                    <label for="uname" class="nept-login-label" >Username ou E-mail:</label>
                    <input type="text" class="nept-login-input" ref="input-value" v-model="input.username" autofocus >
                    <label for="psw" class="nept-login-label">Senha:</label>
                    <input type="password" class="nept-login-input" ref="input-value" v-model="input.password">
                    <div class="nept-submit-container">
                        <button type="submit" class="nept-login-button" @click="login()">SIGN IN</button>
                    </div>
                </form>
            </section>
        </div>
    </div>
</template>

<script>
import authService from '../service/AuthenticationService'

export default {
    name: "login",
    data() {
        return {
            input: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            if(this.input.username != "" && this.input.password != "") {
                if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    authService.setAuthenticated(true);
                    this.$router.replace({name: "home"});
                } else {
                    alert("O usuário e/ou senha estão incorretos")
                }
            }
            else {
                alert("O usuário e senha devem estar preenchidos")
            }
        }
    },
};

</script>

<style scoped>
.nept-login-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 100%;
    background: #F1F1F1;
}

.nept-login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 340px;
    height: auto;
    padding: 5px;
    box-sizing: border-box;
}

.nept-login {
    position: relative;
    width: 100%;
    padding: 10px;
    margin: 0 0 10px 0;
    box-sizing: border-box;
    border-radius: 3px;
    background: #FAFAFA;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                0 1px 5px 0 rgba(0, 0, 0, 0.12),
                0 3px 1px -2px rgba(0, 0, 0, 0.2);
}

.nept-login > header {
    position: relative;
    width: 100%;
    padding: 10px;
    margin: -10px -10px 25px -10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background: #009688;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
    color: #FAFAFA;
    box-sizing: content-box;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                0px 1px 5px 0px rgba(0, 0, 0, 0.12),
                0px 3px 1px -2px rgba(0, 0, 0, 0.2);
}

.nept-login > header:before {
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 5px;
    padding: 10px;
    margin: -10px 0 0 -10px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.156);
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    color: transparent;
    z-index: 5;
}

.nept-login > header h2 {
    margin: 50px 0 10px 0;
}


.nept-login-form {
    padding: 15px;
    box-sizing: border-box;
    line-height: 0px;
}

.nept-login-label {
    position: relative;
    width: 100%;
    padding: 10px 5px;
    margin: 0 0 25px 0;
    border: none;
    background: transparent;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    opacity: 1;
}


.nept-login-input {
    position: relative;
    width: 100%;
    padding: 10px 5px;
    margin: 0 0 25px 0;
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    background: transparent;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    opacity: 1;
}

.nept-login-input:focus {
    border-bottom: 2px solid #65A06B;
}

.nept-submit-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
    padding: 10px;
    margin: 35px -25px -25px -25px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.nept-login-button {
    padding: 10px;
    border: none;
    border-radius: 3px;
    background: transparent;
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    font-weight: bold;
    color: #72625E;
    cursor: pointer;
    opacity: 1;
}   

</style>