<template>
    <div class="form-demo " >
        <div class="flex justify-content-center">
            <div class="card">
                <h5 class="text-center">Đăng ký</h5>
                <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
<!--                    First name-->
                    <div class="field">
                        <div class="p-float-label">
                            <InputText id="firstname" :class="{'p-invalid':v$.name.$invalid && submitted}" />
                            <label for="firstname" :class="{'p-error':v$.name.$invalid && submitted}">Họ</label>
                        </div>
                        <small v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response" class="p-error">{{v$.name.required.$message.replace('Value', 'Name')}}</small>
                    </div>
<!--                    Last name-->
                    <div class="field">
                        <div class="p-float-label">
                            <InputText id="lastname" :class="{'p-invalid':v$.name.$invalid && submitted}" />
                            <label for="lastname" :class="{'p-error':v$.name.$invalid && submitted}">Tên</label>
                        </div>
                        <small v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response" class="p-error">{{v$.name.required.$message.replace('Value', 'Name')}}</small>
                    </div>
<!--                    Birthday-->
                    <div class="field">
                        <div class="p-float-label">
                            <Calendar id="date" v-model="date" :showIcon="true" />
                            <label for="date">Năm sinh</label>
                        </div>
                    </div>
<!--                    Phone-->
                    <div class="field">
                        <div class="p-float-label">
                            <InputText id="phone" :class="{'p-invalid':v$.name.$invalid && submitted}" />
                            <label for="phone" :class="{'p-error':v$.name.$invalid && submitted}">Số điện thoại</label>
                        </div>
                        <small v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response" class="p-error">{{v$.name.required.$message.replace('Value', 'Name')}}</small>
                    </div>

                    <div class="field">
                        <div class="p-float-label">
                            <InputText id="address" :class="{'p-invalid':v$.name.$invalid && submitted}" />
                            <label for="address" :class="{'p-error':v$.name.$invalid && submitted}">Địa chỉ</label>
                        </div>
                        <small v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response" class="p-error">{{v$.name.required.$message.replace('Value', 'Name')}}</small>
                    </div>
<!--                    Email-->
                    <div class="field">
                        <div class="p-float-label p-input-icon-right">
                            <i class="pi pi-envelope" />
                            <InputText id="email" v-model="v$.email.$model" :class="{'p-invalid':v$.email.$invalid && submitted}" aria-describedby="email-error"/>
                            <label for="email" :class="{'p-error':v$.email.$invalid && submitted}">Email*</label>
                        </div>
                        <span v-if="v$.email.$error && submitted">
                            <span id="email-error" v-for="(error, index) of v$.email.$errors" :key="index">
                            <small class="p-error">{{error.$message}}</small>
                            </span>
                        </span>
                    </div>
                    <div class="field">
                        <div class="p-float-label">
                            <Password id="password" v-model="v$.password.$model" :class="{'p-invalid':v$.password.$invalid && submitted}" toggleMask>
                                <template #header>
                                    <h6>Độ mạnh</h6>
                                </template>
                                <template #footer="sp">
                                    {{sp.level}}
                                    <Divider />
                                    <p class="mt-2">Đề nghị</p>
                                    <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                        <li>Ít nhất có 1 kí tự thường</li>
                                        <li>Ít nhất có 1 kí tự hoa</li>
                                        <li>Ít nhất có 1 chữ số</li>
                                        <li>Mật khẩu phải độ dài ít nhất 8</li>
                                    </ul>
                                </template>
                            </Password>
                            <label for="password" :class="{'p-error':v$.password.$invalid && submitted}">Mật khẩu</label>
                        </div>
                        <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response" class="p-error">{{v$.password.required.$message.replace('Value', 'Password')}}</small>
                    </div>
                    <div class="field">
                        <FileUpload mode="basic" name="demo[]" url="./upload" />
                    </div>
                    <div class="field">
                        <router-link to="/user/login" class="font-medium no-underline ml-2 text-right cursor-pointer">Đã có tài khoản ?</router-link>
                        <Button type="submit" label="Tạo tài khoản" class="mt-2" />
                    </div>


                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export default {
    setup: () => ({ v$: useVuelidate() }),
    data() {
        return {
            name: '',
            email: '',
            password: '',
            phone: '',
            date: null,
            country: null,
            accept: null,
            submitted: false,
            countries: null,
            showMessage: false
        }
    },
    countryService: null,
    validations() {
        return {
            name: {
                required
            },
            email: {
                required,
                email
            },
            password: {
                required
            },
            accept: {
                required
            }
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        handleSubmit(isFormValid) {
            this.submitted = true;

            if (!isFormValid) {
                return;
            }

            this.toggleDialog();
        },
        toggleDialog() {
            this.showMessage = !this.showMessage;

            if(!this.showMessage) {
                this.resetForm();
            }
        },
        resetForm() {
            this.name = '';
            this.email = '';
            this.password = '';
            this.date = null;
            this.accept = null;
            this.submitted = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.form-demo {
    .card {
        min-width: 450px;

        form {
            margin-top: 2rem;
        }

        .field {
            margin-bottom: 1.5rem;
        }
    }

    @media screen and (max-width: 960px) {
        .card {
            width: 80%;
        }
    }
}

</style>
