import placeholder from '../../../public/placeholder.png';

export default function Main() {
    return (
        <div>
            <nav>
                <ul>
                    <li>Categories</li>
                    <li>Price</li>
                    <li>Alphabetical</li>
                </ul>
            </nav>
            <main>
                <article>
                    <img src={placeholder} height={100}/>
                    <h2>Item 1 Name</h2>
                    <p>$25.00</p>
                </article>

                <article>
                    <img src={placeholder} height={100}/>
                    <h2>Item 2 Name</h2>
                    <p>$40.00</p>
                </article>

                <article>
                    <img src={placeholder} height={100}/>
                    <h2>Item 3 Name</h2>
                    <p>$100.00</p>
                </article>
            </main>
        </div>
    );
}