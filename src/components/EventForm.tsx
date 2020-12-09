import React, {useEffect} from "react";
import {Input} from 'antd';
import DatePicker from "./DatePicker";
import {useDispatch, useSelector} from "react-redux";
import {
    centerMap,
    selectDraftEvent,
    selectEditablePoint,
    setActive,
    unsetActive
} from "../redux/activeSelectionSlice";
import formatISO from 'date-fns/formatISO';
import {DataStore} from '@aws-amplify/datastore';
import {Itinerary, TimeLocation} from "../models";
import useSetState from "../hooks/useSetState";

import {Button, Space} from 'antd';
import {Typography} from 'antd';
import { EnvironmentOutlined  } from '@ant-design/icons';
import dayjs from "dayjs";
const {Paragraph, Title} = Typography

const {TextArea} = Input;
const {RangePicker} = DatePicker;
const EventForm = () => {
    const dispatch = useDispatch();
    const state = useSelector(selectDraftEvent);
    const editablePoint = useSelector(selectEditablePoint);


    const handleSubmit = async () => {
        const response = await DataStore.save(
            new Itinerary({...state, isRoot: true, })
        )

        console.log(response)
    }

    const handleLocationButtonClick = (key: 'start'|'end') => () => {

        if(editablePoint !== null) {
            dispatch(setActive({editablePoint:null}))
        } else {
            dispatch(setActive({editablePoint:key}));
            state.location && state.location[key] && dispatch(centerMap(state.location[key]))
        }
    }

    const determineLocationButtonStyle = (buttonKey: 'start'|'end') => {

        if(editablePoint === buttonKey) {
            return 'primary';
        }
        if(state.location && state.location[buttonKey]) {
            return 'default'
        }

        return 'dashed'
    }


    return (
        <Space direction='vertical'>
            <Space direction='horizontal'>
                <Title style={{margin: '5px'}}>Add an event</Title>
                <Button type='primary'>Save</Button>
                <Button type='primary'>Delete</Button>
                <Button shape='circle' type='primary' onClick={() => dispatch(unsetActive())}>X</Button>
            </Space>
            {/*<button onClick={() => dispatch(unsetActive())}>*/}
            {/*    close*/}
            {/*</button>*/}
            {/*<button onClick={handleSubmit}>*/}
            {/*    Submit?*/}
            {/*</button>*/}

            <Space direction='vertical'>
                {/*<But*/}
                <Space>
                    <Button type={determineLocationButtonStyle('start')} key='start' onClick={handleLocationButtonClick('start')} icon={<EnvironmentOutlined/>}/>Start
                    <Button type={determineLocationButtonStyle('end')} onClick={handleLocationButtonClick('end')} icon={<EnvironmentOutlined/>}/>End
                </Space>
                <RangePicker showTime={true} value={[dayjs(state.start), dayjs(state.end)]}/>
                <Space>
                    <Typography.Text>
                        title:
                    </Typography.Text>
                    <Paragraph style={{minWidth: '100px', border:'blue'}} title='title' editable={{onChange: (t) => dispatch(setActive({title: t}))}}>
                        {state.title}
                    </Paragraph>
                </Space>
                <TextArea rows={4} title='description' onChange={e => dispatch(setActive({description: e.target.value}))}/>
            </Space>
        </Space>
    )
}

export default EventForm;