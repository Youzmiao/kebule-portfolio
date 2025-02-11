<template>
    <nav class="bg-transparent">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center h-auto pt-8">
                <div class="flex items-center">
                    <router-link to="/" class="text-3xl font-bold text-white font-dancing">
                        Kebule<span class="text-[#00ff9d]">.</span>
                    </router-link>
                </div>

                <div class="flex items-center space-x-8">
                    <div class="nav-links relative">
                        <router-link to="/" class="nav-link font-nunito"
                            :class="{ 'text-white font-medium': $route.path === '/', 'text-gray-400 hover:text-white': $route.path !== '/' }">
                            Home
                        </router-link>
                        <router-link to="/services" class="nav-link font-nunito"
                            :class="{ 'text-white font-medium': $route.path === '/services', 'text-gray-400 hover:text-white': $route.path !== '/services' }">
                            Services
                        </router-link>
                        <router-link to="/resume" class="nav-link font-nunito"
                            :class="{ 'text-white font-medium': $route.path === '/resume', 'text-gray-400 hover:text-white': $route.path !== '/resume' }">
                            Resume
                        </router-link>
                        <router-link to="/work" class="nav-link font-nunito"
                            :class="{ 'text-white font-medium': $route.path === '/work', 'text-gray-400 hover:text-white': $route.path !== '/work' }">
                            Work
                        </router-link>
                        <router-link to="/contact" class="nav-link font-nunito"
                            :class="{ 'text-white font-medium': $route.path === '/contact', 'text-gray-400 hover:text-white': $route.path !== '/contact' }">
                            Contact
                        </router-link>
                        <div class="nav-indicator" ref="indicator"></div>
                    </div>
                    <button
                        class="px-6 py-1 bg-[#00ff9d] text-black rounded-full font-medium hover:bg-[#00cc7d] transition-colors duration-200 font-nunito">
                        Hire me
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const indicator = ref(null)

const updateIndicator = () => {
    const activeLink = document.querySelector('.nav-link.text-white')
    if (activeLink && indicator.value) {
        const { width, left } = activeLink.getBoundingClientRect()
        const navLinks = activeLink.closest('.nav-links')
        const navLeft = navLinks.getBoundingClientRect().left

        indicator.value.style.width = `${width}px`
        indicator.value.style.transform = `translateX(${left - navLeft}px)`
        indicator.value.style.opacity = '1'
    }
}

onMounted(() => {
    updateIndicator()
})

watch(() => route.path, () => {
    if (indicator.value) {
        // 先淡出
        indicator.value.style.opacity = '0'
        // 等待淡出完成后更新位置并淡入
        setTimeout(() => {
            updateIndicator()
        }, 300)
    }
})
</script>

<style scoped>
.nav-links {
    display: flex;
    gap: 2rem;
    position: relative;
}

.nav-link {
    padding: 0.25rem 0;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: white;
}

.nav-indicator {
    position: absolute;
    bottom: -1px;
    height: 2px;
    background-color: #00ff9d;
    opacity: 0;
    transition: transform 0.3s ease, width 0.3s ease, opacity 0.3s ease;
}

.font-dancing {
    font-family: 'Dancing Script', cursive;
}

.font-nunito {
    font-family: 'Nunito', sans-serif;
}
</style>