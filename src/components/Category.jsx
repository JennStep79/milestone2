import anythinggoes from "../img/anythinggoes.png";
import entertainme from "../img/entertainme.png";
import itsnevertoolate from "../img/itsnevertoolate.png";
import letsgetwild from "../img/letsgetwild.png";
import xmarksthespot from "../img/xmarksthespot.png";
import yummy from "../img/yummy.png";

function Category(props) {
    return (
        <div>
            <img src={props.image} alt={props.name}/>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Category;