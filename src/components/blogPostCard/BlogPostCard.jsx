import React, { useContext } from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate, Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode, getAllBlog } = context;

  const navigate = useNavigate();

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl ">

          {/* Main Content */}
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {getAllBlog.length > 0 ? (
              <>
                {getAllBlog.map((item) => {
                  const { thumbnail, id, date, blogs } = item;
                  return (
                    <div className="p-4 md:w-1/3" key={id}>
                      <div
                        style={{
                          background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white',
                          borderBottom: mode === 'dark' 
                            ? '4px solid rgb(226, 232, 240)' 
                            : '4px solid rgb(30, 41, 59)',
                        }}
                        className={`h-full shadow-lg hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                        ${mode === 'dark' ? 'shadow-gray-700' : 'shadow-xl'} 
                        rounded-xl overflow-hidden`}
                      >
                        {/* Blog Thumbnail */}
                        <img 
                          onClick={() => navigate(`/bloginfo/${id}`)} 
                          className="w-full" 
                          src={thumbnail} 
                          alt="blog" 
                        />

                        {/* Top Items */}
                        <div className="p-6">
                          {/* Blog Date */}
                          <h2 
                            className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" 
                            style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}
                          >
                            {date}
                          </h2>

                          {/* Blog Title */}
                          <h1 
                            className="title-font text-lg font-bold text-gray-900 mb-3" 
                            style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}
                          >
                            {blogs.title}
                          </h1>

                          {/* Blog Description */}
                          <p 
                            className="leading-relaxed mb-3" 
                            style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}
                          >
                            {blogs.description || "No description available."}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <h1 className="text-xl font-bold">Not Found</h1>
            )}
          </div>

          {/* See More Button */}
          <div className="flex justify-center my-5">
            <Link to={'/allblogs'}>
              <Button
                style={{
                  background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                  color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
                }}
              >
                See More Blogs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPostCard;
