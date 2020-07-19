<template>
    <div class="home">
        <neptuneLayout>
            <neptuneCard class="card">
                <h2>
                    <b>Cadastro Empresa</b>
                </h2>
                <b-form @submit="onSubmit()" v-if="show" >
                    <div class="container">
                        <div>
                            <b-form-group id="input-group-1" label="Nome Fantasia:" label-for="input-1">
                            <b-form-input
                                id="input-1"
                                v-model="form.name"
                                required></b-form-input>
                            </b-form-group>
                            <b-form-group id="input-group-2" label="CNPJ:" label-for="input-2">
                                <b-form-input
                                    id="input-2"
                                    v-model="form.cnpj"
                                    required></b-form-input>
                            </b-form-group>
                            <b-form-group id="input-group-3" label="Ramo de Atuação:" label-for="input-3" class="acting">
                                <b-form-input
                                    id="input-3"
                                    v-model="form.line"
                                    required></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="display-company">
                            <b-form-group id="input-group-4" label="Endereço:" label-for="input-4">
                            <b-form-input
                                id="input-4"
                                v-model="form.address"
                                required></b-form-input>
                            </b-form-group>

                            <b-form-group label="Filial ou Matriz" class="radio">
                                <b-form-radio v-model="selected" name="some-radios" value="first">Filial</b-form-radio>
                                <b-form-radio v-model="selected" name="some-radios" value="second">Matriz</b-form-radio>
                            </b-form-group>

                            <b-form-group
                                id="input-group-6"
                                label="E-mail Responsável:"
                                label-for="input-6"
                                description="Nós nunca vamos compartilhar seu e-mail.">
                            <b-form-input
                                id="input-6"
                                v-model="form.email"
                                type="email"
                                required></b-form-input>
                            </b-form-group>     
                        </div>
                    </div>

                    <div class="name-response">
                        <b-form-group id="input-group-4" label="Nome do Responsável:" label-for="input-4" class="response">
                        <b-form-input
                            id="input-4"
                            v-model="form.response"
                            required></b-form-input>
                        </b-form-group>
                    </div>
                    
                    <b-button type="submit" class="nept-login-button">Cadastrar</b-button>
                </b-form>
            </neptuneCard>            
        </neptuneLayout>
    </div>
</template>

<script>

export default {
    name: "company-registration",
    data() {
        return {
            form: {
                name: '',
                cnpj: '',
                line: '',
                address: '',
                choose: null,
                email: '',
                selected: '',
                response: '',
            },
            show: true,
            methods: {
                onSubmit(evt) {
                    evt.preventDefault()
                    console.log(JSON.stringify(this.form))
                },
            }
        };
    }
}

</script>

<style scoped>
.card {
    width: 595px !important;
}

.nept-main ul {
    background: #C0C0C0;
    padding: 20px;
    list-style-type: none;
    border-radius: 0px 0px 10px 10px;
}

.nept-main h4 {
    color: white;
    padding: 4px;
    margin-bottom: 0px;
    background: #009688;
    border-radius: 5px 5px 0px 0px;
    line-height: 50px;
}

.nept-login-button {
    padding: 10px;
    width: 98%;
    border: none;
    border-radius: 3px;
    background-color: #009688;
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    font-weight: bold;
    color: white;
    cursor: pointer;
    opacity: 1;
} 

.container {
    display: flex;
    flex-direction: row;
}

.acting{
    padding-top: 10px;    
}

.display-company {
    padding-left: 5%;
}

.response {
    width: 100%;
}

.name-response {
    padding-left: 15px;
    width: 94%;
}
</style>