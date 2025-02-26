import NewsBoard from "./NewsBoard"
import { useEffect, useRef, useState } from "react"
import "./style.css"
import Logo from "./logo"


const Navbar = ({ setSearch }) => {

    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    console.log(input)



    return (
        <>
            {/* ___________-----NAV BAR----__________ */}

                    {/* -----logo---*/}

            <nav className="navbar navbar-expand-lg " style={{ "backgroundColor": "#e3f2fd" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><Logo/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* -----drowp Down----*/}

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle drop_down" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu">
                                    <li><div className="dropdown-item drop" onClick={()=>setSearch("technology")}>Technology</div></li>
                                    <li><div className="dropdown-item drop" onClick={()=>setSearch("sports")}>Sports</div></li>
                                    <li><div className="dropdown-item drop" onClick={()=>setSearch("business")}>Bussiness</div></li>
                                    <li><div className="dropdown-item drop" onClick={()=>setSearch("politices")}> Politices</div></li>
                                    <li><div className="dropdown-item drop" onClick={()=>setSearch("health")}>Health</div></li>
                                    <li><div className="dropdown-item drop" onClick={()=>setSearch("entertainment")}>Entertainment</div></li>
                                </ul>
                            </li>
                           
                        </ul>

                        {/* _______search bar_________ */}
                        
                        <div className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search News" aria-label="Search" onChange={handleInput}  />
                            <button className="btn btn-outline-success" onClick={() => setSearch(input)}>Search</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar