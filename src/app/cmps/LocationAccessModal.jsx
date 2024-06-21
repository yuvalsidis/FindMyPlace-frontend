
import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const LocationAccessModal = ({ setLocation }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)


    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const getLocation = async (onLocationSuccess) => {
        if (!navigator.geolocation) {
            console.error('Geolocation is not supported by this browser.');
            return;
        }

        try {
            const position = await navigator.geolocation.getCurrentPosition()
            const { latitude, longitude } = position.coords
            onLocationSuccess({ latitude, longitude })
        } catch {
            console.error('Error obtaining location:', error)
        }
    }

    const handleEnableLocation = () => {
        getLocation((locationData) => {
            setLocation(locationData)
            handleCloseModal()
        });
    }



    return (
        <Dialog open={isModalOpen} onClose={handleCloseModal}>
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