
import '../views/Blog.scss'
import useFetch from "../customize/fetch"
import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import BlogAdd from './BlogAdd'

const Blog = () => {

    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const url = `https://jsonplaceholder.typicode.com/posts/`
    const { data: dataBlogs, isLoading, isError } = useFetch(url, false)


    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {
            let newDataReturn = dataBlogs.slice(0, 9)
            setNewData(newDataReturn)
        }
    }, [dataBlogs])

    const handleAddNew = (blog) => {
        let data = newData;
        data.unshift(blog)

        setShow(false)
        setNewData(data)

        console.log('Handle add new ', newData);
    }

    const deleteBlog = (id) => {
        let data = newData;
        data = data.filter(item => item.id !== id)
        setNewData(data)
    }

    return (
        <>
            <Button variant="primary" className='my-3' onClick={handleShow}>
                Add new blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BlogAdd handleAddNew={handleAddNew} />
                </Modal.Body>

            </Modal>

            <div className="blogs-container">
                {isLoading && <div style={{ textAlign: 'center !important', width: '100%' }} >Loading....</div>}
                {newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">
                                <span>{item.title}</span>
                                <span className='close-btn'
                                    onClick={() => deleteBlog(item.id)}>X</span>
                            </div>
                            <div className="content">{item.body}</div>
                            <div className='button-holder'>
                                <button><Link to={`/blog/${item.id}`}>View detail</Link></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Blog
