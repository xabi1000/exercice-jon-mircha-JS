export function scrollTop() {

   const scrollIcon = document.getElementById('toTop');
   const top = `500`

   const mouve = () => {
      if (window.pageYOffset > top || document.documentElement.scrollTop > top) {
         scrollIcon.classList.add(`to-top--scale`)
      }else {
         scrollIcon.classList.remove(`to-top--scale`)
      }
   }
   document.addEventListener('scroll', mouve);
   scrollIcon.addEventListener('click', () => {
      //window.document.documentElement.scrollTop = 0;
      document.documentElement.scrollTo({
         top: 0,
         behavior: 'smooth'
       });
   })
}