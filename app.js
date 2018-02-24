const router = require("./router.js")
const http = require('http')
const serverPort = 8000
// createServer
http.createServer(function (request, response) {
    router.style(request,response)
        router.home(request, response)
        router.lorem(request, response)
}).listen(serverPort)
console.log('Server running at localhost:' + serverPort)
