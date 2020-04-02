// axios
import axios from 'axios'

const domain = "https://demo.travelasia.com.my/wp-json"

export default axios.create({
  domain
  // You can add your headers here
})
