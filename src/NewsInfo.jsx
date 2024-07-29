

export default function NewsInfo({articles}) {
  return (
    <div className='container'>
    <div className="row">
      {articles.map((articles,index)=>(
        <div className="col-md-4" key={index}>
        <div className="card">
            <img src={articles.image} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{articles.title}</h5>
            <p className="card-text">{articles.description}</p>
            <p className="card-subtile">Published at: {articles.publishedAt.slice(0,10)}</p>
            <a href={articles.url} target="blank" className="btn btn-primary">Read Full News</a>
        </div>
        </div>
        
        </div>
        ))}
    </div>
    </div>
  )
}
