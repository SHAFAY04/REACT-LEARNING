import whitelist from "../config/allowedOrigins.js";
const credentials = (req, res, next) => {
    if (whitelist.includes(req.headers.origin)) {
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
};
export default credentials;
//# sourceMappingURL=credentials.js.map