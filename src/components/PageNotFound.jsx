function PageNotFound() {
    return (
        <div>
            <img className="error" src={require("../img/404.png")} alt="A rain cloud over an empty bucket and the words 'Oh no! This bucket is empty! 404"/>
            <img className="home" src={require("../img/404-home.png")} alt="A rainbow that says 'take me home'."/>
        </div>
    )
}

export default PageNotFound;