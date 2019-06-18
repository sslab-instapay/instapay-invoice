var instapayReq = require('payreq.js')


function main(){

  console.log("-- encode Test --")
  var encoded = lightningPayReq.encode({
  "satoshis": 2000,
  "timestamp": 1496314658,
  "tags": [
    {
      "tagName": "payee_node_key",
      "data": "3925b6f67e2c340036ed12093dd44e0368df1b6ea26c53dbe4811f58fd5db8c1"
    },
  ]
  })
  var privateKeyHex = 'e126f68f7eafcc8b74f54d269fe206be715000f94dac067d1c04a8ca3b2db734'
  var signed = instapayReq.sign(encoded, privateKeyHex)

  console.log(signed)

}
