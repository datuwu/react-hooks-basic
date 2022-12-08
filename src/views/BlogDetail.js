
import { useParams, useHistory } from "react-router-dom"
import useFetch from "../customize/fetch"
import '../views/Blog.scss'

const BlogDetail = () => {
    let { id } = useParams()
    const history = useHistory()
    const handleBackData = () => {
        history.push('/blog');
    }

    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const { isLoading, isError, data: blogDetailData } = useFetch(url, false)

    console.log(blogDetailData);
    return (
        <>


            <div><span onClick={() => handleBackData()}>&lt;-- Back</span></div>

            {isLoading && <div style={{ textAlign: 'center !important', width: '100%' }} >Loading....</div>}
            {!isLoading && blogDetailData &&
                <div className="blog-detail">
                    <div className="title">
                        Blog ID: {id} - {blogDetailData.title}
                    </div>
                    <div className="content">
                        {blogDetailData.body}
                    </div>
                </div>
            }
        </>
    )
}

export default BlogDetail