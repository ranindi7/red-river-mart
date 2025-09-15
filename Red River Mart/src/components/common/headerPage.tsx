import rrmLogo from '../../assets/rrmLogo.png'

export default function Header() {
    return (
        <header className='header'>
            <ul>
                <li className="logoList">
                    <img src={rrmLogo} alt="Red River Mart Logo" className='logo'/>
                </li>
                <li>Buy</li>
                <li>Sell</li>
                <li>Inbox</li>
                <li>Account</li>
            </ul>
        </header>
    );
}