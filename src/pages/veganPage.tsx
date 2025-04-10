import { Kitchen } from '~/components/KitchenComponent/kitchen';
import { BAKE } from '~/constants/kitchen';

export const VeganPage = () => (
    <div>
        vegan page
        <Kitchen kitchen={BAKE} />
    </div>
);
