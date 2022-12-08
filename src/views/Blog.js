
import '../views/Blog.scss'
import useFetch from "../customize/fetch"
import { Link } from 'react-router-dom'

const Blog = () => {
    const url = `https://jsonplaceholder.typicode.com/posts/`
    const { data: dataBlogs, isLoading, isError } = useFetch(url, false)
    let newData = [];


    if (dataBlogs && dataBlogs.length > 0) {
        newData = dataBlogs.slice(0, 9)
    }
    return (
        <>
            <h1>Hello blog</h1>
            <div className="blogs-container">
                {isLoading && <h2>Loading....</h2>}
                {newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">{item.title}</div>
                            <div className="content">{item.body}</div>
                            <button><Link to={`/blog/${item.id}`}>View detail</Link></button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Blog