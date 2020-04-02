<!-- =========================================================================================
    File Name: ColorTailwind.vue
    Description: Tailwind Colors - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
  	Author: Tripcarte.Asia
  	Author URL: http://tripcarte.asia/
========================================================================================== -->


<template>
    <vx-card title="UNDER DEVELOPMENT">
        UNDER DEVELOPMENT

    </vx-card>
</template>

<script>
import TailwindTextClasses from './tailwind/TailwindTextClasses.vue'
import TailwindBackgroundClasses from './tailwind/TailwindBackgroundClasses.vue'
import TailwindAddMoreColors from './tailwind/TailwindAddMoreColors.vue'

export default{
    components: {
        TailwindTextClasses,
        TailwindBackgroundClasses,
        TailwindAddMoreColors,
    }
}
</script>

<style lang="scss">
#colors-demo {
    .demo-alignment li {
        width: 100px;
        height: 100px;
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        cursor: default;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    }
}
</style>
