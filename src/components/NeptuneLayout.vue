<template>
    <div>
            <div class="header">
                <div class="nept-navbar">
                    <a href="/home" class="active" title="Home">Senior Reconnection</a>
                    <a href="#" class="material-icons" id="right" title="">person_outline</a>
                    <a href="#" class="material-icons" id="right">settings</a>
                    <a href="#" class="material-icons" id="right">notifications_none</a>
                </div>
            </div>
            <div class="nept-sidenav">
                <a href="/company" class="material-icons" title="Cadastrar Empresa">business</a>
                <a href="/indication" class="material-icons" title="Indicar Funcionário">person_add</a>
                <a href="/import-colab" class="material-icons" title="Importar Colaborados">group_add</a>
                <a href="/search" class="material-icons" title="Procurar Perfil">person_search</a>
            </div>
            <div class="nept-main">
                <b-container>
                    <slot></slot>
                </b-container>
            </div>
    </div>
</template>

<script>
export default {
    name: "neptuneLayout"
}
</script>

<style scoped>
.nept-navbar {
    overflow: hidden;
    background-color: #009688;
    position: fixed;
    z-index: 999;
    top: 0;
    width: 100%;
}

.nept-navbar a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
}

.nept-navbar a#right {
    float: right;
}

.nept-navbar a:hover {
    background-color: #ddd;
    color: black;
}

.nept-sidenav {
    position: fixed;
    top: 52px;
    z-index: 998;
    left: 0;
    height: 100%;
    width: 52px;
    float: left;
    background-color: #009688;
}

.nept-sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    color: white;
    display: block;
    margin-bottom: 5px;
}

.nept-sidenav a:hover {
    background-color: #ddd;
    color: black;
}

.nept-main {  
    position: absolute;
    top: 52px;
    left: 52px;
    width: calc(100% - 52px);
    height: (100% - 52px);
}
</style>