<template>
    <div>
        <neptuneLayout>
            <neptuneCard class="card">
                <div>
                    <h2>
                        <b>Importar Colaboradores</b>
                    </h2>
                    <b-form>
                        <b-form-file
                            v-model="file"
                            :state="Boolean(file)"
                            placeholder="Escolhe um arquivou ou solte aqui..."
                            drop-placeholder="Solte o arquivo aqui"
                        ></b-form-file>
                        <div class="mt-3">Arquivo selecionado: {{ file ? file.name : '' }}</div>

                        <div>
                            <button class="nept-login-button" @click="importFile">Importar</button>
                        </div>
                    </b-form>
                </div>
            </neptuneCard>
        </neptuneLayout>
    </div>
</template>

<script>
export default {
    name: 'importColab',
    data() {
        return {
            file: null,
        }
    },
    methods: {
        importFile() {
            
        }
    }
}
</script>

<style scoped>
.nept-login-button {
    padding: 10px;
    margin-top: 15px;
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