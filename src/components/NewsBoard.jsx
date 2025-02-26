import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"
import Loader from "./loader/loader"


const NewsBoard = ({ search }) => {
  const [artical, setArtical] = useState([])

  useEffect(() => {
    let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${import.meta.env.VITE_API_KEY}`
    fetch(url).then(res => res.json()).then(data => setArtical(data.articles))
  }, [search])

  return (<>

    <h2 className="text-center">Latest <span className="badge text-bg-danger">News</span></h2>
  
    {/* ________________NEWS BOARD_____________ */}

    <div style={{ width: "99%", display: "flex", flexWrap: "wrap", justifyContent: "space-around" }} >
      {artical.map((item, index) => {
        return (
          <NewsItem key={index} title={item.title} description={item.description} imgSrc={item.urlToImage} readmore={item.url} />
        )
      })}
    </div>

    {/* ________________LOADER_____________ */}
    {
      artical.length === 0 && <Loader />      
    }

  </>
  )
}

export default NewsBoard