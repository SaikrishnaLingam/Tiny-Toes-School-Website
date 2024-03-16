import React from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from './BlogData'; 
import withScrollAnimation from '../withScrollAnimation';

const BlogPage = () => {
    const { id } = useParams(); // Get the id from URL params
    const blogId = parseInt(id); 
    const blog = blogData.find(blog => blog.id === blogId); // Find the blog with the matching id

    // If blog is not found
    if (!blog) {
        return <h1 className='text-center m-10 text-5xl bg-red-400 p-10'>Blog Not Found</h1>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg overflow-hidden p-2 md:p-6 lg:p-10">
                <img src={blog.pic} alt={blog.title} className="w-full h-96 object-cover" />
                <div className=" md:p-10 lg:p-20">
                    <h2 className="text-5xl font-bold mb-2 pb-4">{blog.title}</h2>
                    <p className="text-lg mb-4">{blog.summary}</p>
                    {/* Render the formatted text */}
                    <div dangerouslySetInnerHTML={{ __html: blog.text }} className='text-lg'></div>
                </div>
            </div>
        </div>
    );
};

export default withScrollAnimation(BlogPage);
