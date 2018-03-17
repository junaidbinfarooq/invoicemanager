<template>
    <div id="alert" class="container container-fluid">
        <div id="alertBox" class="alert alert-success alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <strong>{{ message }}</strong>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'alert',
        props: {
            'message': {default: ''}
        }
    }
</script>

<style scoped>
    div#alertBox {
        margin-right: 70px;
    }
</style>
