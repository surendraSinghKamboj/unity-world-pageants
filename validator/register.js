export const registerValidator = (readyData) => {
    const {
        firstName,
        lastName,
        email,
        phone,
        height,
        experience,
        facebook,
        instagram,
        lifeAmbition,
        nationalDirector,
        zip,
    } = readyData;
    if (
        firstName &&
        lastName &&
        email &&
        phone &&
        height &&
        experience &&
        facebook &&
        instagram &&
        lifeAmbition &&
        nationalDirector &&
        zip
    ) {
        return true
    }
    else {
        return false
    }
}