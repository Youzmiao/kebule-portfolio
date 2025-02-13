<template>
    <div class="flex justify-center items-center min-h-[400px]">
        <div class="honeycomb">
            <!-- 第一行 -->
            <div class="hexagon bg-slate-300/30"></div>
            <div class="hexagon bg-slate-300/30"></div>
            <div class="hexagon bg-slate-300/30"></div>
            <div class="hexagon bg-slate-300/30"></div>
            <!-- 第二行 -->
            <div class="hexagon bg-slate-300/30"></div>
            <div class="hexagon bg-slate-300/30 flex items-center justify-center">
                <div class="hexagon-content opacity-100">😊</div>
            </div>
            <div class="hexagon bg-slate-300/30"></div>
            <!-- 第三行 -->
            <div class="hexagon bg-slate-300/30"></div>
            <div class="hexagon bg-slate-300/30"></div>
            <div class="hexagon bg-slate-300/30"></div>
        </div>
    </div>
</template>

<style scoped>
.honeycomb {
    display: grid;
    grid-template-columns: repeat(4, 60px);
    gap: 0;
    position: relative;
}

.hexagon {
    width: 60px;
    height: 60px;
    position: relative;
    margin: -15px 0;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

/* 偶数行偏移 */
.honeycomb> :nth-child(n+5):nth-child(-n+7) {
    transform: translateX(30px);
}

/* 最后一行偏移 */
.honeycomb> :nth-child(n+8) {
    transform: translateY(-30px);
}
</style>