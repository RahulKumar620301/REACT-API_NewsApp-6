import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"


export default function Header() {
  const category = ['general', 'world', 'nation', 'business', 'technology', 'entertainment', 'sports', 'science', 'health'];
  const [search,setSearch]=useState(' ')
  const navigate = useNavigate();
  function handleSearch(e){
    e.preventDefault();
    navigate('/search/'+search)
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {
        category.map((item)=>{
          return <li className="nav-item" key={item}>
          <Link className="nav-link text-capitalize" to={"/"+item}>{item}</Link>
        </li> 
        })} 
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
        onChange={(e)=>setSearch(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
