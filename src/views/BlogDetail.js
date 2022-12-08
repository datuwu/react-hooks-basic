
import { useParams } from "react-router-dom"


const BlogDetail = () => {
    let { id } = useParams()
    return (
        <h1>Blog Detail {id}</h1>
    )
}

export default BlogDetail