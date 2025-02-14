function Profilecard({title,handle,imageSrc,description}){
    //const {title,handle}=props;
    

    return (
        <div>
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={imageSrc} alt="pda logo" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default Profilecard;

//hi