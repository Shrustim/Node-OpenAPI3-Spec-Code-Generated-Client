import express from 'express';
import cookieParser from 'cookie-parser';
import healthRoutes from './routes/v1/health.routes.js';
import userRoutes from "./routes/v1/users.routes.js";
import profileRoutes from "./routes/v1/profile.routes.js";
import adminRoutes from "./routes/v1/admin.routes.js";
import authRoutes from "./routes/v1/auth.routes.js";
import { errorHandler } from './middlerware/errorHandler.js';
import { acceptVersion } from './middlerware/acceptVersion.js';
import { deprecation } from "./middlerware/deprecation.js";
import swaggerUi  from 'swagger-ui-express';
import swaggerSpec from './config/openapi.js';


export const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',acceptVersion,(req,res,next)=>{
  if(req.apiVersion.startsWith('1.')){
    return authRoutes(req,res,next)
  }
   return res.status(406).json({
    error: 'Unsupported API version',
  });

})
app.use(
  "/api/v1/auth",
  authRoutes
);

app.use('/api/profile',acceptVersion,deprecation({
  deprecationDate: '2026-10-01T00:00:00Z',
  sunsetDate: '2027-03-31T23:59:59Z',
  documentationUrl: 'https://example.com/docs/api-migration',

}),(req,res,next)=>{
  if(req.apiVersion.startsWith('1.')){
    return profileRoutes(req,res,next)
  }
   return res.status(406).json({
    error: 'Unsupported API version',
  });

})
app.use(
  "/api/v1/profile",deprecation({
  deprecationDate: '2026-10-01T00:00:00Z',
  sunsetDate: '2027-03-31T23:59:59Z',
  documentationUrl: 'https://example.com/docs/api-migration',

}),
  profileRoutes
);

app.use(
  "/api/v1/users/me",
  profileRoutes
);
app.use('/api/admin',acceptVersion,(req,res,next)=>{
  if(req.apiVersion.startsWith('1.')){
    return adminRoutes(req,res,next)
  }
   return res.status(406).json({
    error: 'Unsupported API version',
  });

})
app.use(
  "/api/v1/admin",
  adminRoutes
);

app.use('/health', healthRoutes);
app.use('/api/users',acceptVersion,(req,res,next)=>{
  if(req.apiVersion.startsWith('1.')){
    return userRoutes(req,res,next)
  }
   return res.status(406).json({
    error: 'Unsupported API version',
  });

})

app.use('/api/v1/users',userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);
