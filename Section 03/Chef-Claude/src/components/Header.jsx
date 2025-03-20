import logo from '/src/assets/images/logo.png'

export default function Header(){
    function onHover(){
        // alert("You are Hover")
    }
    return (
        <header>
            <img  onMouseOver={onHover} src={logo} alt="logo" />
            <h2>CHEF CLAUDE</h2>
        </header>
    )
}

