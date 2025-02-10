<template>
    <div class="h-full bg-[#1c1b22] p-8 overflow-auto">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center text-white mb-12">联系我</h2>
            <div class="bg-[#2b2a33] p-6 rounded-lg shadow-md">
                <form class="space-y-6">
                    <div>
                        <label class="block text-gray-300 mb-2">邮箱</label>
                        <input type="email"
                            class="w-full px-4 py-2 bg-[#1c1b22] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white">
                    </div>
                    <div>
                        <label class="block text-gray-300 mb-2">留言</label>
                        <textarea
                            class="w-full px-4 py-2 bg-[#1c1b22] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                            rows="4"></textarea>
                    </div>
                    <button
                        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">发送消息</button>
                </form>
            </div>
        </div>
    </div>
</template>