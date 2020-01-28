
export const colors = {
    blackText: '#050002',
    grayText: '#666766',
    grayBackground: '#f1f1f1',
};

const baseFontSize = 20;
const baselineHeight = 2;

const fontRatios = {
    xxlarge: 1.58,
    xlarge: 1.45,
    large: 1.22,
    medium: 1.0,
    small: 0.85,
    xsmall: 0.65,
};

export const fontSizes = {
    xxlarge: Math.floor(baseFontSize*fontRatios.xxlarge) + 'px',
    xlarge: Math.floor(baseFontSize*fontRatios.xlarge) + 'px',
    large: Math.floor(baseFontSize*fontRatios.large) + 'px',
    medium: Math.floor(baseFontSize*fontRatios.medium) + 'px',
    small: Math.floor(baseFontSize*fontRatios.small) + 'px',
    xsmall: Math.floor(baseFontSize*fontRatios.xsmall) + 'px',
};

export const lineHeights = {
    xxlarge: Math.floor(baseFontSize*fontRatios.xxlarge+baselineHeight) + 'px',
    xlarge: Math.floor(baseFontSize*fontRatios.xlarge+baselineHeight) + 'px',
    large: Math.floor(baseFontSize*fontRatios.large+baselineHeight) + 'px',
    medium: Math.floor(baseFontSize*fontRatios.medium+baselineHeight) + 'px',
    small: Math.floor(baseFontSize*fontRatios.small+baselineHeight) + 'px',
    xsmall: Math.floor(baseFontSize*fontRatios.xsmall+baselineHeight) + 'px',
};

console.log(fontSizes.xlarge);
