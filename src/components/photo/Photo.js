export const Photo = (props) => {


    const {title, thumbnailUrl} = props.album;
        return(
            <>
                <div>
                    
                    <img src={thumbnailUrl} />
                    
                     </div>
          
            </>
        )

    
}