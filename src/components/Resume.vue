<template>
    <div class="h-full bg-[#1c1b22] overflow-auto">
        <div class="max-w-7xl mx-auto h-full py-16 px-24">
            <div class="grid grid-cols-12 gap-8 h-full">
                <!-- 左侧导航 -->
                <div class="col-span-3 flex flex-col gap-4">
                    <h1 class="text-5xl text-white mb-4 ma-shan-zheng-regular">为什么选择我？</h1>
                    <p class="text-gray-400 mb-8">
                        专注于Web开发的全栈工程师<br>
                        擅长解决复杂问题
                    </p>

                    <RouterLink to="/resume/experience" custom v-slot="{ isActive, navigate }">
                        <button @click="navigate" :class="[
                            'w-full py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors',
                            isActive ? 'bg-[#00ff9d] text-black' : 'bg-[#2b2a33] text-white'
                        ]">
                            开发经验
                        </button>
                    </RouterLink>

                    <RouterLink to="/resume/education" custom v-slot="{ isActive, navigate }">
                        <button @click="navigate" :class="[
                            'w-full py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors',
                            isActive ? 'bg-[#00ff9d] text-black' : 'bg-[#2b2a33] text-white'
                        ]">
                            教育背景
                        </button>
                    </RouterLink>

                    <RouterLink to="/resume/skills" custom v-slot="{ isActive, navigate }">
                        <button @click="navigate" :class="[
                            'w-full py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors',
                            isActive ? 'bg-[#00ff9d] text-black' : 'bg-[#2b2a33] text-white'
                        ]">
                            专业技能
                        </button>
                    </RouterLink>

                    <RouterLink to="/resume/about" custom v-slot="{ isActive, navigate }">
                        <button @click="navigate" :class="[
                            'w-full py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors',
                            isActive ? 'bg-[#00ff9d] text-black' : 'bg-[#2b2a33] text-white'
                        ]">
                            关于我
                        </button>
                    </RouterLink>
                </div>

                <!-- 右侧内容 -->
                <div class="col-span-9">
                    <RouterView />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.ma-shan-zheng-regular {
    font-family: "Ma Shan Zheng", serif;
    font-weight: 400;
    font-style: normal;
}
</style>