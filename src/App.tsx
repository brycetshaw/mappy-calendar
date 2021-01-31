import React from 'react';

import '@aws-amplify/ui/dist/style.css'
import 'antd/dist/antd.css'
import {withAuthenticator, } from "aws-amplify-react";
import { Layout, Row, Col} from 'antd';
import MapArea from "./features/map/MapArea";
import Calendar from "./features/calendar/Calendar";
import { useSelector} from "react-redux";
import {selectDraftEvent} from "./features/editor/editorSlice";
import EventForm from "./features/editor/EventForm";

function App() {

    const draftEvent = useSelector(selectDraftEvent);
    return (
        <Layout>
            <Layout.Header>
                header
            </Layout.Header>
            <Layout.Content>
                <Row style={{height: '100vh', width: '100vw'}}>
                    <Col span={12}><MapArea/></Col>
                    <Col span={12}>
                        {Object.keys(draftEvent).length === 0 ?
                            <Calendar/> :
                            <EventForm/>
                        }
                    </Col>
                </Row>
            </Layout.Content>
        </Layout>
    );
}

export default withAuthenticator(App);
