import axios from 'axios';

// Create an axios instance for centralized API configuration
const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with your backend API's base URL
    timeout: 10000, // Request timeout (10 seconds)
});

// API call to fetch Kolam designs from the backend
export const fetchKolamDesigns = async () => {
    try {
        const response = await apiClient.get('/kolam-designs');
        return response.data; // Assuming the backend returns an array of Kolam designs
    } catch (error) {
        console.error('Error fetching Kolam designs:', error);
        throw error;
    }
};

// API call to upload Kolam image for recognition
export const uploadKolamImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file); // Append file to the form data

    try {
        const response = await apiClient.post('/upload-kolam', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data; // Assuming the backend returns the recognition result
    } catch (error) {
        console.error('Error uploading Kolam image:', error);
        throw error;
    }
};

// API call to generate Kolam pattern
export const generateKolamPattern = async (options) => {
    try {
        const response = await apiClient.post('/generate-kolam', options);
        return response.data; // Assuming the backend returns the generated Kolam details
    } catch (error) {
        console.error('Error generating Kolam pattern:', error);
        throw error;
    }
};

export default apiClient;