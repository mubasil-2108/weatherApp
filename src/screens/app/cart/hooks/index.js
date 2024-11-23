import { appImages } from "../../../../services";

export function useHooks() {
    const chatData = [
        { id: '1', name: 'Aspen Mango', message: 'Lorem ipsum dolor sit amet.', time: '5 mins ago', image: appImages.profile1 },
        { id: '2', name: 'Aspen Mango', message: 'Lorem ipsum dolor sit amet.', time: '5 mins ago', image: appImages.profile2 },
        { id: '3', name: 'Aspen Mango', message: 'Lorem ipsum dolor sit amet.', time: '5 mins ago', image: appImages.profile3 },
        { id: '4', name: 'Aspen Mango', message: 'Lorem ipsum dolor sit amet.', time: '5 mins ago', image: appImages.profile1 },
        { id: '5', name: 'Aspen Mango', message: 'Lorem ipsum dolor sit amet.', time: '5 mins ago', image: appImages.profile2 },
        { id: '6', name: 'Aspen Mango', message: 'Lorem ipsum dolor sit amet.', time: '5 mins ago', image: appImages.profile3 },
        { id: '7', name: 'Aspen Mango', message: 'Lorem ipsum dolor sit amet.', time: '5 mins ago', image: appImages.profile1 },
        { id: '8', name: 'Aspen Mango', message: 'Lorem ipsum dolor sit amet.', time: '5 mins ago', image: appImages.profile2 },
        { id: '9', name: 'Aspen Mango', message: 'Lorem ipsum dolor sit amet.', time: '5 mins ago', image: appImages.profile3 },
      ];
    return {
        chatData
    }
}