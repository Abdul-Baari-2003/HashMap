import { HashMap } from "./HashMap.js";    

const map = HashMap();

map.set("name", "Abdul");
map.set("age", 21);
map.set("language", "JavaScript");


console.log(map.get("name"));      
console.log(map.get("age"));      
console.log(map.get("language"));  
console.log(map.get("city"));      


console.log(map.has("age"));      
console.log(map.has("city"));    


console.log(map.remove("age"));   
console.log(map.get("age"));      


console.log(map.keys());    
console.log(map.values()); 
console.log(map.entries()); 


console.log(map.length());  


map.clear();
console.log(map.length()); 