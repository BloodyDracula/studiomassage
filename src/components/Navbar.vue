<template>
  <div class="greetings">
    <contacts />
    <button @click="openModal">Записаться на сеанс</button>

    <modal :is-open="isModalOpen" @close="closeModal">
      <!-- Ваша форма записи на сеанс -->
    </modal>
  </div>
</template>

<script setup>
import Contacts from '@/components/Contacts.vue';
import Modal from './Modal.vue';

const isModalOpen = ref(false);

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
