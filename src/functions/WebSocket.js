import React, { useEffect } from 'react';
import Communications from 'react-native-communications';

const AppWebSocket = () => {
    const socket = new WebSocket('ws://your-esp8266-ip-address:your-port');
    useEffect(() => {

        socket.onopen = () => {
            console.log('WebSocket connection opened');
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log('Received data from ESP8266:', data);
            // Handle the received data as needed
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        // Cleanup the WebSocket connection on component unmount
        return () => {
            socket.close();
        };
    }, []);

    const sendDataToArduino = (data) => {
        socket.send(JSON.stringify(data));
    };

    // Example usage
    sendDataToArduino({ message: 'Hello from React Native!' });

};



export default AppWebSocket;
