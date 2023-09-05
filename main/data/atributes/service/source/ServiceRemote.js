module.exports.getService = getService;

const headers = {
  "X-SESSION-ID":"U2FsdGVkX18ZGTFpNTRFs762i9OJae5P5InE1T9X+oYw8iWhMa1DDorIhg+DQIiyvgUMC+SQGONuCSI5mZptOeuvxJENYN1jY9ePNOLWlXhWjTimZGbD5IWK6y3MhLBMZ8a2RvS2Tfn/qUUXN3WTtfsOuxg5gpwQCroTiwse2y4mBqs5KBJb+Fvq1g47mVt2NEP7Riyq90sJlis1C+DKkdqGKsECrIiBFnWIAu6dZ4vBwVdP3CUaHOaEKySysHLw9MKe+L98/Ei14XMwJoRei1rtGFuJbiq16ztDWoVYvYBBdAt3FOrLilr4gdFI2To72rs53mUia0C9zIejn/kF8bw84wWCwg21wo/AJ6JfxgoEJvVttHT60cQlg3Y+HjZtE5lvOsL1FcX4sGNOp/eMpUDAw0Lk8cvXxveWIqPYekOaIS25mL5ZX1I3QOciLTIamzX11WM8TTtfMSNLRpGg4do/5Xx4S2/c1wvZNr9rA7xF3J6YIPpJGpNQRYYQ0t3JfDdWiV/55LxFlWtK3FNVMiHgeUbMFHhPrhaxLemKQcU=",
  "X-MC-LINE":"0",
  "X-MC-LOB":"0",
  "Content-Type":"application/json; charset=UTF-8",
  "X-MC-MAIL":"",
  "X-MC-SO":"android",
  "X-Carrier":"#CoberturaCLARO",
  "X-Wifi":"true",
  "X-MC-HE-V":"3",
  "X-MC-SO-V":"3",
  "X-MC-SO-API":"29",
  "X-MC-SO-PHONE-F":"motorola",
  "X-MC-SO-PHONE-M":"moto g(8) play",
  "X-MC-APP-V":"15.1.3",
  "X-MC-DEVICE-NAME":"motorolamoto g(8) play",
  "X-MC-DEVICE-ID":"mk6xmn4AaQyJX4HPwThctKpul2Mf9UlDvPnqKZS0/pES5+eG7ixF9AQ4+amEOxrOJarytR8qajYkYFP/mKfZ5fzS8CCAdUPztsW/CNWc877Kzlg+uDSFNQU1fLAA7aQTeljvMB+Ywj0mde+0ge6QbQGuYapJA8VXqMac5hGDNTLrZLek3sdISPNmgY1dJuDU",
  "X-MC-USER-AGENT":"eyJpcCI6IjE5Mi4xNjguMzkuMTY5IiwidXNlckFnZW50IjoiTWlDbGFyb0FwcC8wLjAuMSAobW90b3JvbGE7IG1vdG8gZyg4KSBwbGF5OyBcdTAwM2NhbmRyb2lkLzEwXHUwMDNlKSJ9",
  "Cookie":"cookiesession1=678A3E32IJKLMNPQRSTUVWCDEFGHA090"        
}

async function getService(api, data) {
    
  console.log("Data a enviar", data);
  return new Promise(async (resolve, reject) => {
    try {
      const res = await my.request({
        url: api + '/General/ConsultaServicioTecnico/',
        method: 'POST',
        headers: headers,
        data: { data: data }
      });

      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
}

