import React from 'react'

const SegundoComponente = () => {
    // Este es un segundo componente de ejemplo
    // Puedes agregar lógica, estados, props, etc. aquí
    //bariables
    const libros = [
      {
        titulo: "Harry Potter y la piedra filosofal",
        año: 1997,
        escritora: "J.K. Rowling",
        numero: 1
      },
      {
        titulo: "Cien años de soledad",
        año: 1967,
        escritora: "Gabriel García Márquez",
        numero: 1
      },
      {
        titulo: "El Hobbit",
        año: 1937,
        escritora: "J.R.R. Tolkien",
        numero: 1
      },
      {
        titulo: "Orgullo y prejuicio",
        año: 1813,
        escritora: "Jane Austen",
        numero: 1
      },
      {
        titulo: "Don Quijote de la Mancha",
        año: 1605,
        escritora: "Miguel de Cervantes",
        numero: 1
      }
    ];
  return (
    <>
    
    <div>SegundoComponente</div>
    <h2>Libros</h2>

    {/* Aquí puedes renderizar los libros */}
    
    {/* Comprobamos si hay libros para mostrar*/}
    {libros.length != 0 ? (<ul>
          {libros.map((libro, index) => (
            
        <li key={index}>
          <div>
            <strong>Título:</strong> {libro.titulo}<br />
            <strong>Año:</strong> {libro.año}<br />
            <strong>Escritor/a:</strong> {libro.escritora}<br />
            <strong>Número de libro:</strong> {libro.numero}
          </div>
          <hr />
        </li>
        
      ))}
    </ul>)
        : <p>No hay libros disponibles.</p>
    
    }
        
    </>
  )
}

export default SegundoComponente