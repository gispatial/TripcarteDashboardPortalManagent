<!-- =========================================================================================
    File Name: DashboardEcommerce.vue
    Description: Dashboard - Ecommerce
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
    Developer: Tripcarte Development Team
    Staging URL: http://tripcarte.gispatial.tech/api
========================================================================================== -->

<template>
    <div>
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line
                  v-if="subscribersGained.analyticsData"
                  icon="UsersIcon"
                  :statistic="subscribersGained.analyticsData.subscribers | k_formatter"
                  statisticTitle="New Notification"
                  :chartData="subscribersGained.series"
                  type='area' />
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line
                  v-if="revenueGenerated.analyticsData"
                  icon="DollarSignIcon"
                  :statistic="revenueGenerated.analyticsData.revenue | k_formatter"
                  statisticTitle="New | Upcoming Booking"
                  :chartData="revenueGenerated.series"
                  color='success'
                  type='area' />
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line
                  v-if="quarterlySales.analyticsData"
                  icon="ShoppingCartIcon"
                  :statistic="quarterlySales.analyticsData.sales"
                  statisticTitle="Total Pending Payout"
                  :chartData="quarterlySales.series"
                  color='danger'
                  type='area' />
            </div>
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line
                  v-if="ordersRecevied.analyticsData"
                  icon="ShoppingBagIcon"
                  :statistic="ordersRecevied.analyticsData.orders | k_formatter"
                  statisticTitle="Total Redemption this Week"
                  :chartData="ordersRecevied.series"
                  color='warning'
                  type='area' />
            </div>
        </div>

        <div class="vx-row">

            <!-- LINE CHART -->
            <div class="vx-col w-full md:w-2/3 mb-base">
                <vx-card title="Total Redemption this Year">
                    <template slot="actions">
                        <feather-icon icon="SettingsIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>
                    <div slot="no-body" class="p-6 pb-0">
                        <div class="flex" v-if="revenueComparisonLine.analyticsData">
                            <div class="mr-6">
                                <p class="mb-1 font-semibold">This Month</p>
                                <p class="text-3xl text-success"><sup class="text-base mr-1">$</sup>RM 2300</p>
                            </div>
                            <div>
                                <p class="mb-1 font-semibold">Last Month</p>
                                <p class="text-3xl"><sup class="text-base mr-1">$</sup>RM 5500</p>
                            </div>
                        </div>
                        <vue-apex-charts
                          type=line
                          height=266
                          :options="analyticsData.revenueComparisonLine.chartOptions"
                          :series="revenueComparisonLine.series" />
                    </div>
                </vx-card>
            </div>

            <!-- RADIAL CHART -->
            <div class="vx-col w-full md:w-1/3 mb-base">
                <vx-card title="Goal Overview">
                    <template slot="actions">
                        <feather-icon icon="HelpCircleIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>

                    <!-- CHART -->
                    <template slot="no-body">
                        <div class="mt-10">
                            <vue-apex-charts type=radialBar height=240 :options="analyticsData.goalOverviewRadialBar.chartOptions" :series="goalOverview.series" />
                        </div>
                    </template>

                    <!-- DATA -->
                    <div class="flex justify-between text-center mt-6" slot="no-body-bottom">
                        <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0">
                            <p class="mt-4">Completed</p>
                            <p class="mb-4 text-3xl font-semibold">786,617</p>
                        </div>
                        <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0">
                            <p class="mt-4">In Progress</p>
                            <p class="mb-4 text-3xl font-semibold">13,561</p>
                        </div>
                    </div>
                </vx-card>
            </div>
        </div>

        <div class="vx-row">


            <div class="vx-col w-full md:w-2/3">
                <vx-card title="Merchants | Partners Retention">
                    <div class="flex">
                        <span class="flex items-center"><div class="h-3 w-3 rounded-full mr-1 bg-primary"></div><span>New Merchants</span></span>
                        <span class="flex items-center ml-4"><div class="h-3 w-3 rounded-full mr-1 bg-danger"></div><span>Retained Merchants</span></span>
                    </div>
                    <vue-apex-charts type=bar height=277 :options="analyticsData.clientRetentionBar.chartOptions" :series="clientRetentionBar.series" />
                </vx-card>
            </div>
        </div>

        <div class="vx-row">
            <!-- Sessions By Device -->
            <div class="vx-col w-full lg:w-1/3 lg:mt-0 mt-base">
                <vx-card title="Sessions By Reviews">
                    <!-- SLOT = ACTIONS -->
                    <template slot="actions">
                        <change-time-duration-dropdown />
                    </template>

                    <div slot="no-body">
                        <vue-apex-charts class="mt-6 mb-8" type=donut height=325 :options="analyticsData.sessionsByDeviceDonut.chartOptions" :series="sessionsData.series" />
                    </div>

                    <ul class="mt-6">
                            <div class="ml-auto flex -mr-1">
                            </div>
                        </li>
                    </ul>
                </vx-card>
            </div>

            <!-- CHAT CARD -->

            </div>



            <!-- CUSTOMERS CHART -->
            <div class="vx-col w-full lg:w-1/3 lg:mt-0 mt-base">
                <vx-card title="Merchants, Travel Agent & Partners">
                    <!-- SLOT = ACTIONS -->
                    <template slot="actions">
                        <change-time-duration-dropdown />
                    </template>

                    <div slot="no-body">
                        <!-- CHART -->
                        <vue-apex-charts type=pie height=345 class="mt-10 mb-10" :options="analyticsData.customersPie.chartOptions" :series="customersData.series" />

                        <!-- CHART DATA -->
                        <ul class="mb-1">
                            <li v-for="customerData in customersData.analyticsData" :key="customerData.customerType" class="flex justify-between py-3 px-6 border d-theme-border-grey-light border-solid border-r-0 border-l-0 border-b-0">
                                <span class="flex items-center">
                                    <span class="inline-block h-3 w-3 rounded-full mr-2" :class="`bg-${customerData.color}`"></span>
                                    <span class="font-semibold">{{ customerData.customerType }}</span>
                                </span>
                                <span>{{ customerData.counts }}</span>
                            </li>
                        </ul>
                    </div>

                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from './ui-elements/card/analyticsData.js'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'

export default{
    data() {
        return {
            subscribersGained: {},
            revenueGenerated: {},
            quarterlySales: {},
            ordersRecevied: {},

            revenueComparisonLine: {},
            goalOverview: {},

            browserStatistics: [],
            clientRetentionBar: {},

            sessionsData: {},
            chatLog: [],
            chatMsgInput: '',
            customersData: {},

            analyticsData: analyticsData,
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
        }
    },
    components: {
        VueApexCharts,
        StatisticsCardLine,
        VuePerfectScrollbar,
        ChangeTimeDurationDropdown
    },
    mounted() {
        this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
    },
    created() {
      // Subscribers gained - Statistics
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

      // Orders - Statistics
      this.$http.get("/api/card/card-statistics/orders")
        .then((response) => { this.ordersRecevied = response.data })
        .catch((error) => { console.log(error) })

      // Revenue Comparison
      this.$http.get("/api/card/card-analytics/revenue-comparison")
        .then((response) => { this.revenueComparisonLine = response.data })
        .catch((error) => { console.log(error) })

      // Goal Overview
      this.$http.get("/api/card/card-analytics/goal-overview")
        .then((response) => { this.goalOverview = response.data })
        .catch((error) => { console.log(error) })

      // Browser Analytics
      this.$http.get("/api/card/card-analytics/browser-analytics")
        .then((response) => { this.browserStatistics = response.data })
        .catch((error) => { console.log(error) })

      // Client Retention
      this.$http.get("/api/card/card-analytics/client-retention")
        .then((response) => { this.clientRetentionBar = response.data })
        .catch((error) => { console.log(error) })

      // Sessions By Device
      this.$http.get("/api/card/card-analytics/session-by-device")
        .then((response) => { this.sessionsData = response.data })
        .catch((error) => { console.log(error) })

      // Chat Log
      this.$http.get("/api/chat/demo-1/log")
        .then((response) => { this.chatLog = response.data })
        .catch((error) => { console.log(error) })

      // Customers
      this.$http.get("/api/card/card-analytics/customers")
        .then((response) => { this.customersData = response.data })
        .catch((error) => { console.log(error) })
    }
}
</script>

<style lang="scss">
.chat-card-log {
    height: 400px;

    .chat-sent-msg {
        background-color: #f2f4f7 !important;
    }
}
</style>
