// @flow

type Variables = {
    landingPage: string,
    streamr: string,
}

export default ({ landingPage, streamr }: Variables) => ({
    marketplace: '/',
    account: '/account/:tab(purchases|products)?',
    createProduct: '/account/products/create',
    editProduct: '/products/:id/edit',
    error: '/error',
    externalForgotPassword: `${streamr}/auth/forgotPassword`,
    externalLogin: `${streamr}/j_spring_security_check`,
    externalRegister: `${streamr}/auth/register`,
    externalResetPassword: `${streamr}/auth/resetPassword`,
    externalSignUp: `${streamr}/auth/signup`,
    forgotPassword: '/forgotPassword',
    login: '/login',
    product: '/products/:id',
    publish: '/products/:id/publish',
    purchase: '/products/:id/purchase',
    register: '/register',
    resetPassword: '/resetPassword',
    root: '/',
    signUp: '/signup',
    streamPreview: '/products/:id/streamPreview/:streamId',
    terms: 'https://s3.amazonaws.com/streamr-public/streamr-terms-of-use.pdf',
    privacy: 'https://s3.amazonaws.com/streamr-public/streamr-privacy-policy.pdf',
    whitepaper: `${landingPage}/whitepaper`,
})
