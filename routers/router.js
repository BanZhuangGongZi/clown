var formidable = require("formidable");

exports.test = function (req, res, next) {
    var form = new formidable.IncomingForm();
     form.parse(req, function (err, fields, files) {
         var name=fields.name;
         res.end(name);
     });
}