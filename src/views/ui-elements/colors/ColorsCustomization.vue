<!-- =========================================================================================
    File Name: ColorCustomization.vue
    Description: Change theme's main colors(primary, success etc.)
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="UNDER DEVELOPMENT" code-toggler code-language="js">

    <p>UNDER DEVELOPMENT:</p>

    <p class="mb-5">.</p><br>

        <ul class="demo-alignment text-white">
            <li style="background-color: #5b3cc4">
                primary
            </li>
            <li style="background-color: rgb(23, 201, 100)">
                success
            </li>
            <li style="background-color: rgb(242, 19, 93)">
                danger
            </li>
            <li style="background-color: rgb(255, 130, 0)">
                warning
            </li>
            <li style="background-color: rgb(36, 33, 69)">
                dark
            </li>
        </ul>

        <template slot="codeContainer">
Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: &apos;#5b3cc4&apos;,
      success: &apos;rgb(23, 201, 100)&apos;,
      danger: &apos;rgb(242, 19, 93)&apos;,
      warning: &apos;rgb(255, 130, 0)&apos;,
      dark: &apos;rgb(36, 33, 69)&apos;
    }
  }
})
        </template>

    </vx-card>
</template>
