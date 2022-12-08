
import { useParams, useHistory } from "react-router-dom"


const BlogDetail = () => {
    let { id } = useParams()
    const history = useHistory()
    const handleBackData = () => {
        history.push('/blog');
    }
    return (
        <>
            <div><span onClick={() => handleBackData()}>&lt;-- Back</span></div>
            <h1>Blog Detail {id}</h1>
        </>

    )
}

export default BlogDetail