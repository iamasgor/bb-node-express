bb.route ("/home", function() {
  console.log("Home");
}, "A");

bb.route ("/about", function(){
  console.log("About");
}, "templates/about.html");

bb.route ("/", function(){
  return {
    welcome:"This is homepage",
    sitename:"BB framework"
  }
}, "templates/home.html");

bb.init(document.querySelector('.container'));
