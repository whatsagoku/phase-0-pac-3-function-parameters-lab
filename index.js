function introduction(name) {
    return `Hi, my name is ${name}.`
}
function introductionWithLanguage(name, language) {
    return `Hello, my name is ${name} and I am learning ${language}.`;
  }
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hello, my name is ${name} and I am learning ${language}.`;
  }
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning in ${language}.`;
  }
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  introductionWithLanguageOptional("Gracie"); // returns "Hi, my name is Gracie and I am learning to program in JavaScript."