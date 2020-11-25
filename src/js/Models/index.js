//this is the searchModel
import { APIOptions } from "../utils";
export default class Model{

async fetchRepos() {
    return new Promise(async (resolve, reject) => {
    fetch(`https://api.github.com/graphql`, APIOptions)
        .then(res =>res.json())
        .then(res=>{
            // console.log(res.data.viewer.repositories.nodes)
        this.result = res.data.viewer.repositories.nodes;
        this.totalCount = res.data.viewer.repositories.totalCount
        resolve()
        }).catch(err=>{
            reject()
        })
    })
    }
}

// .then(res => console.log(res.data))