import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
    return ( 
        <FooterContainer className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="text-xs-ceter">
                    &copy;{new Date().getFullYear()} All right reserved
                    </p>
                </div>
            </div>
            </div>
        </FooterContainer>
     );
}
 

const FooterContainer = styled.footer`

.footer-middle{
    background: #CF2663;
}
`