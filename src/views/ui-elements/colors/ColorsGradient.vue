<!-- =========================================================================================
    File Name: ColorsGradient.vue.vue
    Description: Theme's main colors(primary, success etc.) with gradient
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
  	Author: Tripcarte.Asia
  	Author URL: http://tripcarte.asia/
========================================================================================== -->


<template>
    <vx-card title="MANAGEMENT USER LISTS" code-toggler>

        <p>UNDER DEVELOPMENT:</p>

        <p class="mb-5">.</p>

        <template slot="codeContainer">
&lt;ul class=&quot;demo-alignment text-white&quot;&gt;
  &lt;li class=&quot;bg-primary-gradient&quot;&gt;primary gradient&lt;/li&gt;
  &lt;li class=&quot;bg-success-gradient&quot;&gt;success gradient&lt;/li&gt;
  &lt;li class=&quot;bg-danger-gradient&quot;&gt;danger gradient&lt;/li&gt;
  &lt;li class=&quot;bg-warning-gradient&quot;&gt;warning gradient&lt;/li&gt;
  &lt;li class=&quot;bg-dark-gradient&quot;&gt;dark gradient&lt;/li&gt;
&lt;/ul&gt;
        </template>

    </vx-card>
</template>

<script>
    export default{
        data() {
            return {
                'defaultColors': [
                    'primary gradient',
                    'success gradient',
                    'danger gradient',
                    'warning gradient',
                    'dark gradient',
                ],
            }
        },
    }
</script>
