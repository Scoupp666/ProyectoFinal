import "./Menu.css";

const Menu = () => {

  return (
    <div className="Menu">
      <h1>Mini Juegos</h1>
      <div className="MiniJuegos">
        <div className="FO">
          <h3>Find Objects</h3>
          <p>Tienes que encontrar a los objetos que estan en la lista.</p>
          <a 
            href="https://findobjects1.netlify.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
          >
            <img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSecPuAOK4Nay6Ttjgkl26dmSHCempGaW5UF6ezCJL0bdR0dZZD45eqvcw_mNGvPVIhB9w&usqp=CAU' alt="Amerike" className="Micon" />
          </a>
          <div className="ImagesC1">
            <img src="/PFimages/Mimages/FindObjects/Captura de pantalla 2024-11-27 005820.png" alt="" />
            <img src="/PFimages/Mimages/FindObjects/Captura de pantalla 2024-11-27 005843.png" alt="" />
            <img src="/PFimages/Mimages/FindObjects/Captura de pantalla 2024-11-27 005858.png" alt="" />
          </div>
        </div>
        <br />
        <div className="Gato">
        <h3>Tic Tac Toe</h3>
          <p>Hay 2 simbolos O y X, debes lograr alinear 3 en la cuadricula para ganar. (En caso de que no aparezca el boton de reiniciar refresque la pagina)</p>
          <a 
            href="https://gatotictactoe.netlify.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
          >
            <img src= 'https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU' alt="Amerike" className="Micon" />
          </a>
          <div className="ImagesC2">
            <img src="/PFimages/Mimages/Gato/Captura de pantalla 2024-11-28 181849.png" alt="" />
            <img src="/PFimages/Mimages/Gato/Captura de pantalla 2024-11-28 181906.png" alt="" />
            <img src="/PFimages/Mimages/Gato/Captura de pantalla 2024-11-28 181922.png" alt="" />
          </div>
        </div>
        <br />
        <div className="Meteor">
        <h3>Meteoritos</h3>
          <p>Tienes que esquivar a los meteoritos, aguanta hasta el punto que logres y supera tu record anterior.</p>
          <a 
            href="https://meteoritos4090.netlify.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
          >
            <img src= 'https://www.jornada.com.mx/ndjsimg/images/jornada/jornadaimg/capsula-de-la-nasa-trae-a-la-tierra-muestra-de-la-superficie-de-un-asteroide-634/capsula-de-la-nasa-trae-a-la-tierra-muestra-de-la-superficie-de-un-asteroide-634html-bennujpg-1171html-1d1bb16f-f793-4600-a9e0-307afd81af18.jpgljnimgndimage=fullsize' alt="Amerike" className="Micon" />
          </a>
          <div className="ImagesC3">
            <img src="/PFimages/Mimages/Meteoritos/Captura de pantalla 2024-11-27 005037.png" alt="" />
            <img src="/PFimages/Mimages/Meteoritos/Captura de pantalla 2024-11-27 005057.png" alt="" />
            <img src="/PFimages/Mimages/Meteoritos/Captura de pantalla 2024-11-27 005136.png" alt="" />
          </div>
        </div>
        <br />
        <div className="RPS">
        <h3>Piedra, Papel o Tijera</h3>
          <p>Vas a jugar este tipico juego con la computadora, solo escoge cualquiera de las 3 opciones y el resultado se mostrara de manera inmediata.</p>
          <a 
            href="https://rpsgame4090.netlify.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
          >
            <img src= 'https://media.istockphoto.com/id/1395632555/es/vector/colorido-juego-de-iconos-de-mano.jpg?s=612x612&w=0&k=20&c=2odZkzV5U0-5l85MsjU21-hSbg-Yml0kVcuHa-3XRUs=' alt="Amerike" className="Micon" />
          </a>
          <div className="ImgaesC4">
            <img src="/PFimages/Mimages/RPS/Captura de pantalla 2024-11-27 004439.png" alt="" />
            <img src="/PFimages/Mimages/RPS/Captura de pantalla 2024-11-27 004454.png" alt="" />
            <img src="/PFimages/Mimages/RPS/Captura de pantalla 2024-11-27 004507.png" alt="" />
          </div>
        </div>
        <br />
        <div className="wakamol">
        <h3>Whack a Mole</h3>
          <p>Haz click en el castor para ganar puntos, si presionas a la planta carnivora pierdes.</p>
          <a 
            href="https://wakamolemole.netlify.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
          >
            <img src= 'https://m.media-amazon.com/images/I/71QD8CMfnaL.jpg' alt="Amerike" className="Micon" />
          </a>
          <div className="ImagesC5">
            <img src="/PFimages/Mimages/WhackaMole/Captura de pantalla 2024-11-28 181659.png" alt="" />
            <img src="/PFimages/Mimages/WhackaMole/Captura de pantalla 2024-11-28 181743.png" alt="" />
            <img src="/PFimages/Mimages/WhackaMole/Captura de pantalla 2024-11-28 181816.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;