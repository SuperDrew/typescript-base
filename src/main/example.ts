export const convertToBooleanWithDefaultTrue = (value: string): boolean => {
    if (value != 'true' && value != 'false') {
        return true;
    }
    return value === 'true';
};