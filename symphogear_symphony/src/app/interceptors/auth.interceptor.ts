import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = window.localStorage.getItem("token");
  let authReq = req.clone();

  if(token){
     authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  // Ajout du token dans les entêtes de la requête

  return next(authReq);
};
