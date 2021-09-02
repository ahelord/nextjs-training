import useGetDogs from '../hooks/useGetDogs';
import DogsItem from './DogsItem';

function Breeds ({breed}) {

	const {'data': dogs, loading} = useGetDogs(breed);

	console.log(
		'loading',
		loading
	);

	/*
	 * Ejecutar cierto codigo de manera condicional
	 * Solo quiero que se ejecute la funcion getDogsFromBreeds cuando el codigo se ejecuta una vez
	 */

	// Custom hook: forma de extraer logica de un componente de tal forma que pueda utilizar en otro lado nuevamente

	// Cuando se carga el componente por primera vez se cargan las imagenes

	// Nos permita a nosotros cuando el componente carga y cuando esta cargando.
	/*
	 *    UseEffect(async ()=>{
	 *        const dogs = await getDogs(breed)
	 *        setDogs(dogs)
	 *     },[breed])
	 */

	return (
		<>
			<h3 className="animate__animated animate__fadeIn">
				{breed}
			</h3>

			{/* <div className="card-grid">*/}

			{/* {loading ? 'Cargando' : 'Data cargada'}*/}

			{loading && <p className="animate__animated animate__flash">
    Cargando
			</p>}

			{dogs.map((dog) => <DogsItem key={dog.uuid}
				{...dog}></DogsItem>)}

			{/* <div>*/}

			{/*  {imgDogs.map(imgDog => <BreedsItem key={imgDog} imgSrc={imgDog}></BreedsItem>)} */}

			{/* Tambien se puede utilizar el operador spreed para enviar todas las propiedades del objeto*/}

			{/* {dogs.map(dog => <BreedsItem key={dog.uuid} {...dog}></BreedsItem>)}
            {/* </div>*/}

			{/* </div>*/}
		</>
	);

}

export default Breeds;
