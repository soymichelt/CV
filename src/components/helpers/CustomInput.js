/*
    Customización de Input
*/
import React from 'react'
import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input'

const CustomInput = ({ type, input, id, className, startAdornment, shrink }) => {

    const _id = id ? { 'id': id } : null,
    _className = className ? { 'className': className } : null,
    _startAdornment = startAdornment ? { 'startAdornment': startAdornment } : null,
    _shrink = shrink ? { 'shrink': shrink } : null;

    return (

            <Input
                { ...input }
                type={ type ? type : 'text' }
                { ..._id }
                { ..._className }
                { ..._startAdornment }
                { ..._shrink }
            />

    );

}

CustomInput.propTypes = {
    type: PropTypes.string,
    input: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    startAdornment: PropTypes.node,
    shrink: PropTypes.string,
};

export default CustomInput;