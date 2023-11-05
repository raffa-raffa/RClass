import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Bradock", "Brianna", "Darth", "Shakira"])

    const [dogs, setDogs] = useState([
        { id: 1, name: "Bradock", age: 6, color: "caramelo", dogbreed: "SRD" },
        { id: 2, name: "Brianna", age: 3, color: "caramelo", dogbreed: "SRD" },
        { id: 3, name: "Darth", age: 3, color: "Preto", dogbreed: "SRD" },
        { id: 4, name: "Shakira", age: 2, color: "caramelo", dogbreed: "SRD" },
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setDogs((prevDogs)=> {
            console.log(prevDogs)
        return prevDogs.filter((user)=> randomNumber !== user.id)})
    }

    return (
        <div className='listrender'>
            <div>
                <ul>{list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            </div>
            <div>
                <ul>
                    {dogs.map((dog) => (
                        <li key={dog.id}>Name: {dog.name} - Age: {dog.age} - Color: {dog.color} - DogBreed: {dog.dogbreed}</li>
                    ))}
                </ul>
                <button onClick={deleteRandom}>Delete random Dogs</button>
            </div>
        </div>
    )
}

export default ListRender