import { AppState } from '../../store/store';

export const getIsLoggedIn = ({ auth: { isLoggedIn } }: AppState): boolean => isLoggedIn;
