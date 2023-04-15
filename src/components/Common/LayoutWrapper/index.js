import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { routes } from '../../../routes/Routes';

const LayoutWrapper = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <header className="bg-indigo-600 text-white">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <a href="javascript:void(0);" className="text-lg font-bold" onClick={() => navigate(routes.posts)}><img src="/images/blog.png" height="72px" width="72px" /></a>
                <nav className="sm:flex sm:items-center">
                    <ul className="flex space-x-4">
                        {location.pathname !== routes.login &&
                            <li>
                                <a
                                    href="javascript:void(0);"
                                    className="hover:text-gray-300"
                                    onClick={() => navigate(routes.login)}
                                >Sign In</a>
                            </li>
                        }
                        {location.pathname !== routes.register &&
                            <li>
                                <a
                                    href="javascript:void(0);"
                                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-indigo-400 rounded shadow"
                                    onClick={() => navigate(routes.register)}
                                >Sign Up
                                </a>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default LayoutWrapper