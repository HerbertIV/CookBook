<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { recipes } from '../data/recipes'

const route = useRoute()
const router = useRouter()

const recipeId = computed(() => Number(route.params.id))
const recipe = computed(() => recipes.find(r => r.id === recipeId.value))
const activeTab = ref('ingredients')
const servingsCount = ref(1)

onMounted(() => {
  if (recipe.value) {
    servingsCount.value = recipe.value.servings
    document.title = recipe.value.title
  } else {
    router.push('/')
  }
})


const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div v-if="recipe" class="container mx-auto px-4 py-8 animate-fade-in">
    <!-- Back Button -->
    <button 
      @click="goBack" 
      class="flex items-center mb-6 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-5 w-5 mr-2" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path 
          fill-rule="evenodd" 
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
          clip-rule="evenodd" 
        />
      </svg>
      Wróć do listy
    </button>
    
    <!-- Recipe Header -->
    <div class="flex flex-col lg:flex-row gap-8 mb-8">
      <div class="lg:w-1/2">
        <div class="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
          <img 
            :src="recipe.image" 
            :alt="recipe.title"
            class="w-full h-full object-cover"
          >
          <div class="absolute top-4 right-4">
          </div>
        </div>
      </div>
      
      <div class="lg:w-1/2">
        <div class="flex items-center space-x-2 mb-3">
          <span 
            class="inline-block px-3 py-1 text-sm font-medium text-white bg-secondary-500 rounded-full"
          >
            {{ recipe.category }}
          </span>
          <span 
            class="inline-block px-3 py-1 text-sm font-medium text-white"
            :class="{
              'bg-primary-500': recipe.difficulty === 'Łatwe',
              'bg-secondary-500': recipe.difficulty === 'Średnie',
              'bg-accent-500': recipe.difficulty === 'Trudne'
            }"
          >
            {{ recipe.difficulty }}
          </span>
        </div>
        
        <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ recipe.title }}</h1>
        
        <p class="text-gray-600 dark:text-gray-300 mb-6">{{ recipe.description }}</p>
        
        <div class="flex items-center mb-6">
          <div class="flex items-center text-yellow-500 mr-3">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
              />
            </svg>
            <span class="ml-1 font-semibold">{{ recipe.rating.toFixed(1) }}</span>
          </div>
          
          <div class="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-3"></div>
          
          <div class="flex items-center text-gray-600 dark:text-gray-300">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5 mr-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fill-rule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" 
                clip-rule="evenodd" 
              />
            </svg>
            <span>{{ recipe.prepTime + recipe.cookTime }} min</span>
          </div>
        </div>
        
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 class="text-sm text-gray-500 dark:text-gray-400 mb-1">Czas przyg.</h3>
            <p class="font-semibold">{{ recipe.prepTime }} min</p>
          </div>
          
          <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 class="text-sm text-gray-500 dark:text-gray-400 mb-1">Czas zrobienia</h3>
            <p class="font-semibold">{{ recipe.cookTime }} min</p>
          </div>
          
          <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 class="text-sm text-gray-500 dark:text-gray-400 mb-1">Ilość porcji</h3>
            <div class="flex items-center justify-center">
              <span class="mx-2 font-semibold">{{ servingsCount }}</span>            
            </div>
          </div>
        </div>
      
      </div>
    </div>
    

    
    <!-- Tabs -->
    <div class="mb-8">
      <div class="flex border-b border-gray-200 dark:border-gray-700">
        <button 
          @click="activeTab = 'ingredients'"
          :class="[
            'flex-1 py-3 text-center font-medium transition-colors',
            activeTab === 'ingredients' 
              ? 'text-primary-500 border-b-2 border-primary-500' 
              : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
          ]"
        >
          Składniki
        </button>
        <button 
          @click="activeTab = 'instructions'"
          :class="[
            'flex-1 py-3 text-center font-medium transition-colors',
            activeTab === 'instructions' 
              ? 'text-primary-500 border-b-2 border-primary-500' 
              : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
          ]"
        >
          Instrukcja
        </button>
      </div>
      
      <!-- Ingredients Tab -->
      <div v-if="activeTab === 'ingredients'" class="py-6 animate-fade-in">
        <ul class="space-y-3">
          <li 
            v-for="(ingredient, index) in recipe.ingredients" 
            :key="index"
            class="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
          >
            <div class="flex-shrink-0 w-5 h-5 rounded-full border-2 border-primary-500 flex items-center justify-center mt-0.5">
              <span class="w-2 h-2 rounded-full bg-primary-500"></span>
            </div>
            <span>{{ ingredient }}</span>
          </li>
        </ul>
      </div>
      
      <!-- Instructions Tab -->
      <div v-if="activeTab === 'instructions'" class="py-6 animate-fade-in">
        <ol class="space-y-6">
          <li 
            v-for="(instruction, index) in recipe.instructions" 
            :key="index"
            class="flex space-x-4"
          >
            <div class="flex-shrink-0">
              <div class="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 flex items-center justify-center font-bold">
                {{ index + 1 }}
              </div>
            </div>
            <div class="flex-1 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              {{ instruction }}
            </div>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>