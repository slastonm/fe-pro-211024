
import React from 'react';
import PropTypes from 'prop-types';

HeaderText.propTypes = {
    title:PropTypes.string,
    bodyText:PropTypes.string
};
HeaderText.defaultProps = {
    title:'No info about title',
    bodyText:'No info about text'
};

function HeaderText(props) {
    return (
        <div>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal text-body-emphasis">
            {/* Pricing */}
            {props.title}
        </h1>
         <p className="fs-5 text-body-secondary">
            {/* Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization. */}
            {props.bodyText}
            </p>
        </div>                
        </div>
    );
}

export default HeaderText;
// import React from 'react';

// function HeaderText(props) {
//     return (
//         <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
//         <h1 className="display-4 fw-normal text-body-emphasis">Pricing</h1>
//         <p className="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
//         </div>    
//     );
// }

// export default HeaderText;