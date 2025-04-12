import { use, useState } from "react"

export default function Main() {

    const [memeInfo , setMemeInfo ] = useState({
        imgUrl:'http://i.imgflip.com/1bij.jpg',
        topText:'One does not simply',
        bottomText:'Walk into Mordor'
    })

    function handleChange(event){
        const {value,name} = event.currentTarget;
        setMemeInfo(prev=>({
            ...prev,
            [name]:value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="type"
                        name="topText"
                        onChange={handleChange}
                        value={memeInfo.value}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="type"
                        name="bottomText"  
                        onChange={handleChange}    
                        value={memeInfo.value}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memeInfo.imgUrl} />
                <span className="top">{memeInfo.topText}</span>
                <span className="bottom">{memeInfo.bottomText}</span>
            </div>
        </main>
    )
}