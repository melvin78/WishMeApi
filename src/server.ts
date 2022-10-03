import App from '@/app';
import IndexRoute from '@routes/index.route';
import validateEnv from '@utils/validateEnv';
import BirthdayInfoRoutes from "@routes/birthday-info.route";

validateEnv();

const app = new App([new IndexRoute(), new BirthdayInfoRoutes()]);

app.listen();
