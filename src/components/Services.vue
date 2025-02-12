<template>
    <div class="h-full bg-[#1c1b22] p-8 overflow-auto">
        <div class="max-w-7xl mx-auto h-full">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 h-full py-12 px-24">
                <!-- Web Development -->
                <div
                    class="relative h-full flex flex-col justify-center border-b-[1px] border-[#a5afab] group cursor-pointer">
                    <div class="flex items-center gap-4 mb-8">
                        <span class="text-4xl font-mono text-white opacity-80">01</span>
                        <h3 class="text-4xl text-white ma-shan-zheng-regular">Web开发</h3>
                    </div>
                    <div class="absolute top-4 right-0">
                        <div
                            class="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-[#00ff9d] group-hover:text-black transition-colors">
                            <span
                                class="transform rotate-45 text-xl group-hover:rotate-0 transition-transform duration-300">→</span>
                        </div>
                    </div>
                    <p class="text-gray-400 mt-4 text-lg leading-relaxed">
                        专业的网站开发服务，打造完美用户体验<br>
                        从前端到后端的全栈解决方案
                    </p>
                </div>

                <!-- UI/UX Design -->
                <div
                    class="relative h-full flex flex-col justify-center border-b-[1px] border-[#a5afab] group cursor-pointer">
                    <div class="flex items-center gap-4 mb-8">
                        <span class="text-4xl font-mono text-[#00ff9d] opacity-80">02</span>
                        <h3 class="text-4xl text-[#00ff9d] ma-shan-zheng-regular">界面设计</h3>
                    </div>
                    <div class="absolute top-4 right-0">
                        <div
                            class="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-[#00ff9d] group-hover:text-black transition-colors">
                            <span
                                class="transform rotate-45 text-xl group-hover:rotate-0 transition-transform duration-300">→</span>
                        </div>
                    </div>
                    <p class="text-gray-400 mt-4 text-lg leading-relaxed">
                        创新的用户界面设计，优化交互体验<br>
                        让设计更具吸引力和实用性
                    </p>
                </div>

                <!-- Logo Design -->
                <div
                    class="relative h-full flex flex-col justify-center border-b-[1px] border-[#a5afab] group cursor-pointer">
                    <div class="flex items-center gap-4 mb-8">
                        <span class="text-4xl font-mono text-white opacity-80">03</span>
                        <h3 class="text-4xl text-white ma-shan-zheng-regular">标志设计</h3>
                    </div>
                    <div class="absolute top-4 right-0">
                        <div
                            class="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-[#00ff9d] group-hover:text-black transition-colors">
                            <span
                                class="transform rotate-45 text-xl group-hover:rotate-0 transition-transform duration-300">→</span>
                        </div>
                    </div>
                    <p class="text-gray-400 mt-4 text-lg leading-relaxed">
                        独特的品牌标志设计，彰显企业形象<br>
                        让您的品牌更具识别度
                    </p>
                </div>

                <!-- SEO -->
                <div
                    class="relative h-full flex flex-col justify-center border-b-[1px] border-[#a5afab] group cursor-pointer">
                    <div class="flex items-center gap-4 mb-8">
                        <span class="text-4xl font-mono text-white opacity-80">04</span>
                        <h3 class="text-4xl text-white ma-shan-zheng-regular">搜索优化</h3>
                    </div>
                    <div class="absolute top-4 right-0">
                        <div
                            class="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-[#00ff9d] group-hover:text-black transition-colors">
                            <span
                                class="transform rotate-45 text-xl group-hover:rotate-0 transition-transform duration-300">→</span>
                        </div>
                    </div>
                    <p class="text-gray-400 mt-4 text-lg leading-relaxed">
                        专业的搜索引擎优化服务<br>
                        提升网站排名和访问量
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// 无需添加额外的脚本代码
</script>

<style scoped>
.ma-shan-zheng-regular {
    font-family: "Ma Shan Zheng", serif;
    font-weight: 400;
    font-style: normal;
}
</style>
