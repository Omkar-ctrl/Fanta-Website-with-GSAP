var tl= gsap.timeline({scrollTrigger:{

    trigger: ".two",
    start: "0% 95%",
    end: "60% 50%",
    scrub: true,
    

  }})

  var tl2= gsap.timeline({scrollTrigger:{

    trigger: ".three",
    start: "0% 95%",
    end: "30% 50%",
    scrub: true,
   

  }})



  tl2.to("#fanta", {
   
    width:"39%",
    top: "210%",
    left: "30%"
  },"sprite");


  tl2.from("#Sprite",{
    rotate:"-90deg",
    scale:3,
    top: "110%",
    left:"-100%"
    
  },"sprite")

  tl2.from("#Pepsi",{
    rotate:"90deg",
    scale:5,
    top: "110%",
    left:"100%"
    
  },"sprite")




  tl.to("#fanta", {
   
    top: "120%",
    left: "0%",
  },'orange');

  tl.to("#orangecut", {
    top: "150%",
    left: "20%",
  },'orange');

  tl.to("#orange_group", {
    width:"13%",
    top: "160%",
    left: "70%",
  },'orange');

  tl.to("#leaf", {
    width:"13%",
    top: "110%",
    rotate:"210deg",
    left: "85%",
  },'orange');