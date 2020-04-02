<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">

          <div class="vx-row no-gutter justify-center items-center">

            <div class="vx-col hidden lg:block lg:w-1/2">

            <div align="left"><h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"With this Travel Hack,<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Anyone can travel, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;no matter the budget!" _Tripcarte.Asia</h4></div>
              <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto" width="90%">
              <div>
              &nbsp;
              </div>
              <div align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here’s how you can pay for your travel for only ⅓ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;upfront with Split instalments, no credit card &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;needed! The memories you make from travelling are &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;priceless, but the travel itself can be pricey. Saving to &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;travel solo can seem like an impossible task and &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;attraction tickets can be quite costly especially if &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;booking group tickets! It makes no sense why you &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;should pay for... <a href="https://tripcarte.asia/blog/2020/03/10/with-this-travel-hack-anyone-can-travel-no-matter-the-budget/" target="_blank">Read More</a></div>
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="px-8 pt-8 login-tabs-container">

                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">Login</h4>
                  <p>Welcome back merchants & partners, <br>Please login to your existing account.</p>
                </div>

                <vs-tabs>
                  <vs-tab label="SIGN-IN">
                    <login-jwt></login-jwt>
                  </vs-tab>
                </vs-tabs>

              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>


<script>
import LoginJwt from "./LoginJWT.vue"
import LoginFirebase from "./LoginFirebase.vue"
import LoginAuth0 from "./LoginAuth0.vue"

export default {
  components: {
    LoginJwt,
    LoginFirebase,
    LoginAuth0
  }
}
</script>

<style lang="scss">
.login-tabs-container {
  min-height: 505px;

  .con-tab {
    padding-bottom: 14px;
  }

  .con-slot-tabs {
    margin-top: 1rem;
  }
}
</style>
