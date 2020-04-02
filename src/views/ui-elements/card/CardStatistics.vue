<!-- =========================================================================================
    File Name: CardStatistics.vue
    Description: Statistics Card
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
  	Author: Tripcarte.Asia
  	Author URL: http://tripcarte.asia/
========================================================================================== -->


<template>
    <div>
        <div><h4>Welcome User to Tripcarte.Asia Management Portal. <p></p>You have done 57.6% more sales today. Congratulations!</h4>

                    <img src="@/assets/images/elements/decore-right.png" class="decore-right" alt="Decore Right" width="30%">
        </div>
        <!-- ROW 1-->
        <div></div>
        <vs-button color="#7ab8c5" type="filled" target :href="{url: 'https://tdmp-reviews.now.sh/'}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View&nbsp;All Reviews&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</vs-button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<vs-button color="#7ab8c5" type="filled" target :href="{url: 'https://tdmp-tickets.now.sh/'}">View all redeemed tickets</vs-button>
        <!-- ROW 3 -->
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                <statistics-card-line
                  class="mb-base"
                  v-if="subscribersGained.analyticsData"
                  icon="ShoppingBagIcon"
                  statistic="12k"
                  statisticTitle="Total Reviews Collected . Click to view all Reviews."
                  :chartData="subscribersGained.series"
                  type='area' />
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                <statistics-card-line
                  class="mb-base"
                  v-if="revenueGenerated.analyticsData"
                  icon="UsersIcon"
                  statistic="350 tickets . + 15%"
                  statisticTitle="Total Redemption this Week"
                  :chartData="revenueGenerated.series"
                  color='success'
                  type='area' />
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                <statistics-card-line
                  class="mb-base"
                  v-if="quarterlySales.analyticsData"
                  icon="ShoppingCartIcon"
                  statistic="14k"
                  statisticTitle="Total Redemption this Year"
                  :chartData="quarterlySales.series"
                  color='danger'
                  type='area' />
            </div>
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                <statistics-card-line
                  class="mb-base"
                  v-if="ordersRecevied.analyticsData"
                  icon="DollarSignIcon"
                  statistic="RM 2300"
                  statisticTitle="Total Pending Payout"
                  :chartData="ordersRecevied.series"
                  color='warning'
                  type='area' />
            </div>
        </div>

        <!-- ROW 4 -->
        <div class="vx-row">

            <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                <statistics-card-line
                  class="md:mb-0 mb-base"
                  icon="MonitorIcon"
                  icon-right
                  statistic="78.9k"
                  statisticTitle="View all redeemed tickets( Order , Item , Redeemed Date , Qty , Redeemed By )"
                  :chartData="siteTraffic.series" />
            </div>

            <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                <statistics-card-line
                  class="md:mb-0 mb-base"
                  icon="UserCheckIcon"
                  icon-right
                  statistic="659.8k"
                  statisticTitle="View all redeemed tickets( Order , Item , Redeemed Date , Qty , Redeemed By )"
                  :chartData="activeUsers.series"
                  color="success" />
            </div>

            <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                <statistics-card-line
                  icon="MailIcon"
                  icon-right
                  statistic="28.7k"
                  statisticTitle="Export data to csv"
                  :chartData="newsletter.series"
                  color="warning" />
            </div>
        </div>

    </div>
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'

export default{
    components: {
        StatisticsCardLine
    },
    data() {
        return {
            // Area charts
            subscribersGained: {},
            revenueGenerated: {},
            quarterlySales: {},
            ordersRecevied: {},

            // Line Charts
            siteTraffic: {},
            activeUsers: {},
            newsletter: {},
        }
    },
    created() {
      // Subscribers gained
      this.$http.get("/api/card/card-statistics/subscribers")
        .then((response) => { this.subscribersGained = response.data })
        .catch((error) => { console.log(error) })

      // Revenue Generated
      this.$http.get("/api/card/card-statistics/revenue")
        .then((response) => { this.revenueGenerated = response.data })
        .catch((error) => { console.log(error) })

      // Sales
      this.$http.get("/api/card/card-statistics/sales")
        .then((response) => { this.quarterlySales = response.data })
        .catch((error) => { console.log(error) })

      // Orders
      this.$http.get("/api/card/card-statistics/orders")
        .then((response) => { this.ordersRecevied = response.data })
        .catch((error) => { console.log(error) })

      // Site Traffic gained
      this.$http.get("/api/card/card-statistics/site-traffic")
        .then((response) => { this.siteTraffic = response.data })
        .catch((error) => { console.log(error) })

      // Active Users
      this.$http.get("/api/card/card-statistics/active-users")
        .then((response) => { this.activeUsers = response.data })
        .catch((error) => { console.log(error) })

      // Site Traffic gained
      this.$http.get("/api/card/card-statistics/newsletter")
        .then((response) => { this.newsletter = response.data })
        .catch((error) => { console.log(error) })
    }
}

</script>
