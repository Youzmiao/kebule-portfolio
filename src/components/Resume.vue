<template>
    <div class="h-full bg-[#1c1b22] overflow-auto">
        <div class="max-w-7xl mx-auto h-full  py-16 px-24">
            <div class="grid grid-cols-12 gap-8 h-full">
                <!-- 左侧导航 -->
                <div class="col-span-3 flex flex-col gap-4">
                    <h1 class="text-5xl text-white mb-4 ma-shan-zheng-regular">为什么选择我？</h1>
                    <p class="text-gray-400 mb-8">
                        Lorem ipsum dolor sit amet,<br>
                        consectetur adipiscing elit.
                    </p>

                    <button
                        class="w-full bg-[#00ff9d] text-black py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors">
                        开发经验
                    </button>
                    <button
                        class="w-full bg-[#2b2a33] text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors">
                        教育背景
                    </button>
                    <button
                        class="w-full bg-[#2b2a33] text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors">
                        专业技能
                    </button>
                    <button
                        class="w-full bg-[#2b2a33] text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors">
                        关于我
                    </button>
                </div>

                <!-- 右侧内容 -->
                <div class="col-span-9">
                    <h2 class="text-4xl text-white mb-4 ma-shan-zheng-regular">我的经验</h2>
                    <p class="text-gray-400 mb-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                        Scelerisque consequat, faucibus et, et.
                    </p>

                    <div class="grid grid-cols-2 gap-8">
                        <!-- 2022 - Present -->
                        <div class="bg-[#2b2a33] p-8 rounded-lg">
                            <span class="text-[#00ff9d] mb-2 block">2022 - Present</span>
                            <h3 class="text-2xl text-white mb-4">全栈开发工程师</h3>
                            <div class="flex items-center gap-2">
                                <div class="w-2 h-2 bg-[#00ff9d] rounded-full"></div>
                                <span class="text-gray-400">科技解决方案公司</span>
                            </div>
                        </div>

                        <!-- Summer 2021 -->
                        <div class="bg-[#2b2a33] p-8 rounded-lg">
                            <span class="text-[#00ff9d] mb-2 block">Summer 2021</span>
                            <h3 class="text-2xl text-white mb-4">前端开发实习生</h3>
                            <div class="flex items-center gap-2">
                                <div class="w-2 h-2 bg-[#00ff9d] rounded-full"></div>
                                <span class="text-gray-400">网页设计工作室</span>
                            </div>
                        </div>

                        <!-- 2020 - 2021 -->
                        <div class="bg-[#2b2a33] p-8 rounded-lg">
                            <span class="text-[#00ff9d] mb-2 block">2020 - 2021</span>
                            <h3 class="text-2xl text-white mb-4">自由职业开发者</h3>
                            <div class="flex items-center gap-2">
                                <div class="w-2 h-2 bg-[#00ff9d] rounded-full"></div>
                                <span class="text-gray-400">电商创业公司</span>
                            </div>
                        </div>

                        <!-- 2019 - 2020 -->
                        <div class="bg-[#2b2a33] p-8 rounded-lg">
                            <span class="text-[#00ff9d] mb-2 block">2019 - 2020</span>
                            <h3 class="text-2xl text-white mb-4">助教</h3>
                            <div class="flex items-center gap-2">
                                <div class="w-2 h-2 bg-[#00ff9d] rounded-full"></div>
                                <span class="text-gray-400">技术培训学院</span>
                            </div>
                        </div>
                    </div>
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