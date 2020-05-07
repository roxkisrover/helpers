export const createRandomPassword = (length = 8) => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';

    if (window.crypto && window.crypto.getRandomValues) { // Cryptographically strong variant
        const values = new Uint32Array(length);

        window.crypto.getRandomValues(values);

        for (let i = 0; i < length; i += 1) {
            password += charset[values[i] % charset.length];
        }
    } else { // Simple fallback variant
        for (let i = 0; i < length; i += 1) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
    }

    return password;
};
