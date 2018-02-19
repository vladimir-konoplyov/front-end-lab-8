function decypherPhrase(obj, str) {
  let objReturned = {};
  for (let value in obj) {
    objReturned[obj[value]] = value;
  }
  return cypherPhrase(objReturned, str);
}