
export default function AppMain() {

    const articlesList = ['Pane', 'Uova', 'Mozzarella', 'Zucchine', 'Pasta',]

    return(

        /* Main */
        <main>

            {/* Shopping list */}
            <ul>
                {articlesList.map((article, index) => (
                    <li key={index}>{article}</li>
                ))}
            </ul>
        </main>

    )
}