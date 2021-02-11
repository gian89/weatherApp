import React, {useImperativeHandle, useRef} from 'react';
import {View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import CityLIstComponent from "./CityLIstComponent";



export const SwipeableCityListModal = React.forwardRef((props, ref) => {


    useImperativeHandle(ref, () => ({

        async showModal(item) {
            onOpen();
        },
    }));

    const modalizeRef = useRef();

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
            <Modalize ref={modalizeRef}>
                <View>
                    <CityLIstComponent/>
                </View>
            </Modalize>
    );
});


