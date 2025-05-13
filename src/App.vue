<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const isLoading = ref(true)
const route = useRoute()

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})

// Change for route transitions
const transitionName = ref('fade')

watch(() => route.path, () => {
  transitionName.value = 'page'
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>