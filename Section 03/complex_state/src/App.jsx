
import React from "react"
import avatar from "./assets/user.png"
import starFilled from "./assets/star-filled.png"
import starEmpty from "./assets/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
     const ariaLabel = contact.isFavorite? "add to favorite" : "remove from favorite"
    function toggleFavorite() {
        setContact(prev=>{
            return{
                ...prev,
                isFavorite: !prev.isFavorite
            }
        })
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        className="favorite-button"
                        aria-label={ariaLabel}


                    >
                        <img
                            src={contact.isFavorite? starFilled : starEmpty}
                            alt={contact.isFavorite? "Filled Start icon": "empty star icon"}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
