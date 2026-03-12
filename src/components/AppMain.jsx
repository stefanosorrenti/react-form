
//IMPORTS
import { useState } from "react"

export default function AppMain() {
    //DATA
    const articlesList = ['Pane', 'Uova', 'Mozzarella', 'Zucchine', 'Pasta',]
    
    //FUNCTIONS
    function getDynamicSubmit (e) {  //Funzione che esegue della logica al quando viene esguito il submit in un form
        e.preventDefault() //Blocco il comportamento di default del form
        console.log('Evento non inviato');
        
    }
    return (

        /* Main */
        <main>

            {/* FORM SECTION */}
            <section>
                <form onSubmit={getDynamicSubmit}> {/* Aggiungo un evento per ascotlare al submit del form e passo uan funzione che esguira della logica. */}
                    <input type="text" />
                    <button>Aggiungi articolo</button>
                </form>
            </section>


            {/* Shopping list */}
            <div>
                <ul>
                    {articlesList.map((article, index) => ( //Aggiungo un map per avere un array della stessa lunghezza ma legegrmente modificato
                        <li key={index}>{article}</li> //Ad ogni iterazione verra creato un tag li con il singolo elemento dell'array.
                    ))}
                </ul>
            </div>
        </main>

    )
}