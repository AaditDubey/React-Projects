export const mockSubmit = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.gender != "Third party") {
        resolve(
          `Congo ${data.name} u  are not a chakka and you will get a/an ${data.opportunity}`
        );
      } else {
        reject("Hatt chakke");
      }
    }, 1000);
  });
};
