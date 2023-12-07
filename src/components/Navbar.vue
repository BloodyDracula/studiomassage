<template>
  <div class="greetings">
    <contacts />
    <form @submit.prevent="submitForm">
      <button @click="openModal">Записаться на сеанс</button>

      <modal :is-open="isModalOpen" @close="closeModal">
        <div>
          <label for="name">Имя:</label>
          <input type="text" id="name" v-model="name">

          <label for="email">Emailа:</label>
          <input type="text" id="phone" v-model="phone">

          <button @click="submitForm">Записаться</button>
          <input v-model="name" type="text" placeholder="Имя">
          <input v-model="email" type="email" placeholder="Email">
          <button type="submit">Записаться</button>
        </div>
      </modal>
    </form>
  </div>
</template>

<script setup>
import Contacts from '@/components/Contacts.vue';
import Modal from './Modal.vue';
import {ref} from "vue";
import { db } from '@/firebase';

export default {
  setup() {
    const name = ref(”);
    const email = ref(”);

    const submitForm = () => {
      // Сохранение информации о записи на сеанс массажа в базе данных
      db.ref('appointments').push(
          name: name.value,
          email: email.value,
          timestamp: Date.now(),
    );

      // Очистка полей формы
      name.value = ”;
      email.value = ”;

      return {
        name,
        email,
        submitForm,};

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

</script>


<style scoped lang="less">
.greetings {
  display: flex;
  align-items: center;

  h3 {
    font-size: 1.2rem;
    display: flex;
    align-items: center;

    @media (max-width: @break_xl) {
      text-align: center;
      margin-left: 16px;
      font-size: 1rem;
      justify-content: center;
    }
    @media (max-width: @break_md) {
      margin-left: 0;
    }
  }
}
</style>
