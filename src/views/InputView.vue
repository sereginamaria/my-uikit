<script setup>
import {computed, ref} from "vue";
import Input from "@/components/Input.vue";
import useVuelidate from "@vuelidate/core";
import {email, helpers, maxLength, minLength, numeric, sameAs} from "@vuelidate/validators";
import Button from "@/components/Button.vue";

const nameField = ref('')
const emailField = ref('')
const luckyField = ref('')
const passwordField = ref('')
const confirmPasswordField = ref('')
const myField = ref('')

const mustBeWord = (value) => value.includes('hi')

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3)),
  },
  emailField: {
    email: helpers.withMessage(`Вы ввели неверный email`, email)
  },
  luckyField: {
    maxLength: helpers.withMessage(`Максимальная длина: 2 символа`, maxLength(2)),
    numeric: helpers.withMessage(`Можно использовать только цифры`, numeric)
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField.value))
  },
  myField: {
    includesHI: helpers.withMessage(`Строка должна содержать слово 'hi'`, mustBeWord),
  }
}))

const v = useVuelidate(rules, { nameField, emailField, luckyField, confirmPasswordField, myField });

const submitForm = () => {
  v.value.$touch()
  if (v.value.$error) return
  alert('Form submited')
}
</script>

<template>
  <h1 class="heading-1">Inputs</h1>
  <form autocomplete="off" @submit.prevent="submitForm">
    <Input name="Name"
           label="Name"
           placeholder="Ivan"
           v-model:value="v.nameField.$model"
           :error="v.nameField.$errors"
    />
    <p>{{ nameField }}</p>

    <Input name="Email"
           type="email"
           label="Email"
           placeholder="ivan@ivan.ivan"
           v-model:value="v.emailField.$model"
           :error="v.emailField.$errors"
    />
    <p>{{ emailField }}</p>

    <Input name="Lucky Number"
           label="Lucky Number"
           placeholder="42"
           v-model:value="v.luckyField.$model"
           :error="v.luckyField.$errors"
    />
    <p>{{ luckyField }}</p>

    <Input name="Password"
           type="password"
           label="Password"
           placeholder="qwerty"
           v-model:value="passwordField"
    />
    <p>{{ passwordField }}</p>

    <Input name="Confirm Password"
           type="password"
           label="Confirm Password"
           placeholder="qwerty"
           v-model:value="v.confirmPasswordField.$model"
           :error="v.confirmPasswordField.$errors"
    />
    <p>{{ confirmPasswordField }}</p>

    <Input name="My Field"
           label="My Field"
           placeholder="hi"
           v-model:value="v.myField.$model"
           :error="v.myField.$errors"
    />
    <p>{{ myField }}</p>

    <Button label="Submit" color="success"></Button>
  </form>
</template>

<style scoped lang="scss">
form {
  p {
    margin-bottom: 30px;
  }
}
</style>