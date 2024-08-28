export const CONSTANTS = {
    APIS: {
        AUTH_API: {
            LOGIN:'/v1/user/login',
            SIGN_UP:'/v1/user/register',
            CONSTACT_US:'/v1/user/constact-us',
            GOOGLE_LOGIN:'/v1/user/social-login',
            EMAIL_VERIFY:'/v1/user/verify-email'
        },
        MAIN_API:{
            LOGOUT:'/v1/user/logout',
            GET_COMPANY_LIST:'/v1/company/list',
            CREATE_NEW_COMPANY:'/v1/company/create',
            GET_USER_PROFILE:'/v1/user/profile',
            SEND_COMPANY_EMAIL_VERIFICATION:'/v1/company/create-verification',
            UPLOAD_FILE:'/v1/file/upload',
            VERIFY_COMPANY:'/v1/company/verify-company',
            GET_COMPANY_LIST_FOR_INVESTOR:'/v1/investor/company-list',
            GET_INVESTOR_PROFILE:'/v1/investor/profile',
            CREATE_INVESTOR:'/v1/investor/create',
            GET_INVESTOR_LIST:'/v1/investor/list',
            SEND_INVESTMENT_REQUEST:'/v1/investor/create-investment-request',
            GET_INVESTOR_LIST_FOR_COMPANY:'/v1/company/investor-list',
            ACCEPT_REQUEST:'/v1/company/accept',
            GET_MESSAGE_LIST:'/v1/user/message-list',
        }
    },

    REGEX: {
        EMAIL: /[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}/,
        PASSWORD: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}/,
        PHONE:/^\d{10}$/,
        URL:/\bhttps?:\/\/[^\s/$.?#].[^\s]*\b/  // This regex matches URLs

    },

    environment:{
        googleClientId:'569345820377-9al78g02gng6b9m7h2j0pegak98m68lf.apps.googleusercontent.com',
        redirectingUrl:'https://plutus.co.in/auth/login',//live
        // redirectingUrl:'http://localhost:4200/auth/login',
        baseUlr:'https://api.plutus.co.in'
    },

    SOCKET_EVENTS : {
        SEND_MESSAGE:'SEND',
        JOIN_RROM:'JOIN_ROOM',
        NEW_MESSAGE:'NEW_MESSAGE'
    },
    

    MESSAGES:{
        PROCEED_TO_LOGIN:'Please login to access this page'
    },

    STATES:[
        "Andaman and Nicobar Islands",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chandigarh",
        "Chhattisgarh",
        "Dadra and Nagar Haveli and Daman and Diu",
        "Delhi",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Ladakh",
        "Lakshadweep",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Puducherry",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal"
      ]
      
}