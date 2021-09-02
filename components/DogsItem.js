import Image from 'next/image';

function DogsItem ({imgUrl}) {

	return <div className="animate__animated animate__fadeIn">
		<Image src={imgUrl} alt="dog"/>
	</div>;

}

export default DogsItem;
