const meaningfulWord = 'Ajouter"';

let charactersToRemove = [
  ":",
  "`",
  "_",
  "]",
  "]",
  "(",
  ")",
  "{",
  "}",
  ",",
  "\\",
  `\\`,
  "*",
  "**",
  `"`,
  `""`,
  "“",
  "…",
  "→",
  "–",
  "»*",
  "»",
  "«",
  "©",
  "|",
  "`",
];
charactersToRemove.forEach((char) => {
  if (meaningfulWord.includes(char)) {
    const cleanedWord = meaningfulWord.replace(char, "");
    console.log(`'${meaningfulWord}' became "${cleanedWord}"`);
  }
  else {
    console.log(`No ${char} in ${meaningfulWord}`);
  }
});
