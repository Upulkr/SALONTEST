import React from 'react'

export  const Image = ({ className, image, alt, objectcontain, as, ...rest }) => {
    
    return (
        <div className={className} {...rest}>
        <img src={image} alt={alt} className={`w- h- ${objectcontain}`} />
      </div>
      
    );
};
