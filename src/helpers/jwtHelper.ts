import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

const createToken = (payload: object, secret: Secret, expireTime: string) => {
  return jwt.sign(payload, secret, { expiresIn: expireTime });
};

const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const jwtHelper = { createToken, verifyToken };

// import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';

// const createToken = (payload: object, secret: Secret, expireTime: string) => {
//   const options: SignOptions = {
//     expiresIn: Number(expireTime),
//   };

//   return jwt.sign(payload, secret, options);
// };

// const verifyToken = (token: string, secret: Secret) => {
//   return jwt.verify(token, secret) as JwtPayload;
// };

// export const jwtHelper = { createToken, verifyToken };
