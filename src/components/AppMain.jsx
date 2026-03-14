
//IMPORTS
import { use } from "react"
import { useState } from "react"

export default function AppMain() {
    //DATA
    const articlesList = ['Pane', 'Uova', 'Mozzarella', 'Zucchine', 'Pasta'] //Array di partenza
    const [shopList, setShopList] = useState(articlesList) //Variabile di stato che contine il mio array

    const [userValue, setUserValue] = useState('') //Variabile di stato dove salvo il valore scritto in 'Aggiungo articolo'
    const [edit, setEdit] = useState(-1) //Variabile di stato per far apparire il mio form secondario
    const [editedItem, setEditedItem] = useState('') //Variabile di stato dove salvo il valore scritto in nel form per la mdofica


    //FUNCTIONS
    function getDynamicSubmit(e) {  //Funzione che eseguita al submit del form che aggiunge un elemento
        e.preventDefault() //Blocco il comportamento di default del form
        //console.log('Evento non inviato');


        //console.log(`Il valore scritto dall'utente è ${userValue}`);
        const newList = [userValue, ...shopList] //Creo una nuova variabile contente il un NUOVO ARRAY contente la il clone del mio array inziale + il testo digitato dall'utente (userValue)
        //console.log(`Il nuovo array è ${newList}`);
        setShopList(newList) //Tramite il suo set specifico imposto la mia variabile di stato (quella che renderizza la lista) assume il valore di newList (Array aggiornato)
        setUserValue('') //Tramite il suo sett specifico imposto di nuovo il valore di uservalue vuoto per ragione estetiche



    }



    function deleteElement(elementIndex) { //Funzione per eleminare uno specifico elemento.
        /* console.log(elementIndex); */

        //SOLUZIONE 1:Creo un NUOVO array filtrato con solo gli elementi che hanno un indice differente dall'elemento cliccato
        /*  const updatedList = shopList.filter((itemList, index) => {
            if(index !== elementIndex) {
                return true
                
                }
                return false
                }) */
        //SOLUZIONE 2:Uso il metodo toSpliced che può rimuovere/modificare elementi restituendo un NUOVO array, e lo stesso per rimuovere l'elemento con l'indice selezioanto i nquel momento
        const removedItem = shopList.toSpliced(elementIndex, 1)
        //console.log(removedItem);

        setShopList(removedItem) ////Tramite il suo set specifico imposto la mia variabile di stato (quella che renderizza la lista) assume il valore di newList (Array aggiornato)




    }



    function getDynamicEdit(e) {//Funzione che esegue della logica per il form secondario (Quello per la modifica)
        e.preventDefault()

        //console.log(editedItem);
        //console.log(shopList);
        setUserValue('')//Tramite il suo set specifico un nuovo valore per la mia variabile di stato
        setEditedItem('')//Tramite il suo set specifico un nuovo valore per la mia variabile di stato
        setEdit(-1)//Tramite il suo set specifico un nuovo valore per la mia variabile di stato


    }


    function editElement(elementIndex) { //Funzione per modificare un elemento, viene eseguita al click del suo rispettivo bottone

        const updateItem = shopList.toSpliced(elementIndex, 1, editedItem)
        console.log(updateItem);

        setShopList(updateItem)

    }

    return (

        /* Main */

        <main>

            {/* FORM SECTION */}
            <section>
                <form onSubmit={getDynamicSubmit}> {/* Aggiungo un evento per ascotlare al submit del form e passo uan funzione che esguira della logica. */}
                    <input type="text" onChange={e => setUserValue(e.target.value)} value={userValue} />
                    <button disabled={userValue.length === 0 && true}  type='submit'>Aggiungi Articolo</button>
                </form>
            </section>


            {/* Shopping list */}

            <div>

                <ul>
                    {shopList.map((article, index) => ( //Aggiungo un map per avere un array della stessa lunghezza ma legegrmente modificato
                        <li key={index}>{article} {/* Ad ogni iterazione verra creato un tag li con il singolo elemento dell'array. */}
                            <button onClick={() => setEdit(index)}>Modifica</button>
                            <button onClick={() => deleteElement(index)}>Elimina</button>
                            {index == edit && (

                                <>
                                    <form onSubmit={getDynamicEdit}>

                                        <input type="text" onChange={e => setEditedItem(e.target.value)} value={editedItem} />
                                        <a onClick={() => { setEdit(-1); setEditedItem('') }}>X</a>
                                        <button type="submit" onClick={editedItem.length > 0 && function () { editElement(index) }} >Modfica</button>
                                        {editedItem.length === 0 && <div className="Alert">Inserisci almeno un carattere!</div>}
                                    </form>

                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </main>

    )
}