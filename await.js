//! Await function

// const myLoader = () => {
//   const success = true;
//   if (success) {
//     resolve(0.3); //? Promise data
//   } else {
//     rejected(0.7);
//   }
// };

const myLoader2 = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();

    if (success <= 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};
