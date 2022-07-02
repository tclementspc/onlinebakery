export const errors = () => {

    const errors = {};

    if (!values.rating) {
        errors.rating ='Required';
    } else if (values.rating.length < 2) {
        errors.rating = "Must be at least 2 characters."; 

    } else if (values.rating.length > 15) {
           errors.rating = "Must be 15 characters or less";
    }
     
        return errors;
    };