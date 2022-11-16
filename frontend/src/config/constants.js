import Swal from "sweetalert2";

//export const urlBackend = "http://127.0.0.1:3001";
export const urlBackend = "https://adminservice.herokuapp.com";

export const ALERT = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

