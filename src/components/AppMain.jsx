
//IMPORTS
import { useState } from "react"

export default function AppMain() {
    //DATA
    const [shopList, setShopList] = useState(['Pane', 'Uova', 'Mozzarella', 'Zucchine', 'Pasta'])
    //let articlesList = ['Pane', 'Uova', 'Mozzarella', 'Zucchine', 'Pasta',] //Array di partenza
    const [userValue, setUserValue] = useState('')
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


    return (

        /* Main */
        <main>

            {/* FORM SECTION */}
            <section>
                <form onSubmit={getDynamicSubmit}> {/* Aggiungo un evento per ascotlare al submit del form e passo uan funzione che esguira della logica. */}
                    <input type="text" onChange={e => setUserValue(e.target.value)} value={userValue} />
                    <button type="submit">Aggiungi articolo</button>
                </form>
            </section>


            {/* Shopping list */}
            <div>
                <ul>
                    {shopList.map((article, index) => ( //Aggiungo un map per avere un array della stessa lunghezza ma legegrmente modificato
                        <li key={index}>{article} {/* Ad ogni iterazione verra creato un tag li con il singolo elemento dell'array. */}
                            <button onClick={() => deleteElement(index)}>Elimina</button>
                        </li> 
                    ))}
                </ul>
            </div>
        </main>

    )
}