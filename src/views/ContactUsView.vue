<template>
    <div class="p-4">
        <h1 class="text-2xl leading-tight py-4">Contact Us</h1>
        <form class="grid max-w-[500px] gap-4">
            <label for="name">Name:</label>
            <input @input="errorTypes.name = false" ref="nameRef" type="text" id="name" :class="errorTypes.name && 'bg-red-50 border border-red-500'" class="bg-gray-50 h-10 px-2">
            <label for="email">Email:</label>
            <input @input="errorTypes.email = false" ref="emailRef" type="email" id="email" :class="errorTypes.email && 'bg-red-50 border border-red-500'" class="bg-gray-50 h-10 px-2">
            <label for="message">Message</label>
            <textarea @input="errorTypes.message = false" ref="messageRef" name="" id="message" cols="30" rows="10" :class="errorTypes.message && 'bg-red-50 border border-red-500'" class="bg-gray-50 p-2"></textarea>
            <button @click.prevent="handleSubmit" class="bg-yellow-100 h-10">Submit</button>
        </form>
        <div class="error py-4">
            <ul v-if="errors.length > 0" class="p-2 bg-red-50 max-w-[500px]">
                <li class="text-red-700" v-for="(error, i) in errors" :key="i">{{ error }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactUsView",
        data(){
            return {
                errors: [],
                errorTypes:{name:false,email:false,message:false}
            }
        },
        methods:{
            validate(){
                this.errors = [];
                if(this.$refs.nameRef.value === ""){
                    this.errors.push("Name cannot be empty");
                    this.errorTypes.name = true;
                }
                if(this.$refs.emailRef.value === ""){
                    this.errors.push("Email cannot be empty");
                    this.errorTypes.email = true;
                }else if(!this.validateEmail(this.$refs.emailRef.value)){
                    this.errors.push("Email address not valid");
                    this.errorTypes.email = true;
                }
                if(this.$refs.messageRef.value === ""){
                    this.errors.push("Message cannot be empty");
                    this.errorTypes.message = true;
                }
                if (this.errors.length > 0) return false;
                return true;
            },
            handleSubmit(){
                if(this.validate()){
                    alert("validation passed...")
                };
            },
            validateEmail(email){
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true;
                return false;
            }
        }
    }
</script>