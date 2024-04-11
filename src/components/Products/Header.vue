<template>
    <div class="border-b mb-4 py-4 flex justify-between items-center">
        <div>
            <h2 class="text-2xl font-bold text-gray-800">
                {{ title }}
            </h2>
            <p class="text-gray-500" v-if="subtitle">
                {{ subtitle }}
            </p>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
defineProps(['title', 'subtitle'])
</script>

<style lang="scss" scoped></style>