var tools = require('../tools/tools.js')
var express = require('express')
var cors = require('cors')
var app = express()
var router = express.Router()


app.use(cors())
/** /connect_to_quickbooks **/
router.get('/', function (req, res) {
  console.log('howdy friends!')
  // Set the Accounting + Payment scopes
  tools.setScopes('connect_to_quickbooks')

  // Constructs the authorization URI.
  var uri = tools.intuitAuth.code.getUri({
    // Add CSRF protection
    state: tools.generateAntiForgery(req.session)
  })

  // Redirect
  console.log('Redirecting to authorization uri: ' + uri)
  res.send(uri)
})

module.exports = router
