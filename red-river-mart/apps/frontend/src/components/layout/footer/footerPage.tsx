import "./footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <p>&copy; <span>{new Date().getFullYear()}</span> Red River Mart - Created by Alex Carlos, Heuone Castillo & Ranindi Gunasekera. All Rights Reserved.</p>
        </footer>
    )
}