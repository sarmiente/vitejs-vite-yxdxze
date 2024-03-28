// URL de la API de Wasi
const apiUrl = 'https://api.wasi.co/v1/properties';

// ID de la compañía
const companyId = '23639330'; // Reemplaza 'TU_ID_DE_EMPRESA' con el ID de tu empresa

// Token de autenticación de Wasi
const wasiToken = '6Blp_oUrv_kl9r_m0rE'; // Reemplaza 'TU_TOKEN_DE_WASI' con tu token de Wasi

// Encabezados de la solicitud
const headers = {
  'Authorization': `Bearer ${wasiToken}`,
  'Content-Type': 'application/json',
  'id_company': companyId
};

// Función para obtener las propiedades
async function getProperties() {
  try {
    const response = await fetch(apiUrl, {
      headers: headers
    });
    if (!response.ok) {
      throw new Error(`Error al cargar las propiedades: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return null;
  }
}

// Ejemplo de uso
getProperties()
  .then(data => {
    if (data) {
      console.log('Propiedades:', data);
      // Aquí puedes manipular los datos recibidos de la API según tus necesidades
    } else {
      console.log('No se pudo obtener las propiedades.');
    }
  })
  .catch(error => {
    console.error('Error al obtener las propiedades:', error);
  });
