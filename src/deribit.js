import Deribit from 'deribit-ws-js'

let deribit = new Deribit({
  key: process.env.VUE_APP_DERIBIT_KEY,
  secret: process.env.VUE_APP_DERIBIT_SECRET,
})

export default deribit
