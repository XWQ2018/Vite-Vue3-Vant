<!--
 * @Description: Description
 * @Author: xwq
 * @Date: 2021-03-08 17:49:37
-->
<template>
    <div>
        <div>
            <Button-custom btnText="登录提交" size="large" @clickTest="clickHandle"></Button-custom>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonCustom from "../../components/Button-custom.vue";

export default defineComponent({
    components: { ButtonCustom },
    setup() {
        const clickHandle = () => {
            console.log("login");
        };
        return {
            clickHandle,
        };
    },
});
</script>

<style lang="less" scoped></style>
