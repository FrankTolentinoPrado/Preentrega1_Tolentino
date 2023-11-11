import coleccionable from './img/coleccionable.jpg'
import funko from './img/funko.webp'
import peluche from './img/peluche.jpg'
import polo from './img/polo.webp'
import masterball from './img/masterball.png'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container">
            <section className="card-section">
                <div className="card">
                    <img src={coleccionable} alt= "coleccion"/>
                  <div className="card-header">Peluches</div>
                  <div className="card-body">
                    <p>Descubre peluches adorables que llenarán tu vida de ternura y alegría. Nuestra colección te ofrece suavidad y encanto en cada abrazo. ¡Encuentra tu favorito en Flexvyne!</p>
                    <a href="./pages/productos.html">ver mas</a>
                  </div>
                  <div className="card-footer"><img className="mini_masterball" src={masterball} alt= "minimasterball" /></div>
                </div>
                <div className="card">
                    <img src={funko} alt= "funkopop"/>
                  <div className="card-header">Coleccionables</div>
                  <div className="card-body">
                    <p>Explora figuras únicas y coleccionables que darán vida a tu pasión por lo excepcional. En Flexvyne, encontrarás tesoros que añadirán magia a tu colección.</p>
                    <a href="./pages/productos.html">ver mas</a>
                  </div>
                  <div className="card-footer"><img className="mini_masterball" src={masterball} alt= "minimasterball" /></div>
                </div>
                <div className="card">
                    <img src={peluche} alt= "peluche"/>
                  <div className="card-header">Funko Pops</div>
                  <div className="card-body">
                    <p>Encuentra los Funko Pops más populares y deseados en Flexvyne. Estos coleccionables reflejan tu pasión por los personajes icónicos. ¡Haz que tu colección cobre vida!</p>
                    <a href="./pages/productos.html">ver mas</a>
                  </div>
                  <div className="card-footer"><img className="mini_masterball" src={masterball} alt= "minimasterball" /></div>
                </div>
                <div className="card">
                    <img src={polo} alt= "ropa"/>
                  <div className="card-header">Prendas</div>
                  <div className="card-body">
                    <p>Viste con estilo y muestra tu amor por el anime con nuestras prendas exclusivas. Flexvyne te ofrece una selección auténtica que reflejará tu pasión por el mundo del anime.</p>
                    <a href="./pages/productos.html">ver mas</a>
                  </div>
                  <div className="card-footer"><img className="mini_masterball" src={masterball} alt= "minimasterball" /></div>
                </div>
            </section>
        </div>
    )
}

export default ItemListContainer