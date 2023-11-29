const products = [
    {
      id: "funko_1",
      name: "Funko Charmander",
      price: 50,
      category: "Funko",
      img: "adjuntar imagen",
      stock: 10,
      description: "Funko de charmander coleccionable",
    },
    {
      id: "ropa_1",
      name: "Polera",
      price: 120,
      category: "Ropa",
      img: "adjuntar imagen",
      stock: 20,
      descripcion:"Polera de anime hecha en algodon",
    },
    {
      id: "peluche_1",
      name: "Peluche de Luffy",
      price: 30,
      category: "Peluche",
      img: "adjuntar imagen",
      stock: 10,
      descripcion: "Peluche de Luffy",
    },
    {
      id: "coleccionable_1",
      name: "Roronoa Zoro",
      price: 150,
      category: "Coleccionable",
      img: "adjuntar imagen",
      stock: 5,
      descripcion: "Figura de accion Roronoa Zoro",
    },
    {
      id: "funko_2",
      name: "Funko Bulbasaur",
      price: 50,
      category: "Funko",
      img: "adjuntar imagen",
      stock: 17,
      description: "Funko de Bulbasaur coleccionable",
    },
    {
      id: "ropa_2",
      name: "Short",
      price: 120,
      category: "Ropa",
      img: "adjuntar imagen",
      stock: 10,
      descripcion:"Short de anime hecha en algodon",
    },
    {
      id: "peluche_2",
      name: "Peluche de Sanji",
      price: 30,
      category: "Peluche",
      img: "adjuntar imagen",
      stock: 10,
      descripcion: "Peluche de Vinsmoke Sanji",
    },
    {
      id: "coleccionable_2",
      name: "Trafalgar Law",
      price: 150,
      category: "Coleccionable",
      img: "adjuntar imagen",
      stock: 5,
      descripcion: "Figura de accion Trafalgar Law",
    },
    {
      id: "funko_3",
      name: "Funko Squirtle",
      price: 50,
      category: "Funko",
      img: "adjuntar imagen",
      stock: 20,
      description: "Funko de Squirtle coleccionable",
    },
    {
      id: "ropa_3",
      name: "Polo de anime",
      price: 60,
      category: "Ropa",
      img: "adjuntar imagen",
      stock: 40,
      descripcion:"Polo de anime hecha en algodon",
    },
    {
      id: "peluche_3",
      name: "Nico Robin",
      price: 60,
      category: "Peluche",
      img: "adjuntar imagen",
      stock: 20,
      descripcion: "Peluche Nico Robin",
    },
    {
      id: "coleccionable_3",
      name: "Monkey D Dragon",
      price: 250,
      category: "Coleccionable",
      img: "adjuntar imagen",
      stock: 3,
      descripcion: "Figura de accion Monkey D Dragon",
    },

  ];

  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 500);
    });
  };
  
  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === category));
      }, 500);
    });
  };