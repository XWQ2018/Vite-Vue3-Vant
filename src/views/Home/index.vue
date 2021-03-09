<!--
 * @Description: Description
 * @Author: xwq
 * @Date: 2021-03-08 17:48:55
-->
<template>
    <div>
        <Button-custom btnText="确定提交" size="large" @clickTest="clickHandle"></Button-custom>
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
// setup语法
// const router = useRouter();
// const test = ref("测试");
// const goLogin = () => {
//     router.push("/login");
// };

// const state = reactive({
//     color: "#f00",
// });
// 原来的语法
import { defineComponent } from "vue";
import ButtonCustom from "../../components/Button-custom.vue";
export default defineComponent({
    components: { ButtonCustom },
    setup() {
        const router = useRouter();
        const clickHandle = () => {
            router.push("/login");
        };
        return {
            clickHandle,
        };
    },
});
</script>

<style lang="less" scoped>
.t-t {
    color: #f00;
    font-size: 24px;
    .t-t-1 {
        color: @color_blue;
        background-color: #ccc;
        font-size: @font_size_t2;
        padding: 10px;
        display: flex;
    }
}
</style>
