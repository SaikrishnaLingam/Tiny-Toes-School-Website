import React from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from './BlogData'; 

const BlogPage = () => {
    const { id } = useParams(); //Get the id from URL params
    const blogId = parseInt(id); 
    const blog = blogData.find(blog => blog.id === blogId); // Find the blog with the matching id
    console.log(blog);
    //if blog is not found
    if (!blog) {
        return <h1 className='text-center m-10 text-5xl bg-red-400 p-10'>Blog Not Found</h1>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg overflow-hidden">
                <img src={blog.pic} alt={blog.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h2 className="text-5xl font-bold mb-2 pb-4">{blog.title}</h2>
                    <p className="text-sm mb-4">{blog.summary}</p>
                    <p className="text-sm mb-4">{blog.text}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
