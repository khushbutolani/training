var salary=[10,20,30,40,50];
for(var i=0;i<salary.length;i++){
    document.write(salary[i]+"<br>");
}
for(var salarys of salary){
     document.write(salarys+"<br>");
    
}
salary.forEach(sal=>document.write(sal))


