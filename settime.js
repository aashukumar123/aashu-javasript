//setTimeout('console.log("hii")');//when type string settime out convert into code then print
//setTimeout('console.log("hii")',2000);
//setTimeout('console.log("hii")',2000);
//setTimeout('console.log("hii-1")',3000);
//setTimeout('console.log("hii-2")',4000);

//const timer1=setTimeout('console.log("hii")',2000);
//const timer2=setTimeout('console.log("hii")',2000);
//const timer3=setTimeout('console.log("hii-1")',10000);
//const timer4=setTimeout('console.log("hii-2")',4000);
//clearTimeout(timer1)
//clearTimeout(timer2)
//clearInterval(timer3)

//const timer1=setTimeout('console.log("hii")',2000);
//const timer2=setTimeout('console.log("hii")',2000);
//const timer3=setTimeout('console.log("hii-1")',3000);
//const timer4=setTimeout(a,4000);//this is a higher order function because a() is not user dirctly it is used by settimeout
//function a()
//{
  //  console.log("hii");
//}
   
const timer1=setInterval('console.log("hii")')//runing infanite time(hii) when we use cleartimeout

//clearTimeout(timer1)
setTimeout(function()
{
   console.log("hii");
},3000)
