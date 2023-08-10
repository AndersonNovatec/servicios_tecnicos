// Definición de variables a utilizar para las pruebas unitarias

const serviceViewModel = require('../main/domain/serviceViewModel');
const Service = require('../main/data/atributes/service/entities/Service');
const ServiceRepository = require('../main/data/atributes/service/repository/ServiceRepository');
const serviceRepository = new ServiceRepository();

//Métodos que son necesarios para la construcción de data o validación

//Métodos que son necesarios para la construcción de data o validación

function createServiceOk() {
  return new Service('12345', "1"); // con datos del acceso correctos
}

function createServiceOkMockWithDataError1() {
  return new Service('12345', "1"); // con datos erroneos de contraseña
}

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

//Caso de prueba 01 - Trayendo data
test('Consultando un servicio técnico, debe retornar true y convertir la data a enviar en un formato especifico', async () => {
  let responsedataServiceActive = {
    'status': 200,
    'data': {
      'error': 0,
      'response': {},
    },
  };

  // Mockear la función getData para devolver la respuesta simulada
  const spyOnGetDataService = jest.spyOn(serviceRepository, 'getService').mockReturnValueOnce(responsedataServiceActive);

  // Llamar a la función que se está probando
  const responseDataService = await serviceViewModel.getService(createServiceOk());

  // Verificar que se haya llamado a getDataGamers correctamente
  expect(spyOnGetDataService).toHaveBeenCalled();

  // Verificar que la respuesta sea true
  expect(responseDataService).toBe(true);
  // Restaurar el estado original de la función mockeada
  spyOnGetDataService.mockRestore();
});

//Caso de prueba 02 - Retornando error en la consulta del servicio
test('Consultando un servicio técnico errado, debe retornar true y convertir la data a enviar en un formato especifico', async () => {
  let responsedataServiceActive = {
    'status': 200,
    'data': {
      'error': 1,
      'response': {},
    },
  };

  // Mockear la función getData para devolver la respuesta simulada
  const spyOnGetDataService = jest.spyOn(serviceRepository, 'getService').mockReturnValueOnce(responsedataServiceActive);

  // Llamar a la función que se está probando
  const responseDataService = await serviceViewModel.getService(createServiceOkMockWithDataError1());

  // Verificar que se haya llamado a getDataGamers correctamente
  expect(spyOnGetDataService).toHaveBeenCalled();

  // Verificar que la respuesta sea true
  expect(responseDataService).toBe(true);
  // Restaurar el estado original de la función mockeada
  spyOnGetDataService.mockRestore();
});

//Caso de prueba 03 - GetStorage
test('Consultando el almacenamiento, debe retornar true y el valor almacenado', () => {
  const key = 'miClave';
  const expectedValue = 'miValor';

  // Mockear la función getDataStorage para devolver el valor esperado
  const spyOnGetDataStorage = jest.spyOn(serviceRepository, 'getDataStorage').mockReturnValueOnce(expectedValue);

  // Llamar a la función que se está probando
  const [response, value] = serviceViewModel.getStorage(key);

  // Verificar que se haya llamado a getDataStorage correctamente
  expect(spyOnGetDataStorage).toHaveBeenCalledWith(key);

  // Verificar que la respuesta sea true y el valor coincida
  expect(response).toBe(true);
  expect(value).toBe(expectedValue);

  // Restaurar el estado original de la función mockeada
  spyOnGetDataStorage.mockRestore();
});
