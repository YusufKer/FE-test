<template>
  <div class="container m-auto grid tablet:grid-cols-2 gap-4 bg-theme-primary p-4">
    <div class="flex flex-col gap-4">
      <h1 class="text-h2 text-white font-bold">Here are some things you should probably know about us</h1>
      <p class="text-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit impedit temporibus praesentium natus animi tempore magni, veniam vitae mollitia libero saepe ad a excepturi, nesciunt voluptatem hic. Fugiat, accusamus id!</p>
      <p class="text-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit impedit temporibus praesentium natus animi tempore magni, veniam vitae mollitia libero saepe ad a excepturi, nesciunt voluptatem hic. Fugiat, accusamus id! Fugit impedit temporibus praesentium natus animi tempore magni, veniam vitae mollitia libero saepe ad a excepturi, nesciunt voluptatem hic. Fugiat, accusamus id!</p>
      <Button link="/contact-us" copy="Contact Us" ui-type="secondary"/>
    </div>
    <div>
      <img src="../assets/verdian-chua-CAVKZ_MOfDQ-unsplash.b238d72b.jpg" alt="">
    </div>
  </div>
</template>

<script>
  import Button from '@/components/Button.vue';

  export default {
    name: "AboutUsView",
    components:{
      Button
    }
  }
</script>
