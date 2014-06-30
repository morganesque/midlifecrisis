var leaves = now-me.born;

var years = Math.floor(leaves/(1000*60*60*24*365));       
leaves = age - (years * 1000*60*60*24*365);                    

var weeks = Math.floor(leaves/(1000*60*60*24*7));
leaves = leaves - (weeks * 1000*60*60*24*7);            

var days = Math.floor(leaves/(1000*60*60*24));
leaves = leaves - (days * 1000*60*60*24); 

var hours = Math.floor(leaves/(1000*60*60));
leaves = leaves - (hours * 1000*60*60);            

var minutes = Math.floor(leaves/(1000*60));
leaves = leaves - (minutes * 1000*60);            

console.log(years+" years",weeks+" weeks",days+" days");   