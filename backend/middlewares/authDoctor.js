import jwt from "jsonwebtoken";

//doctor authentication middleware
const authDoctor = async (req, res, next) => {
  try {
    const { dtoken } = req.headers;
    if (!dtoken) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized login again" });
    }

  const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET, { ignoreExpiration: true });

    req.docId = token_decode.id;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
export default authDoctor;
