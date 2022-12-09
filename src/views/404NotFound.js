
import { useHistory } from "react-router-dom"

const NotFound = () => {
    const history = useHistory()
    const goToHomepage = () => {
        history.push('/')
    }
    return (
        <div className="not-found-container">
            <h4>This page isn't availiable</h4>
            <h5>The link may be broken, or the page may have been removed. Check to see if the link you're trying to open is correct.</h5>
            <button className="btn btn-primary"
                onClick={goToHomepage}>Go to homepage</button>
        </div>
    )
}

export default NotFound