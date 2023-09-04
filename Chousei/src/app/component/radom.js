const generateRandomString = (length) => {
  const characters = "ABCDDEFGHIJKLMNWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  console.log(randomString);
};

const min = 30;
const max = 50;

let len = Math.floor(Math.random() * (max - min + 1)) + min;
generateRandomString(len);
