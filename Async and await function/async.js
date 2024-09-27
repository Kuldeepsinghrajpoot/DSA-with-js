const firstFunction = async () => {
  let promis = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Student are elible for Bjp voits \n");
    }, 1000);
  });

  let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("student are eligble for congres \n");
    }, 3000);
  });

  console.log("Fucntion fitst for bjp is running");
  let a = await promis;
  console.log("funciton fits for bjp is finished\n\n\n\n\n");
  console.log("function second for congress is running");
  let b = await secondPromise;
  console.log("function second for congress is finished");

  console.log(a, b);
};

const newFunction = () => {
  console.log("This is a second funtion and running ringt now ................");
};

firstFunction();
newFunction();
