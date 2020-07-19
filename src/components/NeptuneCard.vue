<template>
    <div class="nept-card">
        <b-card>
            <slot></slot>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'neptuneCard'
}
</script>

<style scoped>
.nept-card {
    width: 500px;
    margin-top: 100px;
    margin-left: 50%;
    transform: translateX(-50%);
}
</style>