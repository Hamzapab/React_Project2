import {languages} from "../../languages.js"
import '../index.css'

export default function Lang({wrongGuessCount}){

    const langElem = languages.map((e,index)=>{
        return(
            <div className={`p-0.5 px-2.5 m-0.5 relative rounded-sm ${wrongGuessCount > index ? 'lost':''}`} 
                 style={{ backgroundColor: e.backgroundColor ,color:e.color}}
                 key={e.name}
            >
            {e.name}
            </div>
        )
    })

    return(
        <div className="langContainer max-w-[400px] flex flex-wrap justify-center mx-auto mt-7">
            {langElem}
        </div>
    )
}