let currentInstance = 1;
const alphanumericCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"; // ew

const incrementCurrentInstance = () => {
  currentInstance = currentInstance > 20 ? 1 : currentInstance++;
};

const getRandomId = characterSet =>
  Array(8)
    .fill("A")
    .map(
      characterSet.charAt(Math.floor(Math.random() * (characterSet.length + 1)))
    )
	.join("");

const getUrl = () => `front${currentInstance}.omegle.com`;
