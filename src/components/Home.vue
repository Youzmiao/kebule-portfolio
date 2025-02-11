<template>
    <div class="h-screen overflow-hidden bg-[#1c1b22] px-4 md:px-8 py-8">
        <div class="max-w-6xl mx-auto h-full">
            <!-- 职业标题 -->
            <div class="text-gray-300 mb-4 long-cang-regular text-2xl">
                前端开发工程师
            </div>

            <!-- 主标题 -->
            <div class="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                    <h1 class="text-5xl md:text-6xl text-white mb-6">
                        <span class="long-cang-regular">你好，我是</span>
                        <span class="block text-[#00ff9d] long-cang-regular">卢克</span>
                    </h1>

                    <p class="text-gray-400 mb-8 max-w-xl long-cang-regular text-2xl">
                        专注于创造精美的用户界面，
                        热衷于用代码实现优秀的交互体验。
                        精通 Vue、React 等主流框架，
                        追求像素级的设计还原。
                    </p>

                    <!-- 按钮和社交媒体链接 -->
                    <div class="flex items-center gap-4 flex-wrap">
                        <button
                            class="bg-transparent border-2 border-[#00ff9d] text-[#00ff9d] px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#00ff9d] hover:text-black transition-colors long-cang-regular text-xl">
                            下载简历
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>

                        <div class="flex gap-4">
                            <a href="#"
                                class="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#00ff9d] hover:text-[#00ff9d] transition-colors">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#"
                                class="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#00ff9d] hover:text-[#00ff9d] transition-colors">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#"
                                class="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#00ff9d] hover:text-[#00ff9d] transition-colors">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="#"
                                class="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#00ff9d] hover:text-[#00ff9d] transition-colors">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- 右侧头像 -->
                <div class="relative">
                    <div
                        class="aspect-square rounded-full border-2 border-dashed border-[#00ff9d] p-4 animate-[spin_20s_linear_infinite]">
                        <img src="" alt="个人头像" class="rounded-full w-full h-full object-cover" />
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
// 如果需要的话，这里可以添加组件逻辑
</script>

<style>
.long-cang-regular {
    font-family: "Long Cang", serif;
    font-weight: 400;
    font-style: normal;
}
</style>