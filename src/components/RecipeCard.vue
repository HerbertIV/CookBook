<script setup lang="ts">
import { Recipe } from '../types'
import { useRouter } from 'vue-router'

const props = defineProps<{
  recipe: Recipe
}>()

const router = useRouter()

const viewRecipe = () => {
  router.push(`/recipe/${props.recipe.id}`)
}
</script>

<template>
  <div 
    @click="viewRecipe"
    class="card group cursor-pointer hover:scale-[1.02] transition-all duration-300"
  >
    <div class="relative overflow-hidden h-48 md:h-56">
      <img 
        :src="recipe.image" 
        :alt="recipe.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      >
      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
        <span 
          class="inline-block px-2 py-1 text-xs font-medium text-white bg-secondary-500 rounded-md"
        >
          {{ recipe.category }}
        </span>
      </div>
    </div>
    
    <div class="p-4">
      <h3 class="text-lg font-bold mb-1 group-hover:text-primary-500 transition-colors">
        {{ recipe.title }}
      </h3>
      <div class="flex items-center text-gray-500 text-sm mb-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-4 w-4 mr-1" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fill-rule="evenodd" 
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" 
            clip-rule="evenodd" 
          />
        </svg>
        {{ recipe.prepTime }} min
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
        {{ recipe.description }}
      </p>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div class="flex -space-x-1">
            <div v-for="n in Math.min(3, recipe.ingredients.length)" :key="n" class="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs border border-white">
              {{ recipe.ingredients[n-1].charAt(0) }}
            </div>
          </div>
          <span class="ml-2 text-xs text-gray-500">
            {{ recipe.ingredients.length }} składniki
          </span>
        </div>
        <div class="flex items-center text-yellow-500">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-4 w-4" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
            />
          </svg>
          <span class="ml-1 text-sm">{{ recipe.rating.toFixed(1) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>