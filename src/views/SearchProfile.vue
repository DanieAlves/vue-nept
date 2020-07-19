<template>
    <div>
        <neptuneLayout>
            <neptuneCard class="card">
                <div>
                    <h2>
                        <b>Busca de Candidatos</b>
                    </h2>
                    <div class="container">
                        <div>
                            <b-row>
                                <b-col sm="12" md="4" lg="2">
                                     <b-form-group id="input-group-1" label="Função:" label-for="input-1">
                                    <b-form-input
                                        id="input-1"
                                        v-model="searchFunction"
                                        required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col sm="12" md="4" lg="2">
                                    <b-form-group id="input-group-5" label="Classificação:" label-for="classification">
                                    <b-form-select 
                                        id="classification"
                                        v-model="cand.classification"
                                        :options="choose"
                                        required>
                                        </b-form-select>
                                    </b-form-group>
                                </b-col>
                                <b-col sm="12" md="4" lg="6">
                                    <label>Competências:</label>
                                    <b-form-tags v-model="skills" no-outer-focus class="mb-2 ">
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
                                </b-col>
                                <b-col>
                                    <b-button type="submit" class="nept-login-button" v-on:click="search" sm="12" md="4" lg="2">Buscar</b-button>
                                </b-col>
                            </b-row>
                        </div>
                    </div>
                </div>
                <hr>
                <table class="candidatos">
                    <thead>
                        <tr>
                            <th width="40%">Nomes</th>
                            <th width="20%">Função</th>
                            <th width="20">Competências</th>
                            <th width="20%">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="skill in showSkills" :key="skill.showSkill">
                            <td>
                                {{ skill.name }}
                            </td>
                            <td>  
                                {{ skill.function }}
                            </td>
                            <td class="skills">
                                <span v-b-tooltip.hover.left="parseSkills(skill.skills)" >{{ enumSkills }}/{{ skills.length }} </span>
                            </td>
                            <td>
                                <button @click="favoritar(skill.id)" v-if="!skill.favorited" v:on-click="fav" class="fav-button item-hover">
                                    <b-icon-star class="icon-star"></b-icon-star>
                                </button>
                                <button @click="favoritar(skill.id)" v-if="skill.favorited" v:on-click="fav" class="fav-button item-hover">
                                    <b-icon-star-fill style="color: orange" class="icon-star"></b-icon-star-fill>
                                </button>

                                <button class="fav-button item-hover" title="Ver Perfil" v-on:click="profile(skill)"><b-icon-search></b-icon-search></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </neptuneCard>

            <neptuneCard class="card">
                <div>
                    <h2>
                        <b>Busca de Novos Candidatos</b>
                    </h2>
                    <div class="container">
                        <div>
                            <b-row>
                                <b-col sm="12" md="4" lg="2">
                                     <b-form-group id="input-group-1" label="Função:" label-for="input-1">
                                    <b-form-input
                                        id="input-1"
                                        v-model="searchFunction"
                                        required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col sm="12" md="4" lg="2">
                                    <b-form-group id="input-group-5" label="Classificação:" label-for="classification">
                                    <b-form-select 
                                        id="classification"
                                        v-model="cand.classification"
                                        :options="choose"
                                        required>
                                        </b-form-select>
                                    </b-form-group>
                                </b-col>
                                <b-col sm="12" md="4" lg="6">
                                    <label>Competências:</label>
                                    <b-form-tags v-model="skills" no-outer-focus class="mb-2 ">
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
                                </b-col>
                                <b-col>
                                    <b-button type="submit" class="nept-login-button" sm="12" md="4" lg="2">Buscar</b-button>
                                </b-col>
                            </b-row>
                            <b-form-checkbox
                                id="checkbox"
                                v-model="status"
                                name="checkbox-1"
                                value="accepted"
                                unchecked-value="not_accepted"
                                >
                                Receber alertas quando surgir um indicado segundo filtro de busca?
                            </b-form-checkbox>
                        </div>
                    </div>
                </div>
                <hr>
            </neptuneCard>
            
        </neptuneLayout>
    </div>
</template>

<style scoped>
.card {
    width: 1000px !important;
}

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

.b-form-tags {
    max-height: 200px;
    overflow: auto;
}

.fav-button {
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
}

.icon-star:focus {
    background-color: yellow;
}

.candidatos {
    border-collapse: collapse;
    width: 100%;
}
.candidatos thead {
    border-bottom: 2px solid rgba(0,0,0,0.2)
}
.candidatos thead tr th {
    padding: 5px 5px;
}
.candidatos tbody tr {
    border-bottom: 1px solid rgba(0,0,0,0.1);
}
.candidatos tbody tr td {
    padding: 5px 5px;
}
.candidatos tbody tr:hover {
    background-color: rgba(0,0,0,0.05);
}
.item-hover:hover {
    opacity: .5;
}

.skills{
    text-align: center;
}
</style>

<script>
export default {
    name: 'search-perfil',
    inject: ['firestore'],
    data() {
        return {
            searchFunction : '',
            classification: '',
            skills: [],
            showSkills: [],
            enumSkills: 0,
            choose: [
                { value: null, text: 'Selecione...', disabled: true}, 
                { value: 'Júnior', text: 'Júnior' },
                { value: 'Pleno', text: 'Pleno' },
                { value: 'Sênior', text: 'Sênior' }
            ],
            cand: {
                classification: null
            },
            status: 'not_accept'
        }
    },
    methods: {
        search() {
            let candidatos = this.firestore.collection('candidatos');

            if(this.cand.classification) {
                candidatos = candidatos.where('classification', '==', this.cand.classification);
            }

            async function getAllSkills(skills) {
                var queries;
                if(skills.length) {
                    queries = skills.map(skill => candidatos.where('skills', 'array-contains', skill).get());
                } else {
                    queries = [candidatos.get()];
                }
                return await Promise.all(queries);
            }

            getAllSkills(this.skills).then(result => {
                const obj= {};
                result.forEach(docSnapshot => {
                    docSnapshot.forEach(doc => { 
                        if(this.searchFunction && !doc.data().function.toLowerCase().includes(this.searchFunction.toLowerCase())) {
                            return;
                        }
                        obj[doc.id] = doc.data() 
                    });
                });


                const favoritados = localStorage.favoritados ? JSON.parse(localStorage.favoritados) : [];

                const l = []
                for (let id in obj) {
                    const data = obj[id];
                    data.id = id;
                    data.favorited = favoritados.includes(data.id);
                    l.push(data);
                }
                this.showSkills = l;
            });
        },
        profile(skill) {
            const id = skill.id;
            const func = skill.function;
            const pesquisados = localStorage.pesquisados ? JSON.parse(localStorage.pesquisados) : [];
            let inserir = true;
            for(let i=0; i< pesquisados.length; i++){
                if(pesquisados[i] == func){
                    inserir = false;
                    break;
                }
            }
            if(inserir) {
                pesquisados.push(func);
            }

            if(pesquisados.length > 5){
                pesquisados.splice(0, 1);
            }

            localStorage.pesquisados = JSON.stringify(pesquisados);

            this.$router.push({ name: 'ProfileDetail', params: { id }});
        },
        favoritar(id) {
             const favoritados = localStorage.favoritados ? JSON.parse(localStorage.favoritados) : [];

            for(let i=0; i < favoritados.length; i++) {
                if(favoritados[i] == id) {
                    
                    favoritados.splice(i, 1);
                    localStorage.favoritados = JSON.stringify(favoritados);
                    for(let k = 0; k < this.showSkills.length; k++) {
                        if(this.showSkills[k].id == id) {
                            this.showSkills[k].favorited = false;
                        }
                    }
                    return;
                }
            }
            for(let k = 0; k < this.showSkills.length; k++) {
                if(this.showSkills[k].id == id) {
                    this.showSkills[k].favorited = true;
                }
            }
            favoritados.push(id);
            localStorage.favoritados = JSON.stringify(favoritados);
        },
        parseSkills(skills) {
            if(this.skills.length) {
                this.enumSkills = this.skills.length
                for(let i = 0; i<skills.length; i++) {

                    console.log('aaaa');
                    if (!this.skills.includes(skills[i])) {
                        skills.splice(i, 1);
                        this.enumSkills - 1;
                    }
                }
            }
            return this.listSkills(skills);
        },
        listSkills(skills) {
            let skillStr = '', comma = '';
            for(let i = 0; i < skills.length; i++){
                skillStr += comma + skills[i]
                comma = ', ';
            }
            return skillStr;
        }
    },
}

</script>