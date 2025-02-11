<template>
    <div class="h-full bg-[#1c1b22] p-8 overflow-auto">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center text-white mb-12">联系我</h2>

            <!-- 信封容器 -->
            <div class="envelope-container relative">
                <!-- 信封盖子 -->
                <div :class="['envelope-flap absolute w-full h-[100px] origin-top transition-all duration-700 bg-[#2b2a33]',
                    { 'rotate-180': isSubmitting }]" style="clip-path: polygon(0 0, 50% 100%, 100% 0);">
                </div>

                <!-- 信封主体 -->
                <div class="bg-[#2b2a33] p-6 rounded-lg shadow-md relative">
                    <!-- 左右信封边 -->
                    <div class="absolute left-0 top-0 w-[20px] h-full bg-[#232228]"
                        style="clip-path: polygon(0 0, 100% 50%, 0 100%);"></div>
                    <div class="absolute right-0 top-0 w-[20px] h-full bg-[#232228]"
                        style="clip-path: polygon(100% 0, 0 50%, 100% 100%);"></div>

                    <form class="space-y-6" @submit.prevent="handleSubmit">
                        <div>
                            <label class="block text-gray-300 mb-2">邮箱</label>
                            <input type="email" v-model="email"
                                class="w-full px-4 py-2 bg-[#1c1b22] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white">
                        </div>
                        <div>
                            <label class="block text-gray-300 mb-2">留言</label>
                            <textarea v-model="message"
                                class="w-full px-4 py-2 bg-[#1c1b22] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                                rows="4"></textarea>
                        </div>
                        <button
                            class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            :disabled="isSubmitting">
                            {{ isSubmitting ? '发送中...' : '发送消息' }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const message = ref('');
const isSubmitting = ref(false);

const handleSubmit = async () => {
    isSubmitting.value = true;

    // 模拟发送请求
    await new Promise(resolve => setTimeout(resolve, 2000));

    // 重置表单
    email.value = '';
    message.value = '';

    // 动画结束后重置状态
    setTimeout(() => {
        isSubmitting.value = false;
    }, 2000);
};
</script>

<style scoped>
.envelope-container {
    perspective: 1000px;
}

.envelope-flap {
    transform-origin: top;
    z-index: 10;
}
</style>