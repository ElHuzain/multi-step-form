export const useValidateName = (name: string) => {
    if (name === '') return {
        result: false,
        message: "This field is required"
    };

    return {
        result: true,
        message: null
    }
}

export const useValidateEmail = (email: string) => {
    if (email === '') return {
        result: false,
        message: 'This field is required'
    }

    if (!email.includes('@') || !email.includes('.')) return {
        result: false,
        message: 'Format is invalid'
    }

    return {
        result: true,
        message: null
    }
}

export const useValidatePhoneNumber = (number: string) => {
    if (number === '') return {
        result: false,
        message: 'This field is required'
    }

    if (number.length < 6 || isNaN(parseInt(number))) return {
        result: false,
        message: 'Format is invalid'
    }

    return {
        result: true,
        message: null
    }
}