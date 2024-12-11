import React from 'react';
import PropTypes from 'prop-types';

HeaderNav.propTypes = {
    isLogin:PropTypes.bool,
    linksData:PropTypes.arrayOf(
        PropTypes.shape({
            value:PropTypes.string,
            link:PropTypes.string
        })
    )
};
HeaderNav.defaultProps ={
    isLogin:false
}


function HeaderNav(props) {
    // let isLogin = false;
    // if(props.isLogin){
    //     return (
    //         <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
    //             <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Features</a>
    //             <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Enterprise</a>
    //             <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Support</a>
    //             <a className="py-2 link-body-emphasis text-decoration-none" href="#">Pricing</a>
    //         </nav>
    //     );        
    // }
    // else{
    //     return (
    //         <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
    //             <button className='btn btn-primary'>
    //                 Login
    //             </button>
    //         </nav>
    //     );
    // }
    let linksEl = props.linksData.map((item, index)=>{
        return <a 
        key={index} 
        className="me-3 py-2 link-body-emphasis text-decoration-none"
         href={item.link}>
            {item.value}
            </a>
    })
    let navigation = <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                {/* <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Features</a>
                <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Enterprise</a>
                <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Support</a>
                <a className="py-2 link-body-emphasis text-decoration-none" href="#">Pricing</a> */}
                {linksEl}
            </nav>

    let loginButton =  <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <button className='btn btn-primary'>
                    Login
                </button>
            </nav>
    return(
        props.isLogin ? navigation : loginButton
    )

}

export default HeaderNav;