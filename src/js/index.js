// https://www.food2fork.com/api/search
// 6dfafa8e00e40f71b4368d9dd62f9cee

import axios from 'axios';

async function getResults(query) {
  const key = "6dfafa8e00e40f71b4368d9dd62f9cee";
  try {
    const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`)
    const recipes = res.data.recipes;
    console.log(res);
  } catch (error) {
    alert(error)
  }
}

getResults('pizza');