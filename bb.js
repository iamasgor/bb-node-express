var bb = {};
bb.routes = [];
bb.views = [];
bb.controllers = [];

bb.route = function(route,controller,view) {
  if(route && controller && view) {
    bb.routes.push(route);
    bb.controllers.push(controller);
    bb.views.push(view);
  } else {
    console.error("Rout not define");
  }
}

bb.http={
  get:function(url, success, fail){
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
      if (xhr.status >= 400){
         fail(xhr.response);
      }
      else{
        success(xhr.response);
      }
    });
    xhr.open('GET', url);
    xhr.send();
  },
  post:function(url,data, success, fail){
    xhr.addEventListener('load', function() {

    });
    xhr.open('POST', url);
    xhr.send(data);
  }
}

bb.bootstrap = function(area) {
  var hash = window.location.hash.substr(1);
  if (hash == "") {hash = "/"};
  //match rout`
  for (i=0; i<bb.routes.length; i++){
    if (hash.match(bb.routes[i])) {
      bb.controllers[i]();
      bb.http.get(bb.views[i],function(d){
        //area.innerHTML = d;
        var template = Handlebars.compile(d);
        var context = bb.controllers[i]();
        area.innerHTML = template(context);
      },function(e) {
        console.log(e);
        throw new Error('Template loding failed');
      })
      break;
    }
  }
}
bb.init = function(area){
  bb.area=area;
  bb.bootstrap(bb.area);
}
//trigger o window hash change
window.addEventListener('hashchange',function(){
  bb.bootstrap(bb.area);
});
