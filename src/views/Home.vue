<template>
    <div class="home">
        <neptuneLayout>
            <div class="main-panel">
                <div>
                    
                </div>
                <div id="indicados-para-mim" class="neptune-card">
                    <div class="neptune-card-title">
                        Indicados para mim
                    </div>
                    <div class="neptune-card-body">
                        <ul>
                            <li v-for="name in namesipm" :key="name.id">
                                <button class="fav-button item-hover" title="Ver Perfil" v-on:click="profile(name.id)"> <b-icon-search></b-icon-search></button>
                                {{ name.name }} - {{ name.function }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="meus-indicados" class="neptune-card">
                    <div class="neptune-card-title">
                        Meus Indicados
                    </div>
                    <div class="neptune-card-body">
                        <ul>
                            <li v-for="name in namesmi" :key="name.id" >
                                {{ name.name }} - {{ name.function }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="perfil-buscados" class="neptune-card">
                    <div class="neptune-card-title">
                        Perfis Buscados Recentemente
                    </div>
                    <div class="neptune-card-body">
                        <ul>
                            <li v-for="name in namespb" :key="name.id">
                                {{ name }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </neptuneLayout>
    </div>
</template>

<script>
export default {
    name: "home",
    inject: ['firestore'],
    data() {
        return{          
            namesipm: [],
            namesmi: [],
            namespb: []
        }
    },
    methods: {
        profile(id){
            this.$router.push(`/profile/${id}`);
        }
    },
    created() {
        const favoritados = localStorage.favoritados ? JSON.parse(localStorage.favoritados) : [];
        this.namespb = localStorage.pesquisados ? JSON.parse(localStorage.pesquisados) : [];

        this.firestore.collection('candidatos').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                if(favoritados.includes(doc.id)){
                    this.namesipm.push({ id: doc.id, ...doc.data() }); 
                    
                }
                this.namesmi.push({ id: doc.id, ...doc.data() });
            })
        })
    },
    
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.neptune-card {
    border-radius: 5px;
    margin-bottom: 10px;
    border: 1px solid rgba(0,0,0,0.2);;
}

.neptune-card-title {
    border-radius: 5px 5px 0px 0px;
    font-size: 20px;
    color: white;
    background-color: #009688;
    padding: 10px 15px;
}

.neptune-card-body {
    background-color: rgba(0,0,0,0.025);
    padding: 10px 15px;
    border-radius: 0px 0px 5px 5px;
}

.neptune-card-body ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
}

.main-panel {
    margin-top: 20px;
}

.fav-button {
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
}

.item-hover:hover {
    opacity: .5;
}

</style>