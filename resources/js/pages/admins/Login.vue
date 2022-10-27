<template>
<div id="right" style="height:100vh;background-color:#45aaf2"></div>
    <Card class="card-login">
        <template #content>
            <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6 oks" style="width: 50%">
                <div class="text-center mb-5 " style="width: 100%">
                    <img src="../../../images/logo/admin-svgrepo-com.svg" alt="Image" height="10" class="mb-3" >
                    <div class="text-900 text-3xl font-medium mb-3" style="padding-top:10px">Admin</div>
                </div>

                <div>
                    <label for="email1" class="block text-900 font-medium mb-2">Email</label>
                    <InputText id="email1" type="text" class="w-full mb-3" />

                    <label for="password1" class="block text-900 font-medium mb-2">Password</label>
                    <InputText id="password1" type="password" class="w-full mb-3" />

                    <div class="flex align-items-center justify-content-between mb-6">
                    </div>
                    <Button label="Login" class="w-full btn-login"></Button>
                </div>
            </div>
        </template>

    </Card>







</template>

<script>
export default {
    name: "LoginAdmin"
}
</script>

<style scoped>
    .card-login{
        width:50%;
        height:600px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 8%;
    }
    .oks{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    img {
        display: flex;
        max-width:230px;
        max-height:95px;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin: 0 auto;
    }
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #1a202c;
    }
    .btn-login{
        display: flex;
        height: 50px;
        margin:0 auto;
        border-radius: 40px;
        width: 40%;
    }
</style>
