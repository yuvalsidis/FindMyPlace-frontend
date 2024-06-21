
import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const LocationAccessModal = ({ setLocation, handleOpenModal, handleCloseModal, isLocationModalOpen }) => {

    const getLocation = async (onLocationSuccess) => {
        if (!navigator.geolocation) {
            console.error('Geolocation is not supported by this browser.');
            return;
        }

        try {
            await navigator.geolocation.getCurrentPosition(onLocationSuccess)
        } catch (error) {
            console.error('Error obtaining location:', error)
        }
    }

    const handleEnableLocation = () => {
        getLocation((locationData) => {
            setLocation(
                {
                    lat: locationData.coords.latitude,
                    lng: locationData.coords.longitude
                }
            )
            handleCloseModal()
        });
    }



    return (
        <Dialog open={isLocationModalOpen} onClose={handleCloseModal}>
            <DialogTitle>Enable Location Services</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Allowing location access will personalize your experience by displaying your area on the map.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseModal}>No, thanks</Button>
                <Button onClick={handleEnableLocation}>Enable Location</Button>
            </DialogActions>
        </Dialog>
    )
}
export default LocationAccessModal