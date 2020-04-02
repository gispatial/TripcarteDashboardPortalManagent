<!-- =========================================================================================
    File Name: ColorDefault.vue
    Description: Theme's main colors(primary, success etc.)
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
  	Author: Tripcarte.Asia
  	Author URL: http://tripcarte.asia/
========================================================================================== -->


<template>
    <vx-card title="MANAGEMENT DASHBOARD" code-toggler>

        <p>Glossary</p>

        <p class="mb-5"></strong>This page is under constructions. Sorry for your inconvenience</p>

        <template slot="codeContainer">
&lt;ul class=&quot;demo-alignment text-white&quot;&gt;
  &lt;li class=&quot;bg-primary&quot;&gt;primary&lt;/li&gt;
  &lt;li class=&quot;bg-success&quot;&gt;success&lt;/li&gt;
  &lt;li class=&quot;bg-danger&quot;&gt;danger&lt;/li&gt;
  &lt;li class=&quot;bg-warning&quot;&gt;warning&lt;/li&gt;
  &lt;li class=&quot;bg-dark&quot;&gt;dark&lt;/li&gt;
&lt;/ul&gt;
        </template>

    </vx-card>
</template>

<script>
    export default{
        data() {
            return {
                'defaultColors': [
                    'primary',
                    'success',
                    'danger',
                    'warning',
                    'dark',
                ],
            }
        },
    }
</script>
