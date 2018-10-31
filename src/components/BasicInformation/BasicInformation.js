import React, { Component } from 'react';
import './BasicInformation.scss';
import avatar from './../../resources/images/avatar.png';
import { Row, Col } from 'react-grid-system';
class BasicInformation extends Component {
    render() {
        return (
            <div id="basicinfor">
                <Row>
                    <Col sm={2}>
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <h3 className="panel-title">Avatar</h3>
                            </div>
                            <div className="panel-body">
                                <img src={avatar} className="img-responsive" width="200" height="350" alt="avatar" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={10}>
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <h3 className="panel-title">Basic Information</h3>
                            </div>
                            <div className="panel-body">
                                <p>
                                    Name: PHAM VAN HOAN <br />
                                    DoB : 05 Nov 1990<br />
                                    Address: Hung Thai - Ninh Giang - Hai Duong<br />
                                    Email : vanhoancntt8@hotmail.com<br />
                                    Phone : (+84) 979-298-164
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default BasicInformation;
