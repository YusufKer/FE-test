<template>
    <div class="container m-auto p-4">
        <h1 class="text-h1 leading-tight py-4">Contact Us</h1>
        <form class="grid max-w-[500px] gap-4">
            <label for="name">Name:</label>
            <input @input="errorTypes.name = false" ref="nameRef" type="text" id="name" :class="errorTypes.name && 'bg-red-50 border border-red-500'" class="bg-[#C1C4C9] h-10 px-2 rounded-md">
            <label for="email">Email:</label>
            <input @input="errorTypes.email = false" ref="emailRef" type="email" id="email" :class="errorTypes.email && 'bg-red-50 border border-red-500'" class="bg-[#C1C4C9] h-10 px-2 rounded-md">
            <label for="message">Message</label>
            <textarea @input="errorTypes.message = false" ref="messageRef" name="" id="message" cols="30" rows="10" :class="errorTypes.message && 'bg-red-50 border border-red-500'" class="bg-[#C1C4C9] p-2 rounded-md"></textarea>
            <button @click.prevent="handleSubmit" class="bg-theme-primary h-10 hover:shadow-md hover:bg-theme-secondary text-white font-bold rounded-md">Submit</button>
        </form>
        <div class="error py-4">
            <ul v-if="errors.length > 0" class="p-2 bg-red-50 max-w-[500px]">
                <li class="text-red-700" v-for="(error, i) in errors" :key="i"> - {{ error }}</li>
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