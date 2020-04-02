/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Tripcarte.Asia Dashboard Management Portal
  Developer: Tripcarte Development Team
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  getEvent: state => (eventId) => state.events.find((event) => event.id == eventId),
}
