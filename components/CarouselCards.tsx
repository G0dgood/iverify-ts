import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import { data } from './data'

const CarouselCards = (loading: any) => {

  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)

  return (
    <View>
      {/* @ts-ignore */}
      <Carousel
        layout="default"
        layoutCardOffset={0}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index: React.SetStateAction<number>) => setIndex(index)}
      />
      <View style={styles.pagination} >
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
      <View style={styles.mainContainer}>
        {loading === true && <ActivityIndicator color={"#fff"} />}

      </View>
    </View>
  )
}


export default CarouselCards

const styles = StyleSheet.create({
  ActivityIndicator: {
    color: "#fff",
  },
  mainContainer: {
    position: "absolute",
    backgroundColor: "red ",
    top: 20,
    right: 100,
  },
  pagination: {
    position: "relative",
    top: -55,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
});