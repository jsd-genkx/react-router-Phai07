import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to='/ '>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/products'>Product</Link></li>
                <li><Link to='/profile into'>profile into</Link></li>
                <li><Link to='/Order'>Order</Link></li>
                <li><Link to='/Setting'>Settings</Link></li>

            </ul>
        </nav>
    )
}
