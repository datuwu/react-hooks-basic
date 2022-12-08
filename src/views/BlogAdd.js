import './Blog.scss'
import { useState } from 'react'
const BlogAdd = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmitButton = () => {
        if (!title) {
            alert('empty title')
            return
        }
        if (!content) {
            alert('empty content')
            return
        }

        console.log('check data before send ', title, content);
    }

    return (
        <div className="add-new-container">
            <div className="title-add-new">Add new blog</div>
            <div className='inputs-data'>
                <label>Title </label>
                <input type={'text'}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='inputs-data'>
                <label>Content </label>
                <input type={'text'}
                    value={content}
                    onChange={(e) => setContent(e.target.value)} />
            </div>
            <button className='btn-add-new' onClick={handleSubmitButton}>Submit</button>
        </div >
    )
}

export default BlogAdd