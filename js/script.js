// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue(


    {

        el : "#box",

        data : {
            messaggio : "",
            image: "../img/img1.jpg"
        },

        methods : {
            cap : function() {
        
                this.messaggio = this.messaggio.charAt(0).toUpperCase() + this.messaggio.slice(1).toLowerCase();
            
            }
        }
    }
    

)