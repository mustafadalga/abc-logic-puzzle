import Select, { GroupBase, Props as SelectProps } from 'react-select';

export interface OptionType {
    label: string;
    value: string;
}

interface CustomSelectProps extends Omit<SelectProps<OptionType, false, GroupBase<OptionType>>, 'options'> {
    options: Array<OptionType>;
    isClearable?: boolean;
}

export default function CustomSelect({ options, isClearable, ...restProps }: CustomSelectProps) {
    return (
        <Select
            options={options}
            isClearable={isClearable}
            theme={(theme) => ({
                ...theme,
                colors: {
                    ...theme.colors,
                    primary25: 'rgb(219 234 254)',//100
                    primary: 'rgb(147 197 253)',//300
                    neutral30: 'rgb(59 130 246)',
                    neutral40: '#111827',
                    neutral50: '#111827',
                    neutral70: '#111827',
                    neutral80: '#111827',
                },
            })}
            styles={{
                option: (provided, state) => ({
                    ...provided,
                    color: 'rgb(17 24 39)'
                }),
                singleValue: (provided, state) => ({
                    ...provided,
                    color: 'rgb(17 24 39)'
                }),
                placeholder: (provided, state) => ({
                    ...provided,
                    color: 'rgb(17 24 39)'
                })
            }}
            className="text-xs lg:text-sm"
            {...restProps}
        />
    );
};

