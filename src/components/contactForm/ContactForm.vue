<script setup lang="ts">
import { ref } from "vue";

const formInput = ref({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  console.log(formInput.value);
};
</script>

<template>
  <div class="p-7">
    <div class="pb-8 font-bold text-xl text-center">Contact Form</div>
    <div class="flex justify-content-evenly">
      <div class="p-fluid gap-4 grid w-5">
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-user"></i>
          </InputGroupAddon>
          <InputText placeholder="Username" v-model="formInput.name" variant="filled" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-envelope"></i>
          </InputGroupAddon>
          <InputText placeholder="Email" v-model="formInput.email" variant="filled" />
        </InputGroup>

        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-align-center"></i>
          </InputGroupAddon>
          <Textarea v-model="formInput.message" placeholder="Message" rows="3" />
        </InputGroup>

        <div class="p-field">
          <Button @click="submitForm" class="p-button p-button-primary">
            Submit
          </Button>
        </div>
      </div>
      <Image src="/src/assets/images/contact-us.svg" alt="Contact Image" width="250" />
    </div>
  </div>
</template>
