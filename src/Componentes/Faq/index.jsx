import React, { useState } from 'react';

// Definición del componente Faq
const Faq = ({ isMobile }) => {
  // Arreglo de preguntas y respuestas
  const faq = [
    {
      pregunta: "How many team members can I invite?",
      respuesta:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      pregunta: "What is the maximum file upload size?",
      respuesta:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      pregunta: "How do I reset my password?",
      respuesta:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      pregunta: "Can I cancel my subscription?",
      respuesta:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      pregunta: "Do you provide additional support?",
      respuesta:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  // Estado para controlar la visibilidad de las respuestas y el índice de la respuesta activa
  const [respuestaActiva, setRespuestaActiva] = useState(null);

  // Función para manejar el clic en el ícono
  const handleIconClick = (index) => {
    if (respuestaActiva === index) {
      // Si la respuesta está activa, desactivarla
      setRespuestaActiva(null);
    } else {
      // Si la respuesta no está activa, activarla
      setRespuestaActiva(index);
    }
  };

  // Renderización del componente
  return (
    <div 
      className={`p-4 ${isMobile === true ? 'w-full': 'w-6/12' }`}>
      <h1 className={`mt-[44px] mb-[38px] text-4xl font-bold 
       ${isMobile === true ? ' text-center ': 'text-lef inline-block ' }`
       }>
        FAQ
        </h1>
      <ul >
        {/* Iterar sobre el arreglo de preguntas */}
        {faq.map((item, index) => (
          <li key={index} className="w-full">
            <p className={`flex items-center justify-between text-base ${
                  respuestaActiva === index ? 'my-2 font-semibold' : 'mb-7'
                } ${isMobile === true ? 'w-full': 'w-9/12' }`}>
              {/* Mostrar la pregunta */}
              <span>{item.pregunta}</span>
              {/* Ícono SVG */}
              <svg
                className={`cursor-pointer ${
                  respuestaActiva === index ? 'rotate-180' : ''
                }`}
                onClick={() => handleIconClick(index)} // Asociar el evento clic a la función handleIconClick
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="7"
              >
                {/* Camino del trazo del ícono */}
                <path
                  d="M1 .799l4 4 4-4"
                  stroke={respuestaActiva === index ? '#F47B56' : 'black'} // Cambiar el color del trazo si la respuesta está activa
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </p>
            {/* Mostrar la respuesta si está activa */}
            {respuestaActiva === index && (
              <span className='w-9/12 mb-8 inline-block text-left text-xs text-textoRespuesta'>{item.respuesta}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Faq };
