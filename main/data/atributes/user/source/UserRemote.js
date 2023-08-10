// Fin variables que se exportarán para el home principal
module.exports.loginUser = loginUser;
module.exports.getInformationLine = getInformationLine;
// Fin variables que se exportarán para el home principal
const headers = {
  'X-SESSION-ID':'U2FsdGVkX1/GV7tHxfWg/F3Kmrr9o4ARnM1D6IrygPHYqm0xPsVmxsBr2oA/3o+VD7piOdMGkYCQSuvW7V0dkjNThy4Dg/8BzbG3KHPhrjT1Ir9MG7ZKZqSI7pgym8ty5J2Fa8Y4G33PAJaG/VuhIPQZ+2PNLHttMFgQ1UrF06i9UaRFGi7c+mQDvm8W2rwnbGJbATqKexeyzoyML7ChMuJRy5RLNDHJUJ+iLsaqZvDuNj/j+ArVODd29OdkZZbzz4ko2iCwsBQa8kbA2PDFvZJUs/w+us9iF7Q7PduXRlFD37VXyI986jm5hPB8m04GTYVvCaxCyuBzYgr7LaQSzHZIgJbyn/n1CXDgAVyNlHdqdgNgkZCYS22eFCv6lG2AyppOAJ7ff1Pc4p49vu4I9ZVeqquxqq9/lTJQGJE0NXOyftWgLXLvxPTRzRoU5Jge8BH+P/8DyyScR8RXOSlx6d9p6UkoCGnuI9NfxqdMz6GGLVhUjd3EZYTvWCRr43SxGjxqgUn8s9GyDsj3Oc1niFyZzLIEyj1TKkePlEx0wt8=',
  'X-MC-LINE':'0',
  'X-MC-LOB':'0',
  'X-MC-MAIL':'' ,
  'X-MC-SO':'android',
  'X-MC-DEVICE-ID':'apaBtkizNFNBZELjASE/HxysF2nkRUJ3EefWy9UX6y9Wz/iV/sRlb3y+yK8l1FTeogBA9lcLwkVLXFOtrzjTRwp8SGQ9BWh5+G2IeRbaEOMM04ocECda0jGTWwWVjeYC8LwH23SiRUbD73nbyAnMNfunzxeYvhCs/x2s9D+1y8I='
}

function loginUser(api, email, password) {

  return new Promise((resolve , reject) => {
    my.request({
      url: api + 'v1/soap/LoginUsuarioApp.json',
      method: 'POST',
      data: {
        data: {
          clave: password,
          nombreUsuario: email
        }
      },
      dataType: 'json',
      headers: headers,
      success: (result) => {
        // respondera la información del servicio         
        resolve(result.data)
      },
      fail: (error) => {
        // respondera la información del servicio  con su error
        reject(error)
      }
    });
  })
}

function getInformationLine(api, data) {

  return new Promise((resolve , reject) => {
    
    my.request({
      url: api + 'v1/soap/consultaInformacion.json',
      method: 'POST',
      data: {
        data: {
          AccountId:data.AccountId,
          accountIdHEader:'',
          alias:data.alias,
          custcode:'',
          esEmpresas:0,
          isZonaPublica:false,
          LineOfBusiness:data.LineOfBusiness,
          selected:false,
          token:data.token,
          tokenLine:'',
          valida:0
        }
      },
      dataType: 'json',
      headers: {
        'X-SESSION-ID':data.token,
        'X-MC-LINE': data.AccountId,
        'X-MC-LOB':'0',
        'X-MC-MAIL': data.email,
        // 'X-MC-SO':'android',
        'X-MC-DEVICE-ID':'apaBtkizNFNBZELjASE/HxysF2nkRUJ3EefWy9UX6y9Wz/iV/sRlb3y+yK8l1FTeogBA9lcLwkVLXFOtrzjTRwp8SGQ9BWh5+G2IeRbaEOMM04ocECda0jGTWwWVjeYC8LwH23SiRUbD73nbyAnMNfunzxeYvhCs/x2s9D+1y8I='
      },
      success: (result) => {
        // respondera la información del servicio 
        resolve(result.data)
      },
      fail: (error) => {
        // respondera la información del servicio  con su error
        reject(error)
      }
    });
  } )
  
}
// Fin de Funciones que se utilizan en el home principal

