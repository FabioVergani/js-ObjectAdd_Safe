//
['Extensible','Writable','Object'].forEach(
function(w){
 var t=w.toLowerCase();
 Error['isNot'+w]=function(a,b){throw new TypeError(a+'\tisn\'t '+t+' (as expected).')};
});
//
(function(O,n){
var P=O.prototype,Odp=O.defineProperty,PhOP=P.hasOwnProperty;
if(!O[n]){
 O[n]=function(x){
	if(O(x)!==x){
	 TypeError.isNotAnObject(x);
	}else{
	 var r=0,k='k',p=k,f=PhOP;
	 do{p+=k}while(f.call(x,p));x[p]=true;r=f.call(x,p);delete x[p];
	 return r;
	};
 };
};
Odp(P,'add',{
value:function(p,v,m,k){
 var r=0,e=this,set=function(n,s){
	var a=0,b=1,c=1;
	if(m && m.length){a=m[0];b=m[1];c=m[2]};
	Odp(e,p,{value:v,enumerable:a,configurable:b,writable:c});r=n;console.log(n,s)
 };
 console.log(e);
 if(p && v!=undefined){
	if(O.isExtensible(e)){
	 var q=e[p],t=(' property ‘'+p+'’ in ‘'+e+'’ ');
	 if(q){//(p in e)
		if(k){//overwrite(try)
	 	 if(q!==v){
			e[p]=v;
			if(q!=e[p]){
			 set(3,'overwritten'+t);
			}else{
			 r=-2;Error.isNotWritable(t);
			};
		 }else{
			console.info(t+'is equal to:'+p);
			set(2,'try configure'+t+'with option:'+m);
		 };
		}else{
		 r=-1;console.warn(t+'already exist, and is '+(PhOP.call(e,p)?'own':'inerithed')+'.');
		};
	 }else{
		set(1,'added'+t);
	 };
	}else{
	 Error.isNotExtensible(e);
	};
 };
 e.add.success=r;
 console.log(r);
 return e
},enumerable:0,configurable:0,writable:0})
})(Object,'isExtensible');
//





/*
function Dummy(){};
var o1= new String("aaa").add("x",Dummy).add("x",Dummy,[1,1,1],1).add("trim",Dummy,[0,0,0]);
console.log(o1);
var o2= new String("bbb").add("c",Dummy).add("d",Dummy,[1,1,1],1).add("e",Dummy,[0,0,0]).add("e",Dummy,[0,0,0]);
console.log(o2);
//console.log(o2.add.success);
*/
