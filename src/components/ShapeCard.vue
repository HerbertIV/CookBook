<script setup lang="ts">
import {Shape} from "../types.ts";

defineProps<{
  shape: Shape
}>()

</script>

<template>
  <div
    class="card group hover:scale-[1.02] transition-all duration-300"
  >
    <div class="relative overflow-hidden h-48 md:h-56">
      <img 
        :src="shape.image"
        :alt="shape.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      >
    </div>
    <div class="p-4">
      <h3 class="text-lg font-bold mb-1 group-hover:text-primary-500 transition-colors">
        {{ shape.title }}
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
        {{ shape.description }}
      </p>
      <div class="flex justify-between items-center">
        <div class="flex items-center flex-wrap">
          <div class="ml-2 text-xs text-gray-500 w-full">
            <div v-for="size in shape.sizes">
              <span v-if="typeof size.diameter !== 'undefined'">
                Średnica: {{ size.diameter }} cm
              </span>
              <span v-else>
                Dłuższy bok: {{ size.long }} cm <br />
                Krótszy bok: {{ size.short }} cm
              </span>
            </div>
          </div>
          <span class="ml-2 text-xs text-gray-500">
            Pojemność: {{ shape.capacity }} cm<sup>2</sup>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>