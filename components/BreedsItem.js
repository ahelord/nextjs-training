
const BreedsItem = ({imgUrl}) => {
    return (

        // <div class="card"> no se puede class por que es JSX y es una palabra reservada del lenguaje
        <div className="card">
            <img src={imgUrl}/>
        </div>
    )
}

export default BreedsItem
