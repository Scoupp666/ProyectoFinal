import './Portaflio.css'

const Portafolio = () => {
  return (
    <div className="Portafolio">
      <div className="Porta">
        <h1>Portafolio</h1>
        <p>Soy un programador y desarrollador de videojuegos en formación, estudio en el instituto de estudios universitarios Amerike la Ingeniería en Desarrollo de Software Interactivo y Videojuegos.</p>
        <a 
            href="https://amerike.edu.mx" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
          >
            <img src= 'https://amerike.edu.mx/wp-content/uploads/2023/03/logo-amerike-blanco-1B.png' alt="Amerike" className="Aicon" />
          </a>
        <p>Llevo cursados 3 semestres en los cuales he llevado estas materias:</p>
        <div className='listas'>
          <ul className='L1'>
            <title>1er semestre</title>
            <li>Fundamentos de Programación</li>
            <li>Matemáticas discretas</li>
            <li>Introducción a la Psicología</li>
            <li>Taller de diseño de juegos</li>
            <li>Inglés Tecnico para Videojuegos 1</li>
            <li>Histria de los Juegos</li>
          </ul>
          <br />
          <ul className='L2'>
            <title>2do semestre</title>
            <li>Tecnologías de la Programación</li>
            <li>Fundamentos de Computadoras</li>
            <li>Álgebra lineal y Geometría</li>
            <li>Proyecto Semestral: Introducción al Desarrollo de Interactivos</li>
            <li>Inglés Tecnico para Videojuegos 1</li>
            <li>Usabilidad y Experiencia de Usuario</li>
          </ul>
          <br />
          <ul className='L3'>
            <title>3er semestre</title>
            <li>Programación en Lenguajes Interpretados</li>
            <li>Sistemas Operativos y Redes</li>
            <li>Principios de Composición y Diseño</li>
            <li>Proyecto Semestral: Desarrollo de Aplicaciones Interactivas</li>
            <li>Diseño de VideoJuegos</li>
            <li>Inglés Técnico para Videojuegos 3</li>
          </ul>
        </div>
        <p>En estos 3 semestres he tenido la oportunidad de conocer y manejarestos lenguajes de programacion:</p>
        <div className='iconos'>
          <a 
            href="https://devdocs.io/cpp/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
          >
            <img src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png' alt="C++ Icon" className="icon" />
          </a>
          <a 
            href="https://learn.microsoft.com/en-us/dotnet/csharp//" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
          >
            <img src= 'https://img.icons8.com/color/512/c-sharp-logo.png' alt="C++ Icon" className="icon" />
          </a>
          <a 
            href="https://docs.python.org/3/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
          >
            <img src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' alt="Python Icon" className="icon" />
          </a>
          <a 
            href="https://developer.mozilla.org/en-US/docs/Web/HTML" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
          >
            <img src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png' alt="Python Icon" className="icon" />
          </a>
          <a 
            href="https://developer.mozilla.org/en-US/docs/Web/CSS" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
          >
            <img src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png' alt="Python Icon" className="icon" />
          </a>
          <a 
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
          >
            <img src= 'https://i.pinimg.com/originals/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.png' alt="Python Icon" className="icon" />
          </a>
          <a 
            href="https://legacy.reactjs.org/docs/getting-started.html" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
          >
            <img src= 'https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png' alt="React Icon" className="icon" />
          </a>
        </div>
        <p>Tambien conocí y actualmente me encuentro en capacitación en el motor gráfico Unity</p>
        <a 
          href="https://assetstore.unity.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="icon-link"
        >
          <img src= 'https://1000marcas.net/wp-content/uploads/2021/02/Unity-logo-500x281.png' alt="Unity Icon" className="Uicon" />
        </a>
        <div className='GProyectos'>
          <h4>Algunos de mis mayores proyectos son estos:</h4>
          <p>Un juego de Slenderman, cuenta con 3 niveles y en ellos tienes que buscar y encontrar los 8 clasicos papeles y evitar la muerte por Slenderman</p>
          <a 
          href="https://scoupp67.itch.io/slenderman" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="icon-link"
        >
          <img src= 'https://www.nicepng.com/png/full/46-464719_slender-man-steam-greenlight-calligraphy.png' alt="Unity Icon" className="Sicon" />
        </a>
        <br />
        <p>Esta es una página web que te muestra todo un catálogo de APIS pertenecientes a AmiiboAPI, puedes ver todas una por una o buscar a algun Amiibo en específico</p>
        <a 
          href="https://examen-web-zap994.netlify.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="icon-link"
        >
          <img src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Netlify_logo_%282%29.svg/800px-Netlify_logo_%282%29.svg.png' alt="Unity Icon" className="Nicon" />
        </a>
        </div>
      </div>
    </div>
  )
}

export default Portafolio