import { useState } from "react";
import { appImages } from "../../../../services";

export function useHooks() {
    const [pressed, setPressed] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const images = [
      { id: '1', source: appImages.place1 },
      { id: '2', source: appImages.place2 },
      { id: '3', source: appImages.place3 },
      { id: '4', source: appImages.place4 },
    ];

    const data = [
      {
        id: '1',
        name: 'Van Nga',
        date: '2 weeks ago',
        review: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
        rating: 4,
        image: appImages.review,
      },
      {
        id: '2',
        name: 'Van Nga',
        date: '2 weeks ago',
        review: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
        rating: 3.9,
        image: appImages.review,
      },
      {
        id: '3',
        name: 'Van Nga',
        date: '2 weeks ago',
        review: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
        rating: 4.5,
        image: appImages.review,
      },
      {
        id: '4',
        name: 'Van Nga',
        date: '2 weeks ago',
        review: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
        rating: 2,
        image: appImages.review,
      },
    ];

    return { 
       pressed,
       setPressed,
       images,
       setModalVisible,
       modalVisible,
       data
     }
}