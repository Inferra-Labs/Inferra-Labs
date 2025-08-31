import React from 'react';

const UploadForm = () => {
    return (
        <form>
            <label>
                Upload Kolam Image:
                <input type="file" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UploadForm;