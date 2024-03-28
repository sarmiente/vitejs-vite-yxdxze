// URL de la API de BoredAPI
const apiUrl = 'http://www.boredapi.com/api/activity/';

// Función para obtener una actividad aleatoriaaaaa
async function getRandomActivity() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(
        `Error al obtener la actividad: ${response.status} - ${response.statusText}`
      );
    }
    const data = await response.json();
    return data.activity;
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return null;
  }
}

// Ejemplo de uso
getRandomActivity()
  .then((activity) => {
    if (activity) {
      console.log('Actividad aleatoria:', activity);
      // Aquí puedes manipular la actividad aleatoria según tus necesidades
    } else {
      console.log('No se pudo obtener la actividad.');
    }
  })
  .catch((error) => {
    console.error('Error al obtener la actividad:', error);
  });
