<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const scrollPos = ref(0)
const isHeaderSolid = computed(() => scrollPos.value > 50)
const isMenuOpen = ref(false)

const handleScroll = () => {
  scrollPos.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const goHome = () => {
  router.push('/')
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header 
    class="fixed w-full top-0 z-50 transition-all duration-300"
    :class="[isHeaderSolid ? 'bg-white dark:bg-gray-800 shadow-md py-3' : 'bg-transparent py-5']"
  >
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="flex items-center">
        <h1 
          @click="goHome"
          class="text-2xl font-bold text-primary-600 dark:text-primary-400 cursor-pointer"
        >
          Kuchenny przybornik
        </h1>
      </div>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6">
        <router-link 
          to="/"
          activeClass="text-primary-500"
          class="font-medium hover:text-primary-500 transition-colors"
        >
          Przepisy
        </router-link>
        <router-link
            to="/shapes"
            activeClass="text-primary-500"
            class="font-medium hover:text-primary-500 transition-colors"
        >
          Formy do ciast
        </router-link>
      </nav>
      
      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMenu" 
        class="md:hidden flex items-center text-gray-700 dark:text-gray-300 focus:outline-none"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            v-if="!isMenuOpen" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16" 
          />
          <path 
            v-else 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12" 
          />
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    <div 
      v-if="isMenuOpen" 
      class="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg animate-slide-up"
    >
      <div class="container mx-auto px-4 py-3">
        <div class="flex flex-col space-y-3">
          <router-link 
            @click="isMenuOpen = false"
            activeClass="text-primary-500"
            to="/" 
            class="py-2 font-medium hover:text-primary-500 transition-colors"
          >
            Przepisy
          </router-link>
          <router-link
            @click="isMenuOpen = false"
            activeClass="text-primary-500"
            to="/shapes"
            class="py-2 font-medium hover:text-primary-500 transition-colors"
        >
          Formy do ciast
        </router-link>
        </div>
      </div>
    </div>
  </header>
  
  <!-- Spacer for fixed header -->
  <div :class="[isHeaderSolid ? 'h-16' : 'h-20']"></div>
</template>