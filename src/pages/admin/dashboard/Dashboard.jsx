import React, { useContext } from 'react'
import Layout from '../../../components/layout/Layout'
import myContext from '../../../context/data/myContext';
import { Button } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
    const context = useContext(myContext);
    const { mode } = context;

    const navigate = useNavigate();

    //* Logout Function 
    const logout = () => {
        localStorage.clear();
        navigate('/')
    }
    return (
        <Layout>
            <div className="py-10">
                <div
                    className="flex flex-wrap justify-start items-center lg:justify-center gap-2 lg:gap-10 px-4 lg:px-0 mb-8">
                    <div className="left">
                        <img
                            className=" w-40 h-40  object-cover rounded-full border-2 border-pink-600 p-1"
                            src={'data:image/jpeg;base64,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'} alt="profile"
                        />
                    </div>
                    <div className="right">
                        <h1
                            className='text-center font-bold text-2xl mb-2'
                            style={{ color: mode === 'dark' ? 'white' : 'black' }}
                        >
Mr. Sandip Dilip Gadekar
                        </h1>

                        <h2
                            style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">
                            Software Developer
                        </h2>
                        <h2
                            style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">sandipgadekar.work@gmail.com
                        </h2>
                        <h2
                            style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">
                            <span>Total Blog : </span>  15
                        </h2>
                        <div className=" flex gap-2 mt-2">
                            <Link to={'/createblog'}>
                                <div className=" mb-2">
                                    <Button
                                        style={{
                                            background: mode === 'dark'
                                                ? 'rgb(226, 232, 240)'
                                                : 'rgb(30, 41, 59)',
                                            color: mode === 'dark'
                                                ? 'black'
                                                : 'white'
                                        }}
                                        className='px-8 py-2'
                                    >
                                        Create Blog
                                    </Button>
                                </div>
                            </Link>
                            <div className="mb-2">
                                <Button
                                    onClick={logout}
                                    style={{
                                        background: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : 'rgb(30, 41, 59)',
                                        color: mode === 'dark'
                                            ? 'black'
                                            : 'white'
                                    }}
                                    className='px-8 py-2'
                                >
                                    Logout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Line  */}
                <hr className={`border-2
                    ${mode === 'dark'
                            ? 'border-gray-300'
                            : 'border-gray-400'}`
                    }
                />

                {/* Table  */}
                <div className="">
                    <div className=' container mx-auto px-4 max-w-7xl my-5' >
                        <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
                            {/* table  */}
                            <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400" >
                                {/* thead  */}
                                <thead
                                    style={{
                                        background: mode === 'dark'
                                            ? 'white'
                                            : 'rgb(30, 41, 59)'
                                    }}
                                    className="text-xs ">
                                    <tr>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
                                            S.No
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
                                            Thumbnail
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
                                            Title
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
                                            Category
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
                                            Date
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                {/* tbody  */}
                                <tbody>
                                    <tr className=" border-b-2" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }}>
                                        {/* S.No   */}
                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                            {'1.'}
                                        </td>

                                        {/* Blog Thumbnail  */}
                                        <th style={{ color: mode === 'dark' ? 'white' : 'black' }} scope="row" className="px-6 py-4 font-medium ">
                                            {/* thumbnail  */}
                                            <img className='w-16 rounded-lg' src={'https://firebasestorage.googleapis.com/v0/b/blog-fea71.appspot.com/o/blogimage%2FReact%20Introduction.png?alt=media&token=1ba7496b-2cbc-450c-ab1a-57e19882dc76'} alt="thumbnail" />
                                        </th>

                                        {/* Blog Title  */}
                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                            {'React Introduction'}
                                        </td>

                                        {/* Blog Category  */}
                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                            {'reactjs'}
                                        </td>

                                        {/* Blog Date  */}
                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                            {'Jul 25, 2023'}
                                        </td>

                                        {/* Delete Blog  */}
                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                            <button className=' px-4 py-1 rounded-lg text-white font-bold bg-red-500'>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Dashboard