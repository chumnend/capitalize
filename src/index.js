module.exports = (str, opt = 'all') => {
  if (opt === 'all') {
    return str.toUpperCase();
  } else if (opt === 'first') {
    return str[0].toUpperCase() + str.slice(1);
  } else if (opt === 'words') {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      words[i] = word[0].toUpperCase() + word.slice(1);
    }
    return words.join(' ');
  }

  throw new Error(
    "invalid options for capitalize. use 'all', 'first' or 'words'",
  );
};
