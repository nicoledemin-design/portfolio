(function(){
  var map={
    home:'/',exp:'/experience',about:'/about',contact:'/contact',
    onco:'/case-studies/kranus-health',
    pg:'/case-studies/purpose-green',
    el:'/case-studies/expertlead',
    'pg-nav':'/case-studies/purpose-green/nav',
    'pg-ref':'/case-studies/purpose-green/references',
    'pg-camp':'/case-studies/purpose-green/campaign'
  };
  history.replaceState({v:'home'},'/','/');
  var _goP=window.goP;
  window.goP=function(id){
    history.pushState({v:id},'',map[id]||'/'+id);
    _goP(id);
  };
  var _goC=window.goC;
  window.goC=function(id){
    history.pushState({c:id},'',map[id]||'/case-studies/'+id);
    _goC(id);
  };
  window.addEventListener('popstate',function(e){
    var s=e.state;if(!s)return;
    if(s.c) window.goC(s.c);
    else if(s.v) window.goP(s.v);
  });
})();
