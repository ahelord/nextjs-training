
const DogsItem = ({imgUrl}) => {
    return (

        // <div class="card"> no se puede class por que es JSX y es una palabra reservada del lenguaje
        <div className="animate__animated animate__fadeIn">
            <img src={imgUrl}/>
        </div>
    )
}

export default DogsItem
