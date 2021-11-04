import React from 'react';
import { Typography, CircularProgress, } from '@mui/material';
import PropTypes from 'prop-types';
import useFirebase from '../../util/useFirebase';

const ImageUpload = (props) => {
    const inputRef = React.useRef(null);
    const [imageUrl, setImageUrl] = React.useState(props.src);
    const { uploadImage, isLoading, } = useFirebase();

    const handleUploadImage = async (event) => {
        try {
            const { files } = event.target;
            const file = files[0];
            const url = await uploadImage(file);

            setImageUrl(url);
            props.onChange({
                target: {
                    name: props.name,
                    value: url,
                },
            });
        }
        catch (error) {
            console.log('upload image ->', error);
        }
    };

    React.useEffect(() => {
        if (props.src) setImageUrl(props.src);
    }, [props.src]);

    return (
        <div
            className={`image-upload-container ${props.className}`}
            onClick={() => inputRef?.current?.click()}
            role="button"
            title="Upload Image Button"
            aria-label="upload image button"
        >
            <input
                id={props.id}
                className="hide"
                ref={inputRef}
                type="file"
                onChange={handleUploadImage}
                accept="image/*"
                disabled={props.disabled}
                arial-label="input file ref"
                placeholder="select file"
                title="Input File Ref"
            />
            <img
                className={`image-upload-src ${isLoading ? 'blur-on-loading' : ''}`}
                src={imageUrl || 'image-not-found.png'}
                style={{
                    width: props.width,
                    height: props.height,
                }}
                onError={(e) => e.target.src = 'image-not-found.png'}
                alt="src not found"
            />
            <Typography
                className="image-upload-text"
                variant="overline"
                color="CaptionText"
            >
                {
                    isLoading ?
                        <CircularProgress role="spinbutton" aria-label="loading button" />
                        :
                        props.label
                }
            </Typography>
        </div>
    );
};

ImageUpload.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    className: PropTypes.string,
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    disabled: PropTypes.bool,
};

ImageUpload.defaultProps = {
    id: '',
    label: '',
    src: 'image-not-found.png',
    className: '',
    width: '100%',
    height: '200px',
    onChange: () => { },
    name: '',
    disabled: false,
};

export default ImageUpload;