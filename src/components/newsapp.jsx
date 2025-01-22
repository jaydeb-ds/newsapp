import style from "./newsapp.module.css"
import './navbar.css';
import { useEffect, useState } from "react";
import Cards from "./cards";
import Loader from "./loader";


function Newsapp() {
    const [isMobile, setIsMobile] = useState(false);
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null)

    const API_Key = "60db46bd9b0543acbcfcfab632c9046a"




    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_Key}`)
        const jsonData = await response.json();
        // console.log(jsonData.articles)
        setNewsData(jsonData.articles);
    }

    const handleInput = (e) => {
        setSearch(e.target.value)
    }


    const userInput = async (e) => {
        setSearch(e.target.value)        
        await getData()
        console.log("target value",e.target.value);
        
        console.log("funtion call",search);
        // window.location.reload()

    }

    useEffect(() => {
        getData()
        console.log("just once");

    },[])

  

    return (<>
        <div className={style.nav_container}>
            <h2 className={style.h1}>Trendy News</h2>

            <nav className={style.navbar}>
                {/* <h1 className={style.logo}>MySite</h1> */}
                <ul className={isMobile ? style.nav_links_mobile : style.nav_links}>
                    {/* <li><button className={style.btn}>Sports</button></li> */}
                    <li>
                        <button onClick={userInput} value="sport" className={style.button}>
                            <span className={style.button_lg}>
                                <span className={style.button_sl}></span>
                                <span className={style.button_text}>Sport</span>
                            </span>
                        </button>
                    </li>

                    <li>
                        <button onClick={userInput} value="politics" className={style.button}>
                            <span className={style.button_lg}>
                                <span className={style.button_sl}></span>
                                <span className={style.button_text}>Politics</span>
                            </span>
                        </button>
                    </li>

                    <li>
                        <button onClick={userInput} value="entertainment" className={style.button}>
                            <span className={style.button_lg}>
                                <span className={style.button_sl}></span>
                                <span className={style.button_text}>Entertainment</span>
                            </span>
                        </button>
                    </li>

                    <li>
                        <button onClick={userInput} value="health" className={style.button}>
                            <span className={style.button_lg}>
                                <span className={style.button_sl}></span>
                                <span className={style.button_text}>Health</span>
                            </span>
                        </button>
                    </li>

                    <li>
                        <button onClick={userInput} value="technology" className={style.button}>
                            <span className={style.button_lg}>
                                <span className={style.button_sl}></span>
                                <span className={style.button_text}>Technology</span>
                            </span>
                        </button>
                    </li>


                </ul>
                <button className={style.mobile_menu_icon} onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <>&#10005;</> : <>&#9776;</>}
                </button>
            </nav>


            <div className={style.input_container}>
                <input onChange={handleInput} placeholder="Search News" value={search} type="text"></input>

                <button onClick={() => { getData() }}>

                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                        >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                            ></path>
                        </svg>
                    </div>


                </button>
            </div>
        </div>

        <div>
           {newsData? <Cards data={newsData} />: <Loader/>} 
        </div>



    </>)
}




export default Newsapp;