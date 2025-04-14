import { Route, Routes } from 'react-router';

import { Const } from '~/components/ConstComponent/const';
import { JuiciestPage } from '~/pages/jusiestPage';
import { MainPage } from '~/pages/mainPage';
import { NotFoundPage } from '~/pages/notFoungPage';
import { VeganPage } from '~/pages/veganPage';

const AppRoute = () => (
    <Routes>
        <Route element={<Const />}>
            <Route path='/' element={<MainPage />} />
            <Route path='/vegan/second-courses' element={<VeganPage />} />
            <Route path='/juiciest' element={<JuiciestPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
);

export default AppRoute;
