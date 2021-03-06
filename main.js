/*******************
 * YOUR CODE HERE! *
 *******************/
function yell(str){
  let exclaim= "!"

  return str +exclaim
    }

function getFirstCharacter(str){
  return str[0]
}

function getLastCharacter(str){
  
  return str[str.length -1]
}

function getOneCharacter(str, index){
 return str[index]
}

function getTwoCharacters(str1,index1,index2){
  return str1[index1] + str1[index2]
}

function makeCapitalized(str){
return str.toUpperCase()
}

function yellLouder(str){
  let exclaimed= "!!!"
  return str.toUpperCase()+exclaimed
}

function getInitials(str){
  return str[0] + "." + str[str.indexOf(" ") +1] + "."
}

/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
