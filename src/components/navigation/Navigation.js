import { Link } from 'react-router-dom';


export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <Link to="/" className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 text-uppercase text-white"><i className="fa fa-birthday-cake fs-1 text-primary me-3"></i>CakeZone</h1>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto mx-lg-auto py-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/products" className="nav-item nav-link" >Products</Link>
                <Link to="/about" className="nav-item nav-link" >About Us</Link>
                <Link to="/albums" className="nav-item nav-link">Cake colors</Link>
                <Link to="/contacts" className="nav-item nav-link">Contact Us</Link>
                {/* <Link to="/topbar" className="nav-item nav-link">TopBar</Link>
                <Link to="/footer" className="nav-item nav-link">Footer</Link> */}
                <div className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">User</Link>
                    <div className="dropdown-menu m-0">
                        <Link to="/login" className="dropdown-item">Login</Link>
                        <Link to="/register" className="dropdown-item">Register</Link>
                    </div>
                </div>
                
            </div>
        </div>
    </nav>
    )
}