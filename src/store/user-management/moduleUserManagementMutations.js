/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Tripcarte.Asia Dashboard Management Portal
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  SET_USERS(state, users) {
    state.users = users
  },
  REMOVE_RECORD(state, itemId) {
      const userIndex = state.users.findIndex((u) => u.id == itemId)
      state.users.splice(userIndex, 1)
  },
}
