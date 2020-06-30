export const PROFILE_GET = 'PROFILE_GET';
export const PROFILE_SET = 'PROFILE_SET';

export const profileGet = () => ({
    type: PROFILE_GET,
})

export const profileSet = (name) => ({
    type: PROFILE_SET,
    payload: name,
})