import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Carrusel from './components/Carrusel';


function App() {
  return (
    <div className='App'>
      <div className='parte-superior'>
        <Header/>
        <ul>
          <li className='titulo-principal'>Huellitas</li>
          <li className='sub-titulo'>Refugio de animales</li>
        </ul>
      </div>
      <div className='parte-media'>
        <div className="image-and-text-container">
          <Carrusel />
          <div className='texto-informativo'>
            <p>El Refugio Huellitas es una ONG, sin fines de lucro. Estamos inscriptos, como Asociación Civil, REFUGIO HUELLITAS personeria juridica n° 6971, Ruta16 Parcela 501 E Monte Grande, Partido de Esteban Echeverría, zona sur del Gran Buenos Aires, en Argentina.  </p>
            <p>El refugio tiene una población que ronda los 750 perros. El trabajo de rescate y recuperación NO TIENE PRECEDENTES EN AMERICA LATINA.  Por ser un REFUGIO NO EUTANÁSICO no considera inviable a ninguno de sus animales. Lo que lo hace ÚNICO EN EL MUNDO son sus 120 perros paraliticos, ellos no pueden caminar y usan carritos hechos a medida; además viven en el refugio 50 ciegos, y más de 250 viejitos, Muchos de ellos están en tratamiento por problemas renales, hepáticos, cardíacos, oncológicos o diabéticos.</p>
            <p>Huellitas no recibe subsidios, aportes de empresas, o alimento balanceado de ninguna compañía, no tiene cuotas ni socios. Se puede ser padrino / madrina del refugio, o de un perrito que desees proteger en particular, a voluntad: no hay montos fijos y la frecuencia de la ayuda también es voluntaria.</p>
            <p>El círculo que se inicia con el rescate y continúa con la recuperación, culmina con la adopción. En el refugio ingresan alrededor de 100 animales destruidos, mes a mes, gracias a que una cantidad similar se van en adopción gracias a la excelente tarea desarrollada por el equipo de adopciones.</p>
            <p>El objetivo principal de la organización es la concientización de la sociedad. Las ideas que se difunden a través del accionar diario del refugio son las del respeto irrestricto por la vida y la de que el bienestar de los animales se puede lograr si la sociedad se involucra y los sentimientos de piedad se traducen en acciones concretas. Los pilares de esta concientización son: el cuidado adecuado y el no abandono de las mascotas,  la esterilización como único medio de control poblacional, la adopción en lugar de la compra de animales, el rechazo a toda forma de sacrificio o eutanasia. La concientización a la cual apunta Huellitas va más allá del respeto y cuidado hacia a los animales. El objetivo es lograr una sociedad no abandónica y respetuosa, tanto de sus animales, como de sus abuelos como de las personas con capacidades diferentes.</p>
            <p>Una característica distintiva de Huellitas es el sistema de “puertas abiertas”: cualquier persona puede visitar el refugio para brindar su amor a los camperitos (sobrenombre cariñoso de los perritos de refugio) o, si lo desea,  formar parte del equipo de voluntarios de esta organización. De esta manera, se estimula a quienes se acercan a crear nexos con los animales y a involucrarse.</p>
            <p>Huellitas está compuesto por las áreas de Prensa, Campito Solidario y Campito Escolar.</p>
            <p>El team de Huellitas cuenta con un total de 102 organizadores y más de 250 voluntarios, que sábado a sábado vienen al refugio a trabajar por y para ellos.</p>
            <br /><br />
            <p>Sumate, ¡te esperamos!</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
