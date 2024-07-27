async function doSomething() {
  try {
    const time = new Date();
    console.log(`Digital Clock: ${time}`);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    })
      .then((resolve) => {
        resolve = time;
        console.log(resolve);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        console.log("Finally");
      });
    doSomething();
  } catch (error) {
    console.log(error);
  }
}
doSomething();
