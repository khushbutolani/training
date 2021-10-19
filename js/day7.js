var a,n,b,temp=0;
no=Number(prompt("enter the number"));
document.write("<p><b>original number</b></p><br>"+no);
 b=no;
while(no>0){
a=no%10;
no=parseInt(no/10);
temp=temp*10+a;
       }
document.write("<p><i><br> reverse: </i></p>"+temp);
     
