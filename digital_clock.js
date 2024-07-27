async function doSomething() {
  const time = new Date();

  try {
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
