<template>
    <div class="page">
        <van-button icon-position="right" :type="btnType" :size="size" :color="btnColor" @click="$emit('clickTest')">{{
            btnText
        }}</van-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    emits: ["clickTest"],
    props: {
        btnType: {
            type: String,
            default: "primary",
        },
        btnText: {
            type: String,
            required: true,
        },
        size: String,
        btnColor: String,
    },
    setup(prop, ctx) {
        return {};
    },
});
</script>

<style lang="less" scoped>
.page {
}
</style>
