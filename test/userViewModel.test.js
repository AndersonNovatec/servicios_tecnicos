const UserRepository = require('../main/data/atributes/user/repository/UserRepository');
const userViewModel = require("../main/domain/userViewModel");
const userRepository = new UserRepository();

// Métodos que son necesarios para la construcción de data o validación

// Métodos para inicializar o finalizar instancias

beforeAll(() => { 
  // Esta función se ejecuta antes de iniciar el paquete completo de pruebas
});

afterAll(() => {
  // Esta función se ejecuta después de finalizar el paquete completo de pruebas.
  // Por ejemplo, para finalizar o limpiar las instancias 
});

beforeEach(() => { 
  // Esta función se ejecuta antes de iniciar una prueba, si hay varias pruebas, entonces se ejecuta antes de cada una.
});

afterEach(() => {
  // Esta función se ejecuta después de finalizar una prueba, si hay varias pruebas, entonces se ejecuta después de finalizar cada una.
  // Por ejemplo, para finalizar o limpiar las instancias
});

// Caso de prueba para signUp
test('Cuando se realiza el registro de usuario con correo y contraseña válidos, debe retornar el resultado esperado', () => {
  // Datos de prueba
  const email = 'test@example.com';
  const password = '$_pas123';

  // Simula el resultado del servicio de registro
  const expectedResult = {
    success: true,
    message: 'Registro exitoso',
  };

  // Mock del método loginUserRemote
  const loginUserRemoteMock = jest.spyOn(userRepository, 'loginUserRemote').mockReturnValueOnce(expectedResult);

  // Llama a la función que se está probando
  const result = userViewModel.signUp(email, password);

  // Verifica que se haya llamado a loginUserRemote correctamente
  expect(loginUserRemoteMock).toHaveBeenCalledWith(email, password);

  // Verifica que el resultado sea igual al resultado esperado
  expect(result).toEqual(expectedResult);

  // Restaura el método loginUserRemote original
  loginUserRemoteMock.mockRestore();
});

// Caso de prueba para getInformationLine
test('Cuando se solicita información de línea, debe retornar la información correspondiente', () => {
  // Datos de prueba
  const data = {
    // Datos de prueba
  };

  // Simula la respuesta de la función getInformationLine
  const expectedResult = {
    // Resultado esperado
  };

  // Mock del método getInformationLine
  const getInformationLineMock = jest.spyOn(userRepository, 'getInformationLine').mockReturnValueOnce(expectedResult);

  // Llama a la función que se está probando
  const result = userViewModel.getInformationLine(data);

  // Verifica que se haya llamado a getInformationLine correctamente
  expect(getInformationLineMock).toHaveBeenCalledWith(data);

  // Verifica que el resultado sea igual al resultado esperado
  expect(result).toEqual(expectedResult);

  // Restaura el método getInformationLine original
  getInformationLineMock.mockRestore();
});

// Caso de prueba para setLocalLine
test('Cuando se establece una línea local, debe retornar el resultado esperado', () => {
  // Datos de prueba
  const data = {
    // Datos de prueba
  };

  // Simula el resultado de la función setDataStorage
  const expectedResult = {
    // Resultado esperado
  };

  // Mock del método setDataStorage
  const setDataStorageMock = jest.spyOn(userRepository, 'setDataStorage').mockReturnValueOnce(expectedResult);

  // Llama a la función que se está probando
  const result = userViewModel.setLocalLine(data);

  // Verifica que se haya llamado a setDataStorage correctamente
  expect(setDataStorageMock).toHaveBeenCalledWith('LINE_SELECT', data);

  // Verifica que el resultado sea igual al resultado esperado
  expect(result).toEqual(expectedResult);

  // Restaura el método setDataStorage original
  setDataStorageMock.mockRestore();
});

// Caso de prueba para getUserLogged
test('Cuando se obtiene el usuario loggeado, debe retornar el resultado esperado', () => {
  // Simula el resultado de la función getInfoStorage
  const expectedUser = {
    // Datos de prueba
  };

  // Mock del método getInfoStorage
  const getInfoStorageMock = jest.spyOn(userRepository, 'getInfoStorage').mockReturnValueOnce(expectedUser);

  // Llama a la función que se está probando
  const result = userViewModel.getUserLogged();

  // Verifica que se haya llamado a getInfoStorage correctamente
  expect(getInfoStorageMock).toHaveBeenCalledWith('REGISTERED_USER');

  // Verifica que el resultado sea igual al resultado esperado
  expect(result).toEqual(expectedUser);

  // Restaura el método getInfoStorage original
  getInfoStorageMock.mockRestore();
});

// Caso de prueba para setDataLocalUser
test('Cuando se establece información local del usuario, debe retornar el resultado esperado', () => {
  // Datos de prueba
  const user = {
    // Datos de prueba
  };

  // Simula el resultado de la función createUserLocal
  const expectedResult = {
    // Resultado esperado
  };

  // Mock del método createUserLocal
  const createUserLocalMock = jest.spyOn(userRepository, 'createUserLocal').mockReturnValueOnce(expectedResult);

  // Llama a la función que se está probando
  const result = userViewModel.setDataLocalUser(user);

  // Verifica que se haya llamado a createUserLocal correctamente
  expect(createUserLocalMock).toHaveBeenCalledWith(user);

  // Verifica que el resultado sea igual al resultado esperado
  expect(result).toEqual(expectedResult);

  // Restaura el método createUserLocal original
  createUserLocalMock.mockRestore();
});

// Caso de prueba para startClearStorage
test('Cuando se inicia la limpieza de almacenamiento, debe retornar el resultado esperado', () => {
  // Simula el resultado de la función clearStorage
  const expectedResult = {
    // Resultado esperado
  };

  // Mock del método clearStorage
  const clearStorageMock = jest.spyOn(userRepository, 'clearStorage').mockReturnValueOnce(expectedResult);

  // Llama a la función que se está probando
  const result = userViewModel.startClearStorage();

  // Verifica que se haya llamado a clearStorage correctamente
  expect(clearStorageMock).toHaveBeenCalled();

  // Verifica que el resultado sea igual al resultado esperado
  expect(result).toEqual(expectedResult);

  // Restaura el método clearStorage original
  clearStorageMock.mockRestore();
});

