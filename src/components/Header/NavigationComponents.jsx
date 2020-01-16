import React from 'react'
import { Link } from 'react-router-dom'

export const NavigationComponents = () => {
    return (
        <div id="myHeader" className="nav-scroller py-1 mb-2 border-top blog-header border-2">
            <nav className="nav d-flex justify-content-center ">
                <Link className="px-4 py-1 text-muted text-decoration-none" to="/paket">Paket Artikel</Link>
                <Link className="px-4 py-1 text-muted text-decoration-none" to="/paket" >Paket Interview</Link>
                <Link className="px-4 py-1 text-muted text-decoration-none" to="/afiliasi" >Afiliasi</Link>
                <Link className="px-4  py-1 text-muted text-decoration-none" to="/promo">Promo</Link>
                <Link className="px-4  py-1 text-muted text-decoration-none" to="/blog" >Blog</Link>
            </nav>
        </div>
    )
}
