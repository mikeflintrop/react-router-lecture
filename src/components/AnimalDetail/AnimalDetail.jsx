import {useParams} from 'react-router-dom';

function AnimalDetail () {
    const {id} = useParams();

    console.log('Id is:', id);

    return (
        <>
            <h1>Animal Deets</h1>
            <p>Deets 4 animal with an id of {id}</p>
        </>
    );
}

export default AnimalDetail;