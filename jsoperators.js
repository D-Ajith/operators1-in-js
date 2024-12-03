var x=10;
x=40;
x+=60;
console.log(x);

var a=20;
a=70;
a-=30;
console.log(a);

var d=50;
d=d/10;
d/=5;
console.log(d);

var e=5;
e=e%3;
console.log(e);

var f=[1,2,3]
f[4]="Ajith";
f[10]=true;
f[2]=false;
console.log(f);
console.log(f.length);
console.log(f[f.length-1]);
console.log(f[4]);

var obj={name:"Ajith", place:"vizag",Education:"btech"}
obj.clg="Raghu";
obj.state="Ap";
console.log(obj);
console.log(obj.clg);
console.log(obj.state);
console.log(obj.place);

var p=10;
var q=20;
console.log(p<q && q>p);
console.log(p<q && q<p);
console.log(p<q || q>p);
console.log(p<q || q>p);
console.log(p>q || q<p);
console.log(!p);
console.log(!!p);

var m=40;
var n=90;
var o=0;
console.log(m && n);
console.log(n && m);
console.log(o&&m);

if(!!"vamsi"){
       alert("Hello good morning")
}else{
    alert("Hello see you tmrw")
}

if(!"vamsi"){
    alert("Hello good morning")
}else{
 alert("Hello see you tmrw")
}

if([]&&[]){
    alert("Hello good morning")
}else{
 alert("Hello see you tmrw")
}

if({}&&{}){
    alert("Hello good morning")
}else{
 alert("Hello see you tmrw")
}

if([1,2,3]&&["vamsi"]){
    alert("Hello good morning")
}else{
 alert("Hello see you tmrw")
}

if([]&&undefined){
    alert("Hello good morning")
}else{
 alert("Hello see you tmrw")
}

if([]&&null){
    alert("Hello good morning")
}else{
 alert("Hello see you tmrw")
}

if(null&&null){
    alert("Hello good morning")
}else{
 alert("Hello see you tmrw")
}
