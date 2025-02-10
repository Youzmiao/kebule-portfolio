<template>
  <div class="h-screen flex flex-col overflow-hidden bg-[#1c1b22]">
    <nav class="bg-transparent">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-2xl font-bold text-white">
              Luke<span class="text-[#00ff9d]">.</span>
            </router-link>
          </div>

          <div class="flex items-center space-x-8">
            <router-link to="/" class="inline-flex items-center px-1 pt-1 transition-colors duration-200"
              :class="{ 'text-white font-medium': $route.path === '/', 'text-gray-400 hover:text-white': $route.path !== '/' }">
              Home
            </router-link>
            <router-link to="/services" class="inline-flex items-center px-1 pt-1 transition-colors duration-200"
              :class="{ 'text-white font-medium': $route.path === '/services', 'text-gray-400 hover:text-white': $route.path !== '/services' }">
              Services
            </router-link>
            <router-link to="/resume" class="inline-flex items-center px-1 pt-1 transition-colors duration-200"
              :class="{ 'text-white font-medium': $route.path === '/resume', 'text-gray-400 hover:text-white': $route.path !== '/resume' }">
              Resume
            </router-link>
            <router-link to="/work" class="inline-flex items-center px-1 pt-1 transition-colors duration-200"
              :class="{ 'text-white font-medium': $route.path === '/work', 'text-gray-400 hover:text-white': $route.path !== '/work' }">
              Work
            </router-link>
            <router-link to="/contact" class="inline-flex items-center px-1 pt-1 transition-colors duration-200"
              :class="{ 'text-white font-medium': $route.path === '/contact', 'text-gray-400 hover:text-white': $route.path !== '/contact' }">
              Contact
            </router-link>
            <button
              class="px-6 py-2 bg-[#00ff9d] text-black rounded-full font-medium hover:bg-[#00cc7d] transition-colors duration-200">
              Hire me
            </button>
          </div>
        </div>
      </div>
    </nav>

    <main class="flex-1 overflow-hidden">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
