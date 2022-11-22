import express from 'express';
import config from './config.js'
import postRoutes from './routes/post.route.js';
import authRoutes from './routes/auth.route.js';
import usersRoutes from './routes/user.route.js';
import sideBarRoutes from './routes/sidebar.route.js';

const app = express();
const port = config.development.port || 3001;
import cors from 'cors';

//Invocamos a la conexión para la DB
import conexion from './database/db.js';

app.use(express.json());
app.use(cors());

app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/sidebar', sideBarRoutes);

app.listen(port, () => {
  console.log(`¡Server UP! PORT: ${port}`);
});

conexion();
