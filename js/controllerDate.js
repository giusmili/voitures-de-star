export class Dates{
        /* methode */
         static dateTime = ()=>{
            const dataFooter = document.querySelector("footer p")
            let dateTimeFull = new Date().getFullYear()
            dataFooter.innerHTML += `&copy; - MIT - ${dateTimeFull}`
        }

}

