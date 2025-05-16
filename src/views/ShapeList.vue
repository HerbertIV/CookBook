<script setup lang="ts">
import { ref, computed } from 'vue'
import ShapeCard from '../components/ShapeCard.vue'
import { shapes } from '../data/shapes'

const searchQuery = ref('')

const filteredShapes = computed(() => {
  let filtered = [...shapes]

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(shape =>
      shape.title.toLowerCase().includes(query) ||
      shape.description.toLowerCase().includes(query)
    )
  }

  return filtered
})
</script>

<template>
  <div class="container mx-auto px-4 py-8 animate-fade-in">
    
    <div class="relative max-w-md mx-auto mb-8">
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Wyszukaj formę"
          class="w-full px-5 py-3 rounded-full bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 backdrop-blur-sm"
        >
        <div class="absolute right-3 top-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
    </div>
    <!-- Shape Grid -->
    <section 
      v-if="filteredShapes.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
    >
      <ShapeCard
        v-for="shape in filteredShapes"
        :key="shape.id"
        :shape="shape"
        class="animate-scale-in"
      />
    </section>
    
    <!-- Empty State -->
    <section 
      v-else
      class="py-12 text-center"
    >
      <div class="max-w-md mx-auto">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-16 w-16 mx-auto text-gray-400 mb-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        <h3 class="text-xl font-bold mb-2">No shapes found</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          We couldn't find any shapes matching your criteria. Try adjusting your search or filters.
        </p>
        <button 
          @click="searchQuery = '';"
          class="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
        >
          Clear Filters
        </button>
      </div>
    </section>
  </div>
</template>