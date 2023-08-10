// Definición de variables a utilizar para las pruebas unitarias
const validEmailViewModel = require('../main/domain/utils/validateEmail');

//Métodos que son necesarios para la construcción de data o validación

//Métodos que son necesarios para la construcción de data o validación

//Metodos para inicializar o finalizar instancias

beforeAll(() => { 
  // Esta función se ejecuta antes de iniciar el paquete completo de pruebas
});

afterAll(() => {
  // Esta función se ejecuta despues de finalizar el paquete completo de pruebas.
  // por ejemplo para finalizar o limpiar las instancias 
});

beforeEach(() => { 
  // Esta función se ejecuta antes de iniciar una prueba, si hay varias pruebas, entonces se ejecuta antes de cada una.
});
afterEach(() => {
  // Esta función se ejecuta despues de de finalizar una prueba, si hay varias pruebas, entonces se ejecuta despues de finalizar de cada una.
  // por ejemplo para finalizar o limpiar las instancias
});

//Caso de prueba 01 - Valida Email

test('Debería retornar true para un email válido', () => {
  const email = 'ejemplo@example.com';
  const resultado = validEmailViewModel.validEmail(email);
  
  expect(resultado).toBe(true);
});

test('Debería retornar false para un email inválido', () => {
  const email = 'ejemplo@.com'; // Email inválido sin dominio válido
  const resultado = validEmailViewModel.validEmail(email);
  
  expect(resultado).toBe(false);
});

