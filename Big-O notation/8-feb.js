//
//  Big-O notation is the language we use for talking about
//  How long an algorithm takes to run

const array = ['dory', 'nemo'];
const large = Array(10000).fill('nemo');

const findingNemo = function (array) {
  //  Save start time for execution
  let t0 = performance.now();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo');
    }
  }
  //  Save end time execution
  let t1 = performance.now();

  //  Now get final execution time by subtracting end time from start time
  console.log(`Found Nemo in ${t1 - t0} milliseconds`);
};

findingNemo(large);
