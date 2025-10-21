import {
  FaRobot,
  FaLock,
  FaCode,
  FaCloud,
  FaDatabase,
  FaChartLine,
  FaMobileAlt,
  FaComments
} from 'react-icons/fa';
import InfoCard from '../components/InfoCard';


export default function Home() {
  return (
    <div style={{
      display: 'grid',
      gap: '20px',
      justifyItems: 'center',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      width: '100%',
      maxWidth: '100vw',        // 🔥 evita que se pase del ancho visible
      overflowX: 'hidden',      // 🔥 previene scroll horizontal
      boxSizing: 'border-box',
      padding: '10px',
    }}>

      <InfoCard
        dayLabel="DAY 1"
        title="Chat GPT"
        icon={FaLock}
        description="ChatGPT te ayuda a desarrollar ideas, escribir código y optimizar tus proyectos de forma inteligente."
        buttonText="Realizar prueba"
        headerColor="#00C853"
        iconBg="#B3E5FC"
        onButtonClick={() => alert('Probando ChatGPT!')}
      />

      <InfoCard
        dayLabel="DAY 2"
        title="AI Builder"
        icon={FaRobot}
        description="Construye asistentes de inteligencia artificial personalizados y automatiza tareas en segundos."
        buttonText="Probar ahora"
        headerColor="#2196F3"
        iconBg="#E1F5FE"
        onButtonClick={() => alert('Probando AI Builder!')}
      />

      <InfoCard
        dayLabel="DAY 3"
        title="Code Helper"
        icon={FaCode}
        description="Un asistente que revisa y mejora tu código en tiempo real, recomendando mejores prácticas."
        buttonText="Iniciar"
        headerColor="#9C27B0"
        iconBg="#E1BEE7"
        onButtonClick={() => alert('Probando Code Helper!')}
      />

      <InfoCard
        dayLabel="DAY 4"
        title="Cloud Sync"
        icon={FaCloud}
        description="Sincroniza y respalda tus datos en la nube con alta seguridad y velocidad."
        buttonText="Sincronizar"
        headerColor="#03A9F4"
        iconBg="#B3E5FC"
        onButtonClick={() => alert('Probando Cloud Sync!')}
      />

      <InfoCard
        dayLabel="DAY 5"
        title="Data Manager"
        icon={FaDatabase}
        description="Administra tus bases de datos SQL y NoSQL con herramientas visuales intuitivas."
        buttonText="Abrir"
        headerColor="#4CAF50"
        iconBg="#C8E6C9"
        onButtonClick={() => alert('Probando Data Manager!')}
      />

      <InfoCard
        dayLabel="DAY 6"
        title="Analytics Pro"
        icon={FaChartLine}
        description="Analiza métricas, detecta patrones y genera reportes personalizados en segundos."
        buttonText="Ver reportes"
        headerColor="#FF9800"
        iconBg="#FFE0B2"
        onButtonClick={() => alert('Probando Analytics Pro!')}
      />

      <InfoCard
        dayLabel="DAY 7"
        title="Mobile Tools"
        icon={FaMobileAlt}
        description="Desarrolla y prueba aplicaciones móviles con herramientas integradas para Android y iOS."
        buttonText="Probar"
        headerColor="#E91E63"
        iconBg="#F8BBD0"
        onButtonClick={() => alert('Probando Mobile Tools!')}
      />

      <InfoCard
        dayLabel="DAY 8"
        title="Smart Chat"
        icon={FaComments}
        description="Crea sistemas de chat inteligentes con respuestas automáticas basadas en IA."
        buttonText="Iniciar chat"
        headerColor="#673AB7"
        iconBg="#D1C4E9"
        onButtonClick={() => alert('Probando Smart Chat!')}
      />

    </div>
  );
}
