
//IMPORTS
import { use } from "react"
import { useState } from "react"


export default function AppMain() {
    //DATA
    const [shopList, setShopList] = useState(['Pane', 'Uova', 'Mozzarella', 'Zucchine', 'Pasta'])
    //let articlesList = ['Pane', 'Uova', 'Mozzarella', 'Zucchine', 'Pasta',] //Array di partenza
    const [userValue, setUserValue] = useState('')
    const [edit, setEdit] = useState(-1)

    const [buttonTitle, setButtonTitle] = useState('Aggiungi articolo')
    //FUNCTIONS
    function getDynamicSubmit(e) {  //Funzione che esegue della logica al quando viene esguito il submit in un form
        e.preventDefault() //Blocco il comportamento di default del form
        //console.log('Evento non inviato');
        console.log(`Il valore scritto dall'utente è ${userValue}`);
        const newList = [userValue, ...shopList]
        console.log(`Il nuovo array è ${newList}`);
        setShopList(newList)
        setUserValue('')
        
    }

    function deleteElement(elementIndex) {

        const updatedList = shopList.filter((itemList, index) => {
            if(index !== elementIndex) {
                return true

            }
            return false
        })

        setShopList(updatedList)
        
    }

    //FUNZIONE CHE SI ATTIVA AL CLICK DELL'ELEMENTO
    //QUANDO CLICCO UN BOTTO APPARE UN PROMPT
    //L'UTENTE DIGITA QUELLO CHE VUOLE NEL PROMPT E SALVO IN UNA VARIABILE
    //LA FUNZIONE DEVE RESTIURIMI UN ARRAY DOVE
    //SOLO IL VALROE DELL'ELEMENTO CLICCATO DOVRA ESSERE UGUALE AL VALORE DEL PROMPT

    function editElement(elementIndex) {
        //const userPrompt = prompt('Inserisci qui il titolo')
        setEdit(elementIndex)
        
        
        

        
        
        
    }

    return (

        /* Main */
        <main>

            {/* FORM SECTION */}
            <section>
                <form onSubmit={getDynamicSubmit}> {/* Aggiungo un evento per ascotlare al submit del form e passo uan funzione che esguira della logica. */}
                    <input type="text" onChange={e => setUserValue(e.target.value)} value={userValue} />
                    <button type="submit">{buttonTitle}</button>
                </form>
            </section>


            {/* Shopping list */}
            <div>
                
                <ul>
                    {shopList.map((article, index) => ( //Aggiungo un map per avere un array della stessa lunghezza ma legegrmente modificato
                        <li key={index}>{article} {/* Ad ogni iterazione verra creato un tag li con il singolo elemento dell'array. */}
                            <button onClick={()=> editElement(index)}>Modifica</button>
                            <button onClick={() => deleteElement(index)}>Elimina</button>
                            {index == edit && (
                                <>
                                <form>
                                    <input type="text" />
                                </form>
                                </>
                            ) } 
                        </li> 
                    ))}
                </ul>
            </div>
        </main>

    )
}