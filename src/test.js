import 'babel-polyfill';
let sleep = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`sleep ${time} ms`);
    }, time);
  });
};

let start = async () => {
    console.log('start');
  let result = await sleep(2000);
  console.log(result);
    console.log('end');
};

start();