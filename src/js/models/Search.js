import axios from 'axios';
import { key } from '../config';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`)
      console.log('res', res)
      
      if(res.data.error && res.data.error === "limit") {
        throw "ERROR: rest API limit reached";
      }

      this.result = res.data.recipes;
    } catch (error) {
      alert(error)
    }
  }

}