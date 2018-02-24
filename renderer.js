var fs = require('fs');


function mergeValues(values, content) {
    for (var key in values) {
        content = content.replace("{{" + key + "}}", values[key]);
    }
    return content;
}
function view(templateName, values, request, response) {
    var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf-8"});
    fileContents = mergeValues(values, fileContents);
    response.write(fileContents);
}

function contentType(values, request, response) {
    var fileContents = fs.readFileSync(__dirname + values);
    response.write(fileContents);
}

module.exports.contentType = contentType;
module.exports.view = view;