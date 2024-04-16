import React from 'react';
import styles from '../styles/Personas.module.css';
import { useEffect } from 'react';
import { useState } from 'react';

const Personas = ({ personas, ciudades, paises, estudios, generos, gruposSanguineos }) => {
  const [currentTimes, setCurrentTimes] = useState({});

  useEffect(() => {
    const updateCurrentTimes = () => {
      const times = {};
      personas.forEach(persona => {
        const cityId = persona.city_id;
        const city = ciudades.find(ciudad => ciudad.city_id === cityId);
        const countryId = city?.country_id;
        const country = paises.find(pais => pais.country_id === countryId);
        let timezone = 'GMT'; // Default timezone if no country is found
        if (country) {
          switch (country.countryName) {
            case 'España':
              timezone = 'Europe/Madrid';
              break;
            case 'Francia':
              timezone = 'Europe/Paris';
              break;
            case 'Colombia':
              timezone = 'America/Bogota';
              break;
            case 'Japón':
              timezone = 'Asia/Tokyo';
              break;
            default:
              timezone = 'GMT';
              break;
          }
        }
        const currentTime = new Date().toLocaleTimeString('en-US', { timeZone: timezone });
        times[persona.person_id] = currentTime;
      });
      setCurrentTimes(times);
    };


    const interval = setInterval(updateCurrentTimes, 1000);

    return () => clearInterval(interval);
  }, [personas, ciudades]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Altura</th>
          <th>Peso</th>
          <th>Ciudad</th>
          <th>País</th>
          <th>Estudios</th>
          <th>Género</th>
          <th>Grupo Sanguíneo</th>
          <th>Hora Actual</th>
        </tr>
      </thead>
      <tbody>
        {personas.map(persona => (
          <tr key={persona.person_id}>
            <td data-label="Nombre">{persona.name || '-'}</td>
            <td data-label="Apellido">{persona.surname1 || '-'}</td>
            <td data-label="Edad">{persona.age || '-'}</td>
            <td data-label="Altura">{persona.height || '-'}</td>
            <td data-label="Peso">{persona.weight || '-'}</td>
            <td data-label="Ciudad">{ciudades.find(ciudad => ciudad.city_id === persona.city_id)?.cityName || '-'}</td>
            <td data-label="País">{paises.find(pais => pais.country_id === ciudades.find(ciudad => ciudad.city_id === persona.city_id)?.country_id)?.countryName || '-'}</td>
            <td data-label="Estudios">{estudios.find(estudio => estudio.study_id === persona.study_id)?.level || '-'}</td>
            <td data-label="Género">{generos.find(genero => genero.gender_id === persona.gender_id)?.type || '-'}</td>
            <td data-label="Grupo Sanguíneo">{gruposSanguineos.find(grupo => grupo.bloodType_id === persona.bloodtype_id)?.bloodName || '-'}</td>
            <td data-label="Hora Actual">{currentTimes[persona.person_id] || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Personas;