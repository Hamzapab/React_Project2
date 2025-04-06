import ReactMarkdown from 'react-markdown'
export function Receip(props){
  return(
    <section className="suggested-recipe-container" aria-live='polite'>
      <h2>AI CHEF RECOMMANEDES:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  )
}