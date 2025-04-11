import { Kitchen } from '~/components/KitchenComponent/kitchen';
import { VEGAN } from '~/constants/kitchen';

export const JuiciestPage = () => (
    <div>
        juiciest page
        <Kitchen kitchen={VEGAN} />
    </div>
);
