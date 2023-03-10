const Service = ({service}) => {
    if (service) {
        const {name, description} = service; 
        return (
            <>
                <div className='m-4'>
                    <h5 className='fw-bold'>{name}</h5>
                        {description}
                </div>
            </>
         );
    }
    return null;
    
}

export default Service;