const renderer = require("./renderer.js")
const qs = require("querystring")
const fs = require('fs')


function home(request, response) {
    if (request.url === "/") {
        response.writeHead(200, {'Content-Type': 'text/html'})
        renderer.view("home", {}, request, response)
        renderer.view("index", {}, request, response)
        renderer.view("registro", {}, request, response)
        response.end()
    }
}

function style(request, response) {
    if (request.url.indexOf('.css') != -1) {
        response.writeHead(200, {'Content-Type': 'text/css'})
        renderer.contentType('/views' + request.url, request, response)
        response.end()
    }
    if (request.url.indexOf('.js') != -1) {
        response.writeHead(200, {'Content-Type': 'text/javascript'})
        renderer.contentType('/' + request.url, request, response)
        response.end()
    }
    if (request.url.indexOf('.jpg') != -1) {
        response.writeHead(200, {'Content-Type': 'image/jpeg'})
        renderer.contentType('/views' + request.url, request, response)
        response.end()
    }
    if (request.url.indexOf('.png') != -1) {
        response.writeHead(200, {'Content-Type': 'image/png'})
        renderer.contentType('/views' + request.url, request, response)
        response.end()
    }
}

module.exports.style = style
module.exports.home = home
