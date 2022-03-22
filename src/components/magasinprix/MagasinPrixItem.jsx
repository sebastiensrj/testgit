const MagasinPrixItem = function(props) {

    const { name, prix, promo} = props

    return (
        <ul>
            <li>Nom : {name}</li>
            <li>prix : {prix}</li>
            <li>Niveau : {promo}</li>
        </ul>
    )
}

export default MagasinPrixItem