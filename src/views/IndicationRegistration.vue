<template>
    <div>
        <neptuneLayout>
            <neptuneCard class="card">
                <div>
                    <h2>
                        <b>Cadastro de Indicações</b>
                    </h2>
                    <b-form @submit.prevent="setData()" v-if="show" >
                        <div class="container">
                            <div class="bloco-1">
                                <b-form-group id="input-group-1" label="Nome:" label-for="input-1">
                                <b-form-input
                                    id="input-1"
                                    v-model="form.name"
                                    required></b-form-input>
                                </b-form-group>

                                <div class="email"> 
                                    <b-form-group id="input-group-1" label="E-mail:" label-for="email">
                                    <b-form-input
                                        id="email"
                                        type="email"
                                        v-model="form.email"
                                        required></b-form-input>
                                    </b-form-group>
                                </div>

                                <div class="phone">
                                    <b-form-group id="input-group-1" label="Telefone:" label-for="phone">
                                    <b-form-input   
                                        id="phone"
                                        v-model="form.phone"
                                        required></b-form-input>
                                    </b-form-group>
                                </div>

                                <div class="cep">
                                    <b-form-group id="input-group-1" label="CEP:" label-for="cep">
                                    <b-form-input
                                        id="cep"
                                        v-model="form.cep"
                                        value="" size="" maxlenght="9" v-on:blur="pesquisaCep"
                                        required></b-form-input>
                                    </b-form-group>
                                </div>

                                <div class="address">
                                    <b-form-group id="input-group-1" label="Rua:" label-for="rua">
                                    <b-form-input
                                        id="rua"
                                        v-model="form.address"
                                        required></b-form-input>
                                    </b-form-group>
                                </div>


                                <b-form-group id="input-group-1" label="Bairro:" label-for="bairro">
                                    <b-form-input
                                        id="bairro"
                                        v-model="form.bairro"
                                        required></b-form-input>
                                </b-form-group>

                                <div class="city">
                                    <b-form-group id="input-group-1" label="Cidade:" label-for="cidade">
                                    <b-form-input
                                        id="cidade"
                                        v-model="form.city"
                                        required></b-form-input>
                                    </b-form-group>
                                </div>

                                <div class="state">
                                    <b-form-group id="input-group-1" label="Estado:" label-for="estado">
                                    <b-form-input
                                        id="estado"
                                        v-model="form.state"
                                        required></b-form-input>
                                    </b-form-group>
                                </div>

                                <b-form-group id="input-group-1" label="Links Importantes:" label-for="links"></b-form-group>
                                <b-form inline>
                                    <div>
                                        <b-form-input
                                            class="links-input"
                                            id="function"
                                            v-model="form.links"
                                            placeholder="LinkedIn/GitHub"></b-form-input>
                                            <b-button @click="addLink" variant="primary">+</b-button>
                                    </div>
                                </b-form>
                                <div>Links Adicionados: <br></div>
                                    <ul class="links-list">
                                        <li v-for="link in form.link" :key="link.links">
                                            <b-button variant="danger" size="sm" class="material-icons" @click="removeLink(link)">delete_forever</b-button> {{ link }}
                                        </li>
                                    </ul>
                            </div>

                            <div class="function-display">
                                <div class="function">
                                <b-form-group id="input-group-1" label="Função:" label-for="function">
                                <b-form-input
                                    id="function"
                                    v-model="form.function"
                                    required></b-form-input>
                                </b-form-group>
                                </div>

                                <div class="classification">
                                    <b-form-group id="input-group-5" label="Classificação:" label-for="classification">
                                    <b-form-select 
                                        id="classification"
                                        v-model="form.classification"
                                        :options="choose"
                                        required>
                                        </b-form-select>
                                    </b-form-group>
                                </div>

                                <div class="begin">
                                    <b-form-group id="input-group-1" label="Na empresa desde:" label-for="date">
                                    <b-form-input
                                        id="type-date"
                                        type="date"
                                        v-model="form.begin"
                                        required></b-form-input>
                                    </b-form-group>
                                </div>

                                <div class="exit"> 
                                    <b-form-group id="input-group-1" label="Saída em:" label-for="date">
                                    <b-form-input
                                        id="type-date"
                                        type="date"
                                        v-model="form.exit"
                                        required></b-form-input>
                                    </b-form-group>
                                </div>

                                <label>Competências:</label>

                                <b-form-tags v-model="form.skills" no-outer-focus class="mb-2 ">
                                    <template v-slot="{ tags, inputAttrs, inputHandlers, tagVariant, addTag, removeTag }">
                                        <b-input-group class="mb-2">
                                            <b-form-input
                                                v-bind="inputAttrs"
                                                v-on="inputHandlers"
                                                placeholder="Nova tag - Aperte enter para adicionar"
                                                class="form-control "
                                            ></b-form-input>
                                            <b-input-group-append>
                                                <b-button @click="addTag()" variant="primary">Add</b-button>
                                            </b-input-group-append>
                                        </b-input-group>
                                        <div class="d-inline-block tag-container" style="font-size: 1.5rem;">
                                            <b-form-tag
                                                v-for="tag in tags"
                                                @remove="removeTag(tag)"
                                                :key="tag"
                                                :title="tag"
                                                :variant="tagVariant"
                                                class="mr-1"
                                            >{{ tag }}</b-form-tag>
                                        </div>
                                    </template>
                                </b-form-tags>

                                <label>Anexar Curriculo:</label>
                                <b-form-file
                                    v-model="file"
                                    :state="Boolean(file)"
                                    placeholder="Escolhe um arquivo ou solte aqui..."
                                    drop-placeholder="Solte o arquivo aqui"
                                ></b-form-file>
                                <div class="mt-3">Arquivo selecionado: {{ file ? file.name : '' }}</div><br>

                                <label>Anexar Carta de Recomendação:</label>
                                <b-form-file
                                    v-model="recommendation"
                                    :state="Boolean(file)"
                                    placeholder="Escolhe um arquivo ou solte aqui..."
                                    drop-placeholder="Solte o arquivo aqui"
                                ></b-form-file>
                            </div>
                            <b-form-select v-model="selected" :options="options"></b-form-select>
                        </div>
                    </b-form>

                    <br>
                    <b-button type="submit" class="nept-login-button">Cadastrar</b-button>
                </div>
            </neptuneCard>
        </neptuneLayout>
    </div>
</template>

<script>
import AddressService from '../service/AddressService'

export default {
    name: 'indication-registration',
    inject: ['firestore'],
    data() {
        return {
            form: {
                cep: '',
                name: '',
                address: '',
                bairro: '',
                city: '',
                state: '',
                email: '',
                phone: '',
                function: '',
                begin: '',
                exit: '',
                skills: [],
                classification: null,
                links: '',
                link: [],
            },
            choose: [
                { value: null, text: 'Selecione...', disabled: true}, 
                { value: 'Júnior', text: 'Júnior' },
                { value: 'Pleno', text: 'Pleno' },
                { value: 'Sênior', text: 'Sênior' }
            ],
            value: [],
            show: true,
            file: null,
            recommendation: null,
        }
    },
    methods: {
        pesquisaCep() {
            var cep = this.form.cep;
            AddressService.getCepData(cep).then((response) => {
                this.form.address = response.data.logradouro
                this.form.bairro = response.data.bairro
                this.form.city = response.data.localidade
                this.form.state = response.data.uf
            });
        },
        setData() {
            this.firestore.collection('candidatos').add(this.form).then(() => {
                this.$bvToast.toast('Cadastrado com sucesso', {
                    title: 'Sucesso',
                    variant: 'success',
                    solid: true
                });
                this.$router.push('/home');
            });
        },
        addLink() {
            if (!this.form.link.includes(this.form.links)) {
                this.form.link.push(this.form.links);
            }
            this.form.links = '';
        },
        removeLink(link){
            var i = this.form.link.indexOf(link);
            this.form.link.splice(i, 1);
        }
    }
}

</script>

<style scoped>
.nept-login-button {
    padding: 10px;
    width: 100%;
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

.card {
    width: 1200px !important;
}

.container {
    display: flex;
    flex-direction: row;
}

.function-display {
    padding-left: 5%;
}

.line {
    background-color:#008B8B;
    width: 2px;
    height: 80%;
}


.cep {
    width: 18%;
    float: left;
}

.address {
    width: 82%;
    float: left;
    padding-left: 3%;
}

.city {
    width: 80%;
    float: left;
}

.state {
    width: 20%;
    float: left;
    padding-left: 3%;
}

.email, .begin, .function {
    width: 50%;
    float: left;
}

.phone, .exit, .classification {
    width: 50%;
    float: left;
    padding-left: 3%;
}

.tag-container {
    max-width: 400px;
}

.bloco-1 {
    border-right: 2px solid #008080;
    padding-right: 50px;
}

.b-form-tags {
    max-height: 200px;
    overflow: auto;
}

.links-list {
    list-style-type: none;
}

.links-input {
    width: 80%;
}

.material-icons{
    font-size: 15px;
}

</style>