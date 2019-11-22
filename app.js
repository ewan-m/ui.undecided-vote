import { enableRouting } from './routing/router.js';

enableRouting(['landing', 'selling', 'chat'], 'landing', 'router-outlet');