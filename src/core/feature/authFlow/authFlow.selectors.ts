import { AppState } from '../../store/store';

export const getName = ({
  auth: {
    user: { name },
  },
}: AppState): string => name;
