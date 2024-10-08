
export const SecondComponent = () => {
    const books = [
        "Harry Potter y la piedra filosofal",
        "Harry Potter y la cámara secreta",
        "Harry Potter y el prisionero de Azkaban",
        "Harry Potter y el cáliz de fuego",
        "Harry Potter y la Orden del Fénix",
        "Harry Potter y el ministerio del Principe",
        "Harry Potter y las Reliqueas de la Muerte",
        "Animales fantasticos y donde encontrarlos",
        "Otro libro"
    ];

    const listBooks = [];
    books.forEach((book, index) => {
        listBooks.push(<li key={index}> 
        {book}</li>)
    })

  return (
    <>
    <h1>SecondComponent</h1>
    <div>
        <ul>
           {
            books.map((book, index) => {
                return <li key={ index}> 
                {book} </li>
            })
           }
        </ul>
        <ul>{listBooks}</ul>
    </div>
    </>
  )
}
