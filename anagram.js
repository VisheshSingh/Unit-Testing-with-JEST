function anagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
  return str
    .toLowerCase()
    .replace(/[^\w]/g, "")
    .split("")
    .sort()
    .join("");
}

module.exports = anagram;
