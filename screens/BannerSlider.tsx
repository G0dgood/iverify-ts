import React from 'react'
import { StyleSheet, View } from 'react-native'
import CarouselCards from '../components/CarouselCards'

const Banner = (loading: any) => {
    return (
        <View style={styles.container}>
            <CarouselCards loading={loading} />
        </View>
    );
}

export default Banner
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
});