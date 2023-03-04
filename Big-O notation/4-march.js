     // ---- What is Recursion? ---- //
      //  Function that calls itself 



// --------- Base condition in Recursion ----------- //
 // Condition where our Recursion will stop making new calls //


 function printMessageFiveTimes() {
    message()
  }
  
  function message() {
    console.log('Hello world')
    message1()
  }
  
  function message1() {
    console.log('Hello world')
    message2()
  }
  
  function message2() {
    console.log('Hello world')
    message3()
  }
  
  function message3() {
    console.log('Hello world')
    message4()
  }
  
  function message4() {
    console.log('Hello world')
  }
  printMessageFiveTimes()
  
           // ------------- With Loop --------------- //
  
  function loopPrint(n) {
    for(let i = 0; i < n; i++) {
      console.log(`Hello world --- Loop ${i+1}`)
    }
  }
  
  loopPrint(5)