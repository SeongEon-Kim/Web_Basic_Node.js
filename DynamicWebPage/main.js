var http = require('http');
var fs = require('fs');
var url = require('url'); //url 모듈 사용할게요
const { off } = require('process');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    console.log(url.parse(_url, true)); // 모르면 찍어서 확인 
    if (pathname == '/'){
      // home 이라면 queryData.id -> undefined
      if(queryData.id == undefined){
        var title = 'Welcome';
        var description = 'Hello, Node.js!';
        
        var template =`
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ol>
          <h2> ${title}</h2>
          <p>
          ${description}
          </p>
        </body>
        </html>
        `;
        response.writeHead(200);
        // 보여줘~
        response.end(template);
      }
      else{
        fs.readFile(`../Data/${queryData.id}`, 'utf-8', function(err, description){
          var title = queryData.id
          console.log(queryData.id);
          var template =`
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ol>
          <h2> ${title}</h2>
          <p>
          ${description}
          </p>
        </body>
        </html>
        `;
        response.writeHead(200);
        // 보여줘~
        response.end(template);
        });
      }
      
    }
    else{
      response.writeHead(404);
      response.end('Not Found');
    }
    // if(_url == '/'){
    //     title = 'Welcome';
    // }
    // if(_url == '/favicon.ico'){
    //     return response.writeHead(404);
    // }

});
app.listen(3000);