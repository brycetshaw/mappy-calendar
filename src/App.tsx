import React, {useEffect} from 'react';

import '@aws-amplify/ui/dist/style.css'
import 'antd/dist/antd.css'
import {withAuthenticator, } from "aws-amplify-react";
import { Layout, Row, Col} from 'antd';
import MapArea from "./components/MapArea";
import CalendarArea from "./components/CalendarArea";
import {useDispatch} from "react-redux";
import { centerMap } from './redux/activeSelectionSlice';

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((location ) => {
            dispatch(centerMap([location.coords.latitude, location.coords.longitude]))
        })
    },[dispatch])

    return (
        <Layout>
            <Layout.Header>
                header
            </Layout.Header>
            <Layout.Content>
                <Row style={{height: '100vh', width: '100vw'}}>
                    <Col span={12}><MapArea/></Col>
                    <Col span={12}><CalendarArea/></Col>
                </Row>
            </Layout.Content>
        </Layout>
    );
}

export default withAuthenticator(App);
