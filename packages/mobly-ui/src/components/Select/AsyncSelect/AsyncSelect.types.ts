import { Props } from 'react-select/async';

import { SelectOption } from '../Select.types';

export interface AsyncSelectProps extends Props<SelectOption> {
	name: string;
	noLabelFloat?: boolean;
}
