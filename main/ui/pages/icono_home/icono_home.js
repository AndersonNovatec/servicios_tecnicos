/**
 * @module icono_home - /ui/pages/icono_home
 */

/**
 * @function PageIcono
 * @description Esta página muestra al usuario un icono el cuál al dar click sobre él redirecciona a la interfaz de selección de cuentas
 */

Page({
  data: {},
  onLoad() {},
  /**
   * @function redirect
   * @description Esta función al ser utilizada direcciona a la vista de la page home
  */
  redirect(){
    my.navigateTo({
      url: '/main/ui/pages/home/home'
    })
  }
});
