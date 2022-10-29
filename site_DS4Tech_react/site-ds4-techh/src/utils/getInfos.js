
async function getInfos(idlang, page) {
   let response = await fetch(`http://localhost:3001/${idlang}/${page}`);
  // let response = await fetch(`http://localhost:3000/api/${idlang}/${page}.json`);
  let data = await response.json();
  return data;
}

export default getInfos;