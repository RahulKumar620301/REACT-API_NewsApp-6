import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import NewsInfo from "./NewsInfo";


export default function News() {
  const apikey = "3ebd247785f23f0a71715cd6c65fa24d";
  const {category}=useParams();
  const [articles,setArticles]=useState([{publishedAt:''}])
  useEffect(()=>{
    const url = "https://gnews.io/api/v4/top-headlines?lang=en&max=9&category="+category+"&apikey=" + apikey;
    axios.get(url).then((res)=>{console.log(res.data.articles);
    setArticles(res.data.articles)
    })
  },[category])
  return (
    <>
    <NewsInfo articles={articles}/>
    </>
  )
}
