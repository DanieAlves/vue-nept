<template>
    <div>
        <neptuneLayout>
            <neptuneCard class="card">
                <h2>
                    <b>Detalhes do Perfil</b>
                </h2>
                <b-form>
                    <div class="container">
                        <b-row>
                            <b-col sm="12" md="6" lg="5">
                                <b>Nome:</b><br>
                                {{ form.name }} <br><br>
                                
                                <b>E-mail: </b><br>
                                {{ form.email }} <br><br>

                                <b>Função: </b><br>
                                {{ form.function }}<br><br>                   
                            </b-col>
                            <b-col sm="12" md="6" lg="5">
                                <b>Competencias: </b><br>
                                {{ form.skills }} <br><br>

                                <b>Classificação: </b><br>
                                {{ form.classification }} <br><br>
                                
                                <b>Telefone: </b><br>
                                {{ form.phone }} <br><br>
                            </b-col>
                            <b-col sm="12" md="6" lg="2">
                                <b>CEP: </b><br>
                                {{ form.cep }} <br><br>

                                <b>Entrada: </b><br>
                                {{ form.begin }} <br><br>
                                
                                <b>Saída: </b><br>
                                {{ form.exit }} <br><br>
                            </b-col>   
                        </b-row>
                    </div>
                </b-form>
            </neptuneCard>
            <button @click="back" class="nept-login-button">Voltar</button>
        </neptuneLayout>
    </div>
</template>

<script>
export default {
    name: 'ProfileDetail',
    inject: ['firestore'],
    data() {
        return {
            form: {
                cep: '',
                name: '',
                email: '',
                phone: '',
                function: '',
                begin: '',
                exit: '',
                skills: [],
                classification: null
            },  
        }
    },
    methods: {
        back() {
            window.history.back();
        }
    },
    created() {
        this.id = this.$route.params.id;
        const cand = this.firestore.collection('candidatos')
        
        cand.doc(this.id).get().then(snapshot => {
            const document = snapshot.data();
            const form = this.form;

            let skillStr = '';
            let comma = '';

            for(let i=0; i< document.skills.length; i++) {
                skillStr += comma + document.skills[i];
                comma = ', ';
            }

            form.name = document.name;
            form.email = document.email;
            form.phone = document.phone;
            form.cep = document.cep;
            form.function = document.function;
            form.skills = skillStr;
            form.begin = document.begin;
            form.exit = document.exit;
            form.classification = document.classification
        })
    }
}
</script>

<style scoped>
.card {
    width: 100% !important;
}

.nept-login-button {
    margin-top: 10px;
    padding: 10px;
    width: 100px;
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
</style>