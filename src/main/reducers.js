import { combineReducers } from 'redux';

import DashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tab/tabReducer';
import billingCyclesReducer from '../billingCycle/billingCycleReducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycles: billingCyclesReducer
});

export default rootReducer