function quantity(){
    let select = document.getElementById('years');
    for (var i = 0; i < 100; i++){
    select.options[select.options.length] = new Option(i+1, i);
  }
}
function calculate(){
        let p=document.getElementById('input1').value;
        let t=document.getElementById('years').value ;
        let r=document.getElementById('range1').value;

        if( p == "" || p <= 0) alert("enter a positive number")

        else{

        let  SI=p*(r/100)*t + p*(r/100);

        document.getElementById("p1").innerHTML = "if you deposite " + p;
        document.getElementById("p2").innerHTML = "at an intersest rate of " + r;
        document.getElementById("p3").innerHTML = "you will recieve an ammount of " + SI;
        document.getElementById("p4").innerHTML = "in the year " + (parseInt(t) + 1  + new Date().getFullYear());

        }
}

