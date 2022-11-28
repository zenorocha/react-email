var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import * as SlotPrimitive from '@radix-ui/react-slot';
import classnames from 'classnames';
import * as React from 'react';
import { unreachable } from '../utils';
export const Text = React.forwardRef((_a, forwardedRef) => {
    var { as: Tag = 'span', size = '2', color = 'gray', transform, weight = 'normal', className, children } = _a, props = __rest(_a, ["as", "size", "color", "transform", "weight", "className", "children"]);
    return (_jsx(SlotPrimitive.Slot, Object.assign({ ref: forwardedRef, className: classnames(className, transform, getSizesClassNames(size), getColorClassNames(color), getWeightClassNames(weight)) }, props, { children: _jsx(Tag, { children: children }) })));
});
const getSizesClassNames = (size) => {
    switch (size) {
        case '1':
            return 'text-xs';
        case undefined:
        case '2':
            return 'text-sm';
        case '3':
            return 'text-base';
        case '4':
            return 'text-lg';
        case '5':
            return ['text-17px', 'md:text-xl tracking-[-0.16px]'];
        case '6':
            return 'text-2xl tracking-[-0.288px]';
        case '7':
            return 'text-[28px] leading-[34px] tracking-[-0.416px]';
        case '8':
            return 'text-[35px] leading-[42px] tracking-[-0.64px]';
        case '9':
            return 'text-6xl leading-[73px] tracking-[-0.896px]';
        default:
            return unreachable(size);
    }
};
const getColorClassNames = (color) => {
    switch (color) {
        case 'white':
            return 'text-slate-12';
        case undefined:
        case 'gray':
            return 'text-slate-11';
        default:
            return unreachable(color);
    }
};
const getWeightClassNames = (weight) => {
    switch (weight) {
        case undefined:
        case 'normal':
            return 'font-normal';
        case 'medium':
            return 'font-medium';
        default:
            return unreachable(weight);
    }
};
Text.displayName = 'Text';
