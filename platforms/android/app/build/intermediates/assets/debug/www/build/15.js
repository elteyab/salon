webpackJsonp([15],{252:function(l,n,a){"use strict";function u(l){return t._19(0,[t._16(402653184,1,{mapContainer:0}),(l()(),t.Z(1,0,null,null,10,"ion-header",[],null,null,null,null,null)),t.Y(2,16384,null,0,h.a,[f.a,t.j,t.z,[2,v.a]],null,null),(l()(),t._18(-1,null,["\n  "])),(l()(),t.Z(4,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,M.b,M.a)),t.Y(5,49152,null,0,y.a,[C.a,[2,v.a],[2,j.a],f.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t._18(-1,3,["\n    "])),(l()(),t.Z(7,0,null,3,2,"ion-title",[],null,null,null,L.b,L.a)),t.Y(8,49152,null,0,Y.a,[f.a,t.j,t.z,[2,Z.a],[2,y.a]],null,null),(l()(),t._18(-1,0,["Salons in Sudan"])),(l()(),t._18(-1,3,["\n  "])),(l()(),t._18(-1,null,["\n"])),(l()(),t._18(-1,null,["\n\n"])),(l()(),t.Z(13,0,null,null,4,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,A.b,A.a)),t.Y(14,4374528,null,0,z.a,[f.a,w.a,P.a,t.j,t.z,C.a,q.a,t.u,[2,v.a],[2,j.a]],null,null),(l()(),t._18(-1,1,["\n  "])),(l()(),t.Z(16,0,[[1,0],["map",1]],1,0,"div",[["id","map"]],null,null,null,null,null)),(l()(),t._18(-1,1,["\n"])),(l()(),t._18(-1,null,["\n"]))],function(l,n){l(n,5,0,"primary")},function(l,n){l(n,4,0,t._11(n,5)._hidden,t._11(n,5)._sbPadding);l(n,13,0,t._11(n,14).statusbarPadding,t._11(n,14)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var t=a(0),o=(a(3),a(74),a(40)),s=a(132),e=function(){function l(l,n,a,u){this.navCtrl=l,this.navParams=n,this.geolocation=a,this.http=u,this.museumList=[],this.museumList=n.get("museumList"),console.log(this.museumList)}return l.prototype.ionViewDidLoad=function(){this.displayGoogleMap(),this.getMarkers()},l.prototype.displayGoogleMap=function(){var l={center:new google.maps.LatLng(15.6117993,32.2194934),disableDefaultUI:!0,zoom:4,mapTypeId:google.maps.MapTypeId.ROADMAP};this.map=new google.maps.Map(this.mapContainer.nativeElement,l)},l.prototype.getMarkers=function(){for(var l=0;l<this.museumList.length;l++)console.log(this.museumList[l]),this.addMarkersToMap(this.museumList[l])},l.prototype.addMarkersToMap=function(l){console.log("Latitude :",l.lat);var n=new google.maps.LatLng(l.lat,l.lng);new google.maps.Marker({position:n,title:l.name}).setMap(this.map)},l}(),i=function(){return function(){}}(),r=a(199),c=a(200),b=a(201),d=a(202),p=a(203),g=a(204),_=a(205),m=a(206),k=a(207),h=a(75),f=a(1),v=a(5),M=a(267),y=a(34),C=a(8),j=a(20),L=a(208),Y=a(54),Z=a(35),A=a(209),z=a(21),w=a(4),P=a(9),q=a(24),T=a(10),x=t.X({encapsulation:2,styles:[],data:{}}),I=t.V("page-all-salon",e,function(l){return t._19(0,[(l()(),t.Z(0,0,null,null,1,"page-all-salon",[],null,null,null,u,x)),t.Y(1,49152,null,0,e,[j.a,T.a,s.a,o.e],null,null)],null,null)},{},{},[]),S=a(12),D=a(16),B=a(120),G=a(38);a.d(n,"AllSalonPageModuleNgFactory",function(){return O});var O=t.W(i,[],function(l){return t._7([t._8(512,t.i,t.S,[[8,[r.a,c.a,b.a,d.a,p.a,g.a,_.a,m.a,k.a,I]],[3,t.i],t.s]),t._8(4608,S.k,S.j,[t.r,[2,S.s]]),t._8(4608,D.o,D.o,[]),t._8(4608,D.c,D.c,[]),t._8(512,S.b,S.b,[]),t._8(512,D.n,D.n,[]),t._8(512,D.d,D.d,[]),t._8(512,D.l,D.l,[]),t._8(512,B.a,B.a,[]),t._8(512,B.b,B.b,[]),t._8(512,i,i,[]),t._8(256,G.a,e,[])])})},267:function(l,n,a){"use strict";function u(l){return t._19(0,[(l()(),t.Z(0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),t.Y(1,278528,null,0,o.g,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t.Z(2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,a){var u=!0;if("click"===n){u=!1!==l.component.backButtonClick(a)&&u}return u},s.b,s.a)),t.Y(3,278528,null,0,o.g,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Y(4,1097728,null,0,e.a,[[8,"bar-button"],i.a,t.j,t.z],null,null),(l()(),t.Z(5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(6,278528,null,0,o.g,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Y(7,147456,null,0,r.a,[i.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t.Z(8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),t.Y(9,278528,null,0,o.g,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t._18(10,null,["",""])),t._10(null,0),t._10(null,1),t._10(null,2),(l()(),t.Z(14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),t.Y(15,278528,null,0,o.g,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._10(null,3)],function(l,n){var a=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+a._mode);l(n,3,0,"back-button","back-button-"+a._mode);l(n,6,0,"back-button-icon","back-button-icon-"+a._mode);l(n,7,0,a._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+a._mode);l(n,15,0,"toolbar-content","toolbar-content-"+a._mode)},function(l,n){var a=n.component;l(n,2,0,a._hideBb);l(n,5,0,t._11(n,7)._hidden);l(n,10,0,a._backText)})}a.d(n,"a",function(){return c}),n.b=u;var t=a(0),o=a(12),s=a(44),e=a(19),i=a(1),r=a(37),c=(a(5),a(20),t.X({encapsulation:2,styles:[],data:{}}))}});