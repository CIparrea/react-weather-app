import './searchBar.css';

export default function SearchBar({city, setCity, handleSubmitForCity}) {

  function handleSubmit(e) {
    e.preventDefault()
    handleSubmitForCity()
  }

  return (
    <div>
         <form className="searchBar" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="input" 
              placeholder="Type your city here..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"/></button>  
        </form>
    </div>
  )
}
